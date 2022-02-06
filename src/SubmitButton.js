import React from "react";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Stack from "@mui/material/Stack";

export default function SubmitButton(props) {
  const onSubmit = () => {
    props.setShouldShowThankYouModal(true);
  };
  return (
    <div style={{ display: "flex", width: "30vw", justifyItems: "center" }}>
      <Stack direction="column" spacing={2}>
        <Button direction="column" variant="contained" onClick={onSubmit}>
          אשר הכנסת סכום מדויק לתשלום בקופות הייעודיות
        </Button>
        <div className="arrow bounce">
          <ArrowDownwardIcon />
        </div>
      </Stack>
    </div>
  );
}
