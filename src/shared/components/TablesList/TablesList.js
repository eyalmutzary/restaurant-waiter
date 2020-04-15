import React from "react";
import styled from "styled-components";
import TableRow from "./TableRow";

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

const TableList = ({ tables, ...rest }) => (
  <Wrapper>
    <TableWrapper>
      <TableRow isHeader="true" />
      {tables.map(({ tableNum, ...args }) => (
        <TableRow key={tableNum} tableNum={tableNum} {...args} {...rest} />
      ))}
    </TableWrapper>
  </Wrapper>
);
export default TableList;
