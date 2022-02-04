import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";

export default function NavigateRaffles() {
  let navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/RafflesPage")}>
      <KeyboardArrowLeftIcon />
      להגרלות
    </Button>
  );
}
