import React, { useCallback, useState, useEffect, useMemo } from "react";
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

const WaiterAuth = styled.div`
  display: flex;
`;

const Text = styled.div`
  margin: 0px 20px 0px 20px;
`;

Text.Bold = styled(Text)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: bold;
  text-align: center;
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
      setIsLoading(true);
      const newStatus = isConfirmed ? "Cooking" : "Canceled";
      try {
        const res = await axios.patch(`/orders/status`, {
          id: orderId,
          status: newStatus,
        });
        console.log(res.data);
        fetchOrders();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchOrders]
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
        <WaiterAuth>
          <Text>Signed as: ADDNAME</Text>
          <Icon name="sign-out-alt" />
        </WaiterAuth>
      </TopWrapper>
      <ContentWrapper>
        {orders.length !== 0
          ? orders.map(({ id, OrderedProducts, OrderStatus }) => (
              <OrderWrapper key={id}>
                <OrderItemsWrapper>
                  <ItemsList
                    items={OrderedProducts}
                    onAddNote={(orderedProductId) =>
                      onAddNote(orderedProductId)
                    }
                  />
                  {OrderStatus.status === "Ordered" ? (
                    <ButtonsWrapper>
                      <Button onClick={() => onChangeOrderStatus(id, false)}>
                        <Icon name="times" hover={false} />
                      </Button>
                      <Button onClick={() => onChangeOrderStatus(id, true)}>
                        <Icon name="check" hover={false} />
                      </Button>
                    </ButtonsWrapper>
                  ) : (
                    <Text.Bold>Status: {OrderStatus.status}</Text.Bold>
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
