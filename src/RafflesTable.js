import React from "react";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

export default function RafflesTable(props) {
  return (
    <Grid item xs={5}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {props.prizesArray.map((prize) => (
              <TableRow
                key={prize.ID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <button onClick={() => props.onMakeRaffleClick(prize.name)}>
                    הגרל
                  </button>
                </TableCell>
                <TableCell align="center">{prize.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
