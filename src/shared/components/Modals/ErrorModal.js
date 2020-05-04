import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Description = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const ErrorModal = ({ onHide, description }) => {
  return (
    <Modal title="Error Alert" onHide={onHide}>
      <Description>{description}</Description>
    </Modal>
  );
};

export default ErrorModal;
