import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const RaflesTable = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                {/* <TableHead>
                    <TableRow>
                        <TableCell align="center">הגרל</TableCell>
                        <TableCell align="center">פריט</TableCell>
                    </TableRow>
                </TableHead> */}
                <TableBody>
                    {props.prizes.map(prize =>
                        <TableRow key={prize.ID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center"><button>הגרל</button></TableCell>
                            <TableCell align="center">{prize.name}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default RaflesTable;