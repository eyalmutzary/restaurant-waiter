import React, { useMemo } from "react";
import styled from "styled-components";
import ItemsList from "./ItemsList";
import { sumBy } from "lodash";

const OrderListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  width: 25vw;
  height: 80vh;
  border-radius: 7px;
`;

const Title = styled.div`
  font-size: 26px;
  color: ${({ theme }) => theme.colors.darkGray};
  border-bottom: solid 1px ${({ theme }) => theme.colors.silver};
  padding-bottom: 14px;
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.darkGray};
  border-top: solid 1px ${({ theme }) => theme.colors.silver};
  padding-top: 14px;
`;

const Text = styled.div``;

const OrderList = ({ items, ...rest }) => {
  const totalPrice = useMemo(() => sumBy(items, "Product.price"), [items]);

  return (
    <OrderListWrapper>
      <Title>Order List:</Title>
      <ItemsList items={items} {...rest} />
      <TotalPriceWrapper>
        <Text>Total Price:</Text>
        <Text>{totalPrice.toFixed(2)}$</Text>
      </TotalPriceWrapper>
    </OrderListWrapper>
  );
};

export default OrderList;
