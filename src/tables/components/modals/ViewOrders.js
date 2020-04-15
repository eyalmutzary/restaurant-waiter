import React, { useCallback } from "react";
import styled from "styled-components";
import { Modal, Button as BaseButton, Icon } from "../../../shared/components";
import { ItemsList } from "../../../shared/components";

import {
  orders as allOrders,
  orderedProducts,
  foodCards,
} from "../../../shared/constants";

const OrderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px 50px 0px;
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

const ViewOrders = ({ onHide, tableId, tableNum }) => {
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

    console.log("finally:");
    console.log(tableOrders);

    return tableOrders;
  }, [tableId]);

  return (
    <Modal title={tableNum + " - Orders"} onHide={onHide}>
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
    </Modal>
  );
};

export default ViewOrders;
