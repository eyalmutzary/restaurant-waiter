import React from "react";
import styled from "styled-components";
import { Modal, Button, Icon as BaseIcon } from "../../../shared/components";

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Icon = styled(BaseIcon)`
  margin-right: 7px;
`;

const Actions = ({ onHide, tableNum, onViewOrders }) => {
  return (
    <Modal title={"Table:" + tableNum} onHide={onHide}>
      <ButtonsWrapper>
        <Button.Black onClick={onViewOrders}>
          <Icon name="list-ul" />
          View Orders
        </Button.Black>
        <Button.Black>
          <Icon name="receipt" />
          Print Bill
        </Button.Black>
        <Button.Black>
          <Icon name="plus" />
          New Order
        </Button.Black>
        <Button.Black>
          <Icon name="credit-card" />
          Payment
        </Button.Black>
      </ButtonsWrapper>
    </Modal>
  );
};

export default Actions;
