import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useContext,
} from "react";
import styled from "styled-components";
import { Screen, Sidebar, Icon, LoadingSpinner } from "../shared/components";
import {
  Confirm as ConfirmModal,
  Actions as ActionsModal,
  Auth as AuthModal,
  TablesList,
} from "./components";
import axios from "axios";
import { AuthWaiterName, Alerts } from "../app";

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
  LOGOUT: "LOGOUT",
  ACTIONS: "ACTIONS",
  AUTH: "AUTH",
};

const Tables = ({ history }) => {
  const [authWaiterName, setAuthWaiterName] = useContext(AuthWaiterName);
  const [alerts, setAlerts] = useContext(Alerts);
  const [whichModalShown, setWhichModalShown] = useState();
  const [selectedTable, setSelectedTable] = useState({
    tableId: null,
    tableNum: null,
  });
  const [initTables, setInitTables] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onInitTables = useCallback(async () => {
    console.log(alerts);
    setInitTables([]);
    setIsLoading(true);
    try {
      const tables = await axios.get("/customerTables");
      setInitTables(tables.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [alerts]);

  const sidebarButtons = useMemo(() => {
    return {
      top: [
        { name: "sync-alt", key: "sync-alt", onClick: () => onInitTables() },
        {
          name: "plus",
          key: "plus",
          disabled: true,
          onClick: () => history.push("/addTable"),
        },
      ],
      center: [],
      bottom: [{ name: "cog" }],
    };
  }, [history, onInitTables]);

  useEffect(() => {
    onInitTables();
  }, [onInitTables]);

  const handleActionsClick = useCallback((id, tableNum) => {
    setSelectedTable({ id, tableNum });
    setWhichModalShown(modalTypes.ACTIONS);
  }, []);

  const handleOnHide = useCallback(() => {
    setWhichModalShown(null);
  }, []);

  const handleLogout = useCallback(() => {
    setWhichModalShown(null);
    setAuthWaiterName(null);
    localStorage.removeItem("waiterName");
  }, [setAuthWaiterName]);

  return (
    <Screen>
      {whichModalShown === modalTypes.AUTH && (
        <AuthModal onHide={handleOnHide} />
      )}
      {whichModalShown === modalTypes.LOGOUT && (
        <ConfirmModal
          description="Are you sure to logout?"
          onHide={handleOnHide}
          onConfirm={handleLogout}
        />
      )}
      {whichModalShown === modalTypes.ACTIONS && (
        <ActionsModal
          onHide={handleOnHide}
          onViewOrders={() =>
            history.push({
              pathname: `/viewOrders`,
              search: `?tableId=${selectedTable.id}`,
              tableNum: selectedTable.tableNum,
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
        {authWaiterName ? (
          <WaiterAuth>
            <AuthText>Signed as: {authWaiterName}</AuthText>
            <Icon
              name="sign-out-alt"
              onClick={() => setWhichModalShown(modalTypes.LOGOUT)}
            />
          </WaiterAuth>
        ) : (
          <WaiterAuth>
            <AuthText>Sign in</AuthText>
            <Icon
              name="sign-in-alt"
              onClick={() => setWhichModalShown(modalTypes.AUTH)}
            />
          </WaiterAuth>
        )}
        {initTables && (
          <TablesList
            tables={initTables}
            onActionClick={(id, tableNum) => handleActionsClick(id, tableNum)}
          />
        )}
        {isLoading && <LoadingSpinner />}
      </ContentWrapper>
    </Screen>
  );
};

export default Tables;
