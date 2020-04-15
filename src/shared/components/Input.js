import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;

const Controller = styled.input`
  width: 100%;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0);
  padding-bottom: 6px;
  border: none;
  border-bottom: solid 1px ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.darkGray};
  outline: none;
  transition: all ease-in 0.2s;

  &:focus {
    border-bottom: solid 1px ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const Name = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray};
`;

const Input = ({ name, type }) => (
  <InputWrapper>
    <Controller type={type} placeholder={"Enter " + name + " here..."} />
    <Name>{name}</Name>
  </InputWrapper>
);

export default Input;
