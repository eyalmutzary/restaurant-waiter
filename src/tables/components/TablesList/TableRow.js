import React from "react";
import styled from "styled-components";
import BaseIcon from "../../../shared/components/Icon";

const RowWrapper = styled.tr`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: solid 1px ${({ theme }) => theme.colors.lightPink};
  color: ${({ theme }) => theme.colors.darkGray};
  text-align: left;
  height: 50px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    transition: 0.2s;
    cursor: default;
  }
`;

const HeaderBox = styled.th`
  background-color: ${({ theme }) => theme.colors.lightPink};
  font-weight: bolder;
  padding: 10px;
`;

const TableBox = styled.td`
  padding: 10px;
`;

const Icon = styled(BaseIcon)`
  padding: 10px;
`;

const Alert = styled.div`
  /* background-color: ${({ theme }) => theme.colors.red};
  border-radius: 50%; */
  color: ${({ theme }) => theme.colors.red};
  display: inline;
  padding: 0px;
  margin: 0;
`;

const columns = ["Table", "", "Note", "Waiter Name", "Total Price", ""];

const TableRow = ({
  isHeader,
  tableId,
  tableNum,
  tableNote,
  waiterName,
  totalPrice,
  isAlert,
  onActionClick,
}) => (
  <>
    {!isHeader ? (
      <RowWrapper>
        <TableBox>{tableNum}</TableBox>
        <TableBox>
          {isAlert && (
            <Alert>
              <BaseIcon name="exclamation-circle" />
            </Alert>
          )}
        </TableBox>
        <TableBox>{tableNote}</TableBox>
        <TableBox>{waiterName}</TableBox>
        <TableBox>{totalPrice.toFixed(2)}$</TableBox>
        <TableBox>
          <Icon
            name="ellipsis-h"
            onClick={() => onActionClick(tableId, tableNum)}
          />
        </TableBox>
      </RowWrapper>
    ) : (
      <RowWrapper>
        {columns.map((header, index) => (
          <HeaderBox key={index}>{header}</HeaderBox>
        ))}
      </RowWrapper>
    )}
  </>
);

export default TableRow;
