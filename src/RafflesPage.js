import { Grid } from "@mui/material";
import React, { useState } from "react";
import AppBarPage from "./AppBarPage";
import RafflesTable from "./RafflesTable";
import Winner from "./Winner";

export default function RafflesPage(props) {
  const [currentRaffle, setCurrentRaffle] = useState(null);
  const [winner, setWinner] = useState(null);
  const onMakeRaffleClick = (prizeName) => {
    setCurrentRaffle(prizeName);
    const users = JSON.parse(localStorage.getItem("users")).filter((user) => {
      return user?.prizesList?.some((prize) => prize === prizeName);
    });
    const rand = Math.floor(Math.random() * users.length);
    setWinner(users[rand]);
  };

  return (
    <>
      <AppBarPage></AppBarPage>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Winner
          firstName={winner?.firstName || ""}
          lastName={winner?.lastName || ""}
          currentPrize={currentRaffle}
        />
        <RafflesTable
          prizesArray={props.prizesArray}
          onMakeRaffleClick={onMakeRaffleClick}
        />
      </Grid>
    </>
  );
}
