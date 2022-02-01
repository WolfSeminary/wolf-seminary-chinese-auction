import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PrizesSum from "./PrizesSum";

export default function AppBarPage({ numOfSelectedPrizes, children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ textAlign: "center" }}>
        <Toolbar>
          {numOfSelectedPrizes >= 0 && (
            <PrizesSum numOfSelectedPrizes={numOfSelectedPrizes} />
          )}
          {children}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ברוכים הבאים למכירת החסד של סמינר וולף
            <p style={{ margin: "0px" }}>מפעל הבית</p>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
