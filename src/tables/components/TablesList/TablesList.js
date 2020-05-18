import React, { useContext, useCallback } from "react";
import styled from "styled-components";
import TableRow from "./TableRow";
import { Alerts } from "../../../app";

const Wrapper = styled.div`
  overflow: auto;
  margin: 30px;
`;

const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 85vw;
  margin-bottom: 30px;
  overflow: hidden;
`;

const TablesList = ({ tables, ...rest }) => {
  const [alerts, setAlerts] = useContext(Alerts);

  const handleRemoveAlert = useCallback((id) => {
    const oldAlertsState = [...alerts];
    const newState = oldAlertsState.filter(alert => alert.id !== id);
    setAlerts(newState);
  }, [alerts, setAlerts]);

  return (
    <Wrapper>
      <TableWrapper>
        <TableRow isHeader="true" />
        {tables.map(({ tableNum, ...args }) => (
          <TableRow
            key={tableNum}
            tableNum={tableNum}
            alerts={alerts.filter((alert) => alert.tableNum === tableNum)}
            onRemoveAlert={handleRemoveAlert}
            {...args}
            {...rest}
          />
        ))}
      </TableWrapper>
    </Wrapper>
  );
};
export default TablesList;
