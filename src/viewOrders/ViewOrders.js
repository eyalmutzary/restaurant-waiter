import React, { useCallback, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

import {
  orders as allOrders,
  orderedProducts,
  foodCards,
} from "../shared/constants";

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
  const [tableId, setTableId] = useState(queryString.parse(search).tableId);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOrders = useCallback(() => {
    setIsLoading(true);
    axios
      .get(`/customerTables/products?id=${tableId}`)
      .then(({ data }) => {
        setOrders(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => setIsLoading(false));
  }, [tableId]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const sidebarButtons = {
    top: [{ name: "arrow-left", onClick: () => history.goBack() }],
    center: [],
    bottom: [{ name: "credit-card" }],
  };

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
          ? orders.map(({ id, OrderedProducts }) => (
              <OrderWrapper key={id}>
                <OrderItemsWrapper>
                  <ItemsList items={OrderedProducts} />
                  <ButtonsWrapper>
                    <Button>
                      <Icon name="times" hover={false} />
                    </Button>
                    <Button>
                      <Icon name="check" hover={false} />
                    </Button>
                  </ButtonsWrapper>
                </OrderItemsWrapper>
              </OrderWrapper>
            ))
          : !isLoading && <Text>no Orders!</Text>}
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
