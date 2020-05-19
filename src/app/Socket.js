import React, { useMemo, useCallback, useEffect } from "react";
import * as io from "socket.io-client";
import { useDispatch } from "react-redux";
import { newAlert } from "../store/actions";

export const Socket = ({ children }) => {
  const socket = useMemo(() => io("http://localhost:3000"), []);
  const dispatch = useDispatch();

  const joinSocket = useCallback(() => {
    socket.emit("join", { authType: "waiter", waiterName: "authWaiterName" });
  }, [socket]);

  useEffect(() => {
    joinSocket();
    socket.on("callWaiter", (data) => {
      dispatch(newAlert(data));
    });
    socket.on("callCheck", (data) => {
      dispatch(newAlert(data));
    });
  }, [joinSocket, socket, dispatch]);

  return <>{children}</>;
};
