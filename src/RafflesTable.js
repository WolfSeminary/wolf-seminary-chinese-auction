import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const RafflesTable = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    {props.prizesArray.map(prize => (
                        <TableRow key={prize.ID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center"><button onClick={() => props.onMakeRaffleClick(prize.name)}>הגרל</button></TableCell>
                            <TableCell align="center">{prize.name}</TableCell>
                        </TableRow>)
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default RafflesTable;