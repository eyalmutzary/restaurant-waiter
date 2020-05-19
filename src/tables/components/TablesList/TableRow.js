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

TableBox.Centered = styled(TableBox)`
  text-align: center;
`;

const Icon = styled(BaseIcon)`
  padding: 10px;
`;

const Alert = styled.div`
  color: ${({ theme }) => theme.colors.bordeaux};
  font-size: 20px;
  display: inline;
  padding: 0px;
  margin: 0;
`;

const columns = ["Table", "", "Note", "Diners", "Total Price", "Status", ""];

const TableRow = ({
  isHeader,
  id,
  tableNum,
  note,
  diners,
  CustomerTableStatus,
  totalPrice,
  alerts,
  onActionClick,
  onRemoveAlert,
}) => {
  return (
    <>
      {!isHeader ? (
        <RowWrapper>
          <TableBox.Centered>{tableNum}</TableBox.Centered>
          <TableBox.Centered>
            {alerts.length > 0 && (
              <Alert>
                {alerts.map(({ alertType, id }) => {
                  switch (alertType) {
                    case "callWaiter":
                      return (
                        <BaseIcon
                          name="hand-paper"
                          onClick={() => onRemoveAlert(id)}
                        />
                      );
                    case "callCheck":
                      return (
                        <BaseIcon
                          name="money-bill-wave"
                          onClick={() => onRemoveAlert(id)}
                        />
                      );
                    case "newOrder":
                      return <BaseIcon name="receipt" hover={false} />;
                    default:
                      return (
                        <BaseIcon name="exclamation-circle" hover={false} />
                      );
                  }
                })}
              </Alert>
            )}
          </TableBox.Centered>
          <TableBox width="50%">{note}</TableBox>
          <TableBox.Centered>{diners}</TableBox.Centered>
          <TableBox.Centered>
            {totalPrice ? totalPrice.toFixed(2) : "0.00"}$
          </TableBox.Centered>
          <TableBox.Centered>{CustomerTableStatus.status}</TableBox.Centered>

          <TableBox>
            <Icon
              name="ellipsis-h"
              onClick={() => onActionClick(id, tableNum)}
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
};

export default TableRow;
