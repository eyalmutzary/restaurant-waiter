import React, { useCallback } from "react";
import styled from "styled-components";
import TableRow from "./TableRow";
import { useSelector, useDispatch } from "react-redux";
import { removeAlert } from "../../../store/actions";

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
  const alerts = useSelector((state) => state.alerts);
  const dispatch = useDispatch();

  const handleRemoveAlert = useCallback(
    (id) => {
      dispatch(removeAlert(id));
    },
    [dispatch]
  );

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
