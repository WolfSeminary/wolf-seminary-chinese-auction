import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

export default function TotalPrice(props) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    props.prizes.forEach((element) => {
      if (element.isSelected) sum += element.price;
    });
    setTotalPrice(sum);
  }, [props.prizes]);

  return (
    <TextField
      id="outlined-basic"
      label="סך לתשלום"
      variant="outlined"
      disabled={true}
      value={totalPrice}
    />
  );
}
