// import React, { useState, useContext } from "react";
// import * as io from "socket.io-client";
// import { Alerts } from "./Store";

// const socket = io("http://localhost:3000");

// const joinSocket = () => {
//   console.log("joining");
//   socket.emit("join", { authType: "waiter", waiterName: "Eyal" });
// };

// export const Socket = () => {
//   console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@ test");
//   joinSocket();
//   socket.on("callWaiter", (data) => {
//     console.log("clicked");
//     // setAlerts([...alerts, data]);
//   });
// };
