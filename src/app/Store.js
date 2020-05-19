import React, { useState, useMemo, useCallback, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { newAlert } from "../store/actions";
// import * as io from "socket.io-client";

export const AuthWaiterName = React.createContext();

export const Store = ({ children }) => {
  const [authWaiterName, setAuthWaiterName] = useState(
    localStorage.getItem("waiterName")
  );
  // const socket = useMemo(() => io("http://localhost:3000"), []);
  // const dispatch = useDispatch();

  // const joinSocket = useCallback(() => {
  //   socket.emit("join", { authType: "waiter", waiterName: authWaiterName });
  // }, [authWaiterName, socket]);

  // useEffect(() => {
  //   joinSocket();
  //   socket.on("callWaiter", (data) => {
  //     dispatch(newAlert(data));
  //   });
  //   socket.on("callCheck", (data) => {
  //     dispatch(newAlert(data));
  //   });
  // }, [joinSocket, socket, dispatch]);

  return (
    <AuthWaiterName.Provider value={[authWaiterName, setAuthWaiterName]}>
      {children}
    </AuthWaiterName.Provider>
  );
};
