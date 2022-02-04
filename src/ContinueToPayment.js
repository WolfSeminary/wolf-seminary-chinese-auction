import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export default function ContinueToPayment() {
  let navigate = useNavigate();

  return (
    <Button
      size="large"
      variant="contained"
      onClick={() => {
        navigate("/PaymentPage");
      }}
      startIcon={<KeyboardArrowLeftIcon />}
    >
      המשך לתשלום
    </Button>
  );
}
