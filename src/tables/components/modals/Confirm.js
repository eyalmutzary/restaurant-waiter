import React, { useMemo } from "react";
import styled from "styled-components";
import { Modal } from "../../../shared/components";

const Description = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  text-align: center;
`;

const Confirm = ({ onHide, onConfirm, description }) => {
  const setOfButtons = useMemo(
    () => [
      { text: "Close", onClick: onHide },
      {
        text: "Confirm",
        onClick: onConfirm,
      },
    ],
    [onHide, onConfirm]
  );

  return (
    <Modal title="Please Confirm" onHide={onHide} buttons={setOfButtons}>
      <Description>{description}</Description>
    </Modal>
  );
};

export default Confirm;
