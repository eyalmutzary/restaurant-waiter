import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import styled from "styled-components";
import {
  Screen,
  Button as BaseButton,
  Icon,
  Sidebar,
  ItemsList,
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

const ViewOrders = ({ history, location }) => {
  const queries = queryString.parse(location.search);
  const tableId = queries.tableId;

  const getOrders = useCallback(() => {
    let tableOrders = [];
    allOrders.forEach((order) => {
      if (order.tableId === tableId) {
        tableOrders.push({ orderId: order.orderId, items: [] });
      }
    });

    const tableOrderedProducts = orderedProducts.filter((orderedProduct) => {
      if (allOrders.find((order) => order.orderId === orderedProduct.orderId)) {
        return true;
      }
      return false;
    });

    tableOrderedProducts.forEach((orderedProduct) => {
      const product = foodCards.find(
        (product) => product.productId === orderedProduct.productId
      );
      tableOrders
        .find(({ orderId }) => orderId === orderedProduct.orderId)
        .items.push(product);
    });
    return tableOrders;
  }, [tableId]);

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
        <Text>Table: TableNum</Text>
        <WaiterAuth>
          <Text>Signed as: ADDNAME</Text>
          <Icon
            name="sign-out-alt"
          />
        </WaiterAuth>
      </TopWrapper>

      <ContentWrapper>
        {getOrders().map(({ orderId, items }) => (
          <OrderWrapper key={orderId}>
            <OrderItemsWrapper>
              <ItemsList items={items} />
              <ButtonsWrapper>
                <Button>
                  <Icon name="times" />
                </Button>
                <Button>
                  <Icon name="check" />
                </Button>
              </ButtonsWrapper>
            </OrderItemsWrapper>
          </OrderWrapper>
        ))}
      </ContentWrapper>
    </Screen>
  );
};

export default ViewOrders;
