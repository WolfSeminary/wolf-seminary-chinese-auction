import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          )
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import { TableContainer,TableCell,TableBody,TableHead,Table } from '@mui/material';

// const PricesTable = () => {
//     return (
//         <TableContainer>
//             <Table>
//                 <TableHead >
//                     <TableCell align="center">פריט</TableCell>
//                     <TableCell align="center">כמות</TableCell>
//                     <TableCell align="center">מחיר</TableCell>
//                 </TableHead>
//                 <TableBody>
//                     <TableCell align="center"></TableCell>
//                     <TableCell align="center"></TableCell>
//                     <TableCell align="center"></TableCell>
//                 </TableBody>
//             </Table>
//         </TableContainer>
//         )
// }
// export default PricesTable