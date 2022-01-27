import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBack from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  const navigate = useNavigate();
  const backPrizes = () => {
    navigate("/Prizes");
  };

  return (
    <Button variant="contained" startIcon={<ArrowBack />} onClick={backPrizes}>
      בחזרה לבחירת המתנות
    </Button>
  );
}
