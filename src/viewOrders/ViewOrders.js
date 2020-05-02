import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";
import queryString from "query-string";
import styled from "styled-components";
import axios from "axios";
import {
  Screen,
  Button as BaseButton,
  Icon,
  Sidebar,
  ItemsList,
  LoadingSpinner,
} from "../shared/components";
import { AuthWaiterName } from "../app";

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 30px;
  margin: 30px;
  justify-content: flex-start;
  overflow: auto;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 20px 20px 0px 20px;
  position: absolute;
  width: 90%;
  right: 0px;
`;

const Text = styled.div`
  margin: 0px 20px 0px 20px;
`;

Text.Bold = styled(Text)`
  font-size: 18px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: bold;
`;

Text.Red = styled(Text)`
  color: ${({ theme }) => theme.colors.red};
`;

Text.Green = styled(Text)`
  color: ${({ theme }) => theme.colors.darkGreen};
`;

const OrderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px 0px 0px;
  padding: 20px;
`;

const OrderItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 300px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.lightPink};
  background-color: ${({ theme }) => theme.colors.white};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled(BaseButton.Black)`
  height: 50px;
  width: 100px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
`;

const ViewOrders = ({ history, location: { search, tableNum } }) => {
  const [authWaiterName, setAuthWaiterName] = useContext(AuthWaiterName);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [showNoteModal, setShowNoteModal] = useState(false);
  const tableId = useMemo(() => queryString.parse(search).tableId, [search]);
  const sidebarButtons = useMemo(() => {
    return {
      top: [{ name: "arrow-left", onClick: () => history.goBack() }],
      center: [],
      bottom: [{ name: "credit-card" }],
    };
  }, [history]);

  const fetchOrders = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/customerTables/products?id=${tableId}`);
      console.log(res.data);
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [tableId]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const onChangeOrderStatus = useCallback(
    async (orderId, isConfirmed) => {
      console.log(authWaiterName);
      setIsLoading(true);
      const newStatus = isConfirmed ? "Cooking" : "Canceled";
      try {
        const res = await axios.patch(`/orders/status`, {
          id: orderId,
          status: newStatus,
          waiterName: authWaiterName,
        });
        console.log(res.data);
        fetchOrders();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchOrders, authWaiterName]
  );

  const onAddNote = useCallback((orderedProductId) => {
    // Add note things
  }, []);

  return (
    <Screen>
      <Sidebar
        top={sidebarButtons.top}
        center={sidebarButtons.center}
        bottom={sidebarButtons.bottom}
      />
      <TopWrapper>
        <Text>Table: {tableNum}</Text>
      </TopWrapper>
      <ContentWrapper>
        {orders.length !== 0
          ? orders.map(({ id, OrderedProducts, OrderStatus }) => (
              <OrderWrapper key={id}>
                <OrderItemsWrapper>
                  <ItemsList
                    items={OrderedProducts}
                    editMode={OrderStatus.status === "Ordered"}
                    onAddNote={(orderedProductId) =>
                      onAddNote(orderedProductId)
                    }
                  />
                  {OrderStatus.status === "Ordered" ? (
                    <ButtonsWrapper>
                      <Button
                        disabled={!authWaiterName}
                        onClick={() => onChangeOrderStatus(id, false)}
                      >
                        <Icon name="times" hover={false} />
                      </Button>
                      <Button
                        disabled={!authWaiterName}
                        onClick={() => onChangeOrderStatus(id, true)}
                      >
                        <Icon name="check" hover={false} />
                      </Button>
                    </ButtonsWrapper>
                  ) : OrderStatus.status === "Canceled" ? (
                    <Text.Bold>
                      Status: <Text.Red>{OrderStatus.status}</Text.Red>
                    </Text.Bold>
                  ) : (
                    <Text.Bold>
                      Status: <Text.Green>{OrderStatus.status}</Text.Green>
                    </Text.Bold>
                  )}
                </OrderItemsWrapper>
              </OrderWrapper>
            ))
          : !isLoading && <Text.Bold>No Orders Found.</Text.Bold>}
        {isLoading && (
          <LoadingWrapper>
            <LoadingSpinner />
          </LoadingWrapper>
        )}
      </ContentWrapper>
    </Screen>
  );
};

export default ViewOrders;
