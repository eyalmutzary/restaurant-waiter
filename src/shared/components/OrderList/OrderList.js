import React, { useMemo } from "react";
import styled from "styled-components";
import OrderItem from "./OrderItem";
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

Text.Empty = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0px 10px 0px;
`;

const OrderItemsWrapper = styled.div`
  max-height: 70vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
`;

const OrderList = ({ items, onAddNote, onRemoveItem }) => {
  const isItemsEmpty = !items || items.length === 0;
  const totalPrice = useMemo(() => sumBy(items, "price"), [items]);

  return (
    <OrderListWrapper>
      <Title>Order List:</Title>
      <OrderItemsWrapper>
        {!isItemsEmpty ? (
          items.map(({ listItemId, title, note, price }) => {
            return (
              <OrderItem
                key={listItemId}
                listItemId={listItemId}
                title={title}
                note={note}
                price={price}
                onAddNote={() => onAddNote(listItemId)}
                onRemoveItem={onRemoveItem}
              />
            );
          })
        ) : (
          <Text.Empty>List is empty.</Text.Empty>
        )}
      </OrderItemsWrapper>
      <TotalPriceWrapper>
        <Text>Total Price:</Text>
        <Text>{totalPrice.toFixed(2)}$</Text>
      </TotalPriceWrapper>
    </OrderListWrapper>
  );
};

export default OrderList;
