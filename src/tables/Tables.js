import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { tables } from "../shared/constants";
import { Screen, TablesList, Sidebar, Icon } from "../shared/components";
import {
  Confirm as ConfirmModal,
  Actions as ActionsModal,
  AddTable as AddTableModal,
  ViewOrders as ViewOrdersModal,
} from "./components/modals";

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
  ADDTABLE: "ADDTABLE",
  VIEWORDERS: "VIEWORDERS",
};

const Tables = () => {
  const [whichModalShown, setWhichModalShown] = useState();
  const [selectedTable, setSelectedTable] = useState({
    tableId: null,
    tableNum: null,
  });
  const [authWaiter, setAuthWaiter] = useState("Test");

  const sidebarButtons = {
    top: [
      { name: "sync-alt" },
      { name: "plus", onClick: () => setWhichModalShown(modalTypes.ADDTABLE) },
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
          onViewOrders={() => setWhichModalShown(modalTypes.VIEWORDERS)}
          tableNum={selectedTable.tableNum}
        />
      )}

      {whichModalShown === modalTypes.ADDTABLE && (
        <AddTableModal onHide={handleOnHide} />
      )}

      {whichModalShown === modalTypes.VIEWORDERS && (
        <ViewOrdersModal onHide={handleOnHide} {...selectedTable} />
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
