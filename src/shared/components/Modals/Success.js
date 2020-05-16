import React from "react";
import styled from "styled-components";
import { default as BaseIcon } from "../Icon";
import Modal from "./Modal";

const Description = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const Icon = styled(BaseIcon)`
  color: ${({ theme }) => theme.colors.darkGreen};
  font-size: 80px;
  font-weight: lighter;
  text-align: center;
`;

const Success = ({ title, onHide, description }) => {
  return (
    <Modal title={title} onHide={onHide}>
      <Icon hover={false} name="check" />
      <Description>{description}</Description>
    </Modal>
  );
};

export default Success;
