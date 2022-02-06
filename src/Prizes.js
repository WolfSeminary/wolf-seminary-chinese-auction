import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Prize from "./Prize";

export default function Prizes(props) {
  const [numOf5nisPrizes, setNumOf5nisPrizes] = useState(0);
  const [numOf10nisPrizes, setNumOf10nisPrizes] = useState(0);
  const [numOf20nisPrizes, setNumOf20nisPrizes] = useState(0);

  const changeSelectedPrize = (id) => {
    props.prizesArray.forEach((item) => {
      if (id === item.ID) {
        let cc = 0;
        item.isSelected = !item.isSelected;
        if (item.isSelected) cc = 1;
        else cc = -1;
        switch (item.price) {
          case 5:
            setNumOf5nisPrizes(numOf5nisPrizes + cc);
            break;
          case 10:
            setNumOf10nisPrizes(numOf10nisPrizes + cc);
            break;
          case 20:
            setNumOf20nisPrizes(numOf20nisPrizes + cc);
            break;
          default:
        }
      }
    });
  };
  useEffect(() => {
    if (
      (numOf5nisPrizes && !(numOf5nisPrizes % 3)) ||
      (numOf20nisPrizes && !(numOf20nisPrizes % 3)) ||
      (numOf10nisPrizes && !(numOf10nisPrizes % 3))
    ) {
      props.setShowNoticeModal(true);
      setTimeout(() => {
        props.setShowNoticeModal(false);
      }, 3000);
    }
  }, [numOf5nisPrizes, numOf10nisPrizes, numOf20nisPrizes]);

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: '8px' }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {props.prizesArray.map((item) => (
            <Grid item xs={2} sm={3} md={3} key={item.ID}>
              <Prize
                image={item.image}
                Id={item.ID}
                name={item.name}
                price={item.price}
                description={item.description}
                numOfSelectedPrizes={props.numOfSelectedPrizes}
                isSelected={item.isSelected}
                setNumOfSelectedPrizes={props.setNumOfSelectedPrizes}
                changeSelectedPrize={changeSelectedPrize}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
