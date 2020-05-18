import React, { useState, useMemo, useCallback, useEffect } from "react";
import * as io from "socket.io-client";

export const AuthWaiterName = React.createContext();
export const Alerts = React.createContext();

export const Store = ({ children }) => {
  const [authWaiterName, setAuthWaiterName] = useState(
    localStorage.getItem("waiterName")
  );
  const socket = useMemo(() => io("http://localhost:3000"), []);
  const [alerts, setAlerts] = useState([]);

  const joinSocket = useCallback(() => {
    socket.emit("join", { authType: "waiter", waiterName: authWaiterName });
  }, [authWaiterName, socket]);

  const checkDuplicatedAlerts = useCallback(
    ({ tableNum, alertType }) => {
      console.log(alerts);
      return alerts.findIndex(
        (alert) => alert.tableNum === tableNum && alert.alertType === alertType
      );
    },
    [alerts]
  );

  useEffect(() => {
    joinSocket();
    socket.on("callWaiter", (data) => {
      // if (checkDuplicatedAlerts(data)) {
      setAlerts((alerts) => [...alerts, data]);
      // }
    });
    socket.on("callCheck", (data) => {
      setAlerts((alerts) => [...alerts, data]);
    });
  }, [joinSocket, socket]);

  console.log("test " + alerts);
  return (
    <AuthWaiterName.Provider value={[authWaiterName, setAuthWaiterName]}>
      <Alerts.Provider value={[alerts, setAlerts]}>{children}</Alerts.Provider>
    </AuthWaiterName.Provider>
  );
};
