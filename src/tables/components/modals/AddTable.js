import React, { useMemo } from "react";
import styled from "styled-components";
import { Modal, Input, TextArea } from "../../../shared/components";

const FormWrapper = styled.div``;

const AddTable = ({ onHide, waiterName }) => {
  const setOfButtons = useMemo(
    () => [
      { text: "Close", onClick: onHide },
      {
        text: "Confirm",
        onClick: onHide,
      },
    ],
    [onHide]
  );

  return (
    <Modal title="Add New Table" onHide={onHide} buttons={setOfButtons}>
      <FormWrapper>
        <Input name="Table Number" />
        <Input name="Diners" type="number" />
        <TextArea placeholder="Enter note..." />
      </FormWrapper>
    </Modal>
  );
};

export default AddTable;
