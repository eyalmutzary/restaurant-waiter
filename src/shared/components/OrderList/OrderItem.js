import styled from "styled-components";
import React from "react";
import BaseIcon from "../Icon";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0px 10px 0px;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Price = styled.div`
  flex: 1;
`;

const NoteWrapper = styled.div`
  font-size: 14px;
  padding: 5px 10px 0px 15px;
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
`;

const Note = styled.div`
  padding-left: 5px;
`;

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopIcon = styled(BaseIcon)`
  margin: 5px 15px 0px 10px;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red};
    transition: 0.4s;
  }
`;

const NoteIcon = styled(BaseIcon)`
  margin-right: 10px;
`;

const RightSideWrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderItem = ({
  listItemId,
  title,
  note,
  price,
  onAddNote,
  onRemoveItem,
}) => {
  return (
    <ItemWrapper>
      <ToolbarWrapper>
        <Title>{title}</Title>
        <RightSideWrapper>
          {/* <Price>{price.toFixed(2)}$</Price> */}
          <IconsWrapper>
            <TopIcon name="edit" onClick={() => onAddNote()}></TopIcon>
            <TopIcon
              name="times"
              onClick={() => onRemoveItem(listItemId)}
            ></TopIcon>
          </IconsWrapper>
        </RightSideWrapper>
      </ToolbarWrapper>
      {note && (
        <NoteWrapper>
          <NoteIcon name="star-of-life"></NoteIcon>
          <Note>{note}</Note>
        </NoteWrapper>
      )}
    </ItemWrapper>
  );
};

export default OrderItem;
