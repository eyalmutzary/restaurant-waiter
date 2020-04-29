import React, { useState } from "react";

export const AuthWaiterName = React.createContext();

export const Store = ({ children }) => {
  const [authWaiterName, setAuthWaiterName] = useState(
    localStorage.getItem("waiterName")
  );

  return (
    <AuthWaiterName.Provider value={[authWaiterName, setAuthWaiterName]}>
      {children}
    </AuthWaiterName.Provider>
  );
};
