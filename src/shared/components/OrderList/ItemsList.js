import React from "react";
import styled from "styled-components";
import OrderItem from "./OrderItem";

const ListWrapper = styled.div`
  max-height: 70vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
`;

const Text = styled.div``;

Text.Empty = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0px 10px 0px;
`;

const ItemsList = ({ items, onAddNote, onRemoveItem }) => {
  const isItemsEmpty = !items || items.length === 0;

  return (
    <ListWrapper>
      {!isItemsEmpty ? (
        items.map(({ listItemId, note, Product }) => {
          return (
            <OrderItem
              key={listItemId}
              listItemId={listItemId}
              title={Product.name}
              note={note}
              price={Product.price}
              onAddNote={() => onAddNote(listItemId)}
              onRemoveItem={onRemoveItem}
            />
          );
        })
      ) : (
        <Text.Empty>List is empty.</Text.Empty>
      )}
    </ListWrapper>
  );
};

export default ItemsList;
