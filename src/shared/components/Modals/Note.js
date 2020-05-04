import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Modal, TextArea } from "..";

const Note = ({ onHide, onConfirm, value }) => {
  const [note, setNote] = useState(value);

  const differentSetOfButtons = useMemo(
    () => [
      { text: "Close", onClick: onHide },
      {
        text: "Confirm",
        onClick: () => onConfirm(note),
      },
    ],
    [note, onConfirm, onHide]
  );

  return (
    <Modal title="Add Note" onHide={onHide} buttons={differentSetOfButtons}>
      <TextArea
        placeholder="Enter note..."
        value={note}
        onChange={({ target: { value } }) => setNote(value)}
      />
    </Modal>
  );
};

export default Note;
