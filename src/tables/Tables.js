import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { tables } from "../shared/constants";
import { Screen, Sidebar, Icon } from "../shared/components";
import {
  Confirm as ConfirmModal,
  Actions as ActionsModal,
  TablesList,
} from "./components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WaiterAuth = styled.div`
  margin: 20px 20px 0px 20px;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const AuthText = styled.div`
  margin: 0px 20px 0px 20px;
`;

const modalTypes = {
  CONFIRM: "CONFIRM",
  ACTIONS: "ACTIONS",
};

const Tables = ({ history }) => {
  const [whichModalShown, setWhichModalShown] = useState();
  const [selectedTable, setSelectedTable] = useState({
    tableId: null,
    tableNum: null,
  });
  const [authWaiter, setAuthWaiter] = useState("Test");

  const sidebarButtons = {
    top: [
      { name: "sync-alt", key: "sync-alt" },
      { name: "plus", key: "plus", onClick: () => history.push("/addTable") },
    ],
    center: [],
    bottom: [{ name: "cog" }],
  };

  const handleActionsClick = useCallback((tableId, tableNum) => {
    // remove tableNum arg
    setSelectedTable({ tableId, tableNum });
    setWhichModalShown(modalTypes.ACTIONS);
  }, []);

  const handleOnHide = useCallback(() => {
    setWhichModalShown(null);
  }, []);

  return (
    <Screen>
      {whichModalShown === modalTypes.CONFIRM && (
        <ConfirmModal
          description="Are you sure to logout?"
          onHide={handleOnHide}
        />
      )}

      {whichModalShown === modalTypes.ACTIONS && (
        <ActionsModal
          onHide={handleOnHide}
          onViewOrders={() =>
            history.push({
              pathname: `/viewOrders`,
              search: `?tableId=${selectedTable.tableId}`,
            })
          }
          tableNum={selectedTable.tableNum}
        />
      )}

      <Sidebar
        top={sidebarButtons.top}
        center={sidebarButtons.center}
        bottom={sidebarButtons.bottom}
      />
      <ContentWrapper>
        <WaiterAuth>
          <AuthText>Signed as: {authWaiter}</AuthText>
          <Icon
            name="sign-out-alt"
            onClick={() => setWhichModalShown(modalTypes.CONFIRM)}
          />
        </WaiterAuth>
        <TablesList
          tables={tables}
          onActionClick={(tableId, tableNum) =>
            handleActionsClick(tableId, tableNum)
          }
        />
      </ContentWrapper>
    </Screen>
  );
};

export default Tables;
