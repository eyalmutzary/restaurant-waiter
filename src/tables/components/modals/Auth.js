import React, { useCallback, useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { Modal, LoadingSpinner } from "../../../shared/components";
import axios from "axios";
import { AuthWaiterName } from "../../../app";

const WaiterNameWrapper = styled.div`
  display: flex;
  padding: 25px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Name = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-bottom: solid 2px ${({ theme }) => theme.colors.red};
  border-radius: 3px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 4px;
  margin: 10px;
  min-width: 100px;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.red};
    transition: ease-out 0.2s;
  }
`;

const Confirm = ({ onHide }) => {
  const [authWaiterName, setAuthWaiterName] = useContext(AuthWaiterName);
  const [names, setNames] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchNames = useCallback(async () => {
    setIsLoading(true);
    try {
      const waiters = await axios.get("/waiters");
      setNames(waiters.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNames();
  }, [fetchNames]);

  const onSelectName = useCallback(
    (name) => {
      setAuthWaiterName(name);
      localStorage.setItem("waiterName", name);
      onHide();
    },
    [setAuthWaiterName, onHide]
  );

  return (
    <Modal title="Authenticate" onHide={onHide}>
      <WaiterNameWrapper>
        {isLoading && <LoadingSpinner />}
        {names &&
          names.map(({ name, id }) => (
            <Name key={id} onClick={() => onSelectName(name)}>
              {name}
            </Name>
          ))}
      </WaiterNameWrapper>
    </Modal>
  );
};

export default Confirm;
