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
          <Icon name="list-ul" hover={false}/>
          View Orders
        </Button.Black>
        <Button.Black>
          <Icon name="receipt" hover={false}/>
          Print Bill
        </Button.Black>
        <Button.Black>
          <Icon name="plus" hover={false}/>
          New Order
        </Button.Black>
        <Button.Black>
          <Icon name="credit-card" hover={false}/>
          Payment
        </Button.Black>
      </ButtonsWrapper>
    </Modal>
  );
};

export default Actions;
