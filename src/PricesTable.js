import { TableContainer, TableCell, TableBody, TableHead, Table } from '@mui/material';

const PricesTable = () => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableCell align="center">מחיר</TableCell>
                    <TableCell align="center">כמות</TableCell>
                    <TableCell align="center">פריט</TableCell>
                </TableHead>
                <TableBody>
                    <TableCell align="center">2000</TableCell>
                    <TableCell align="center">2</TableCell>
                    <TableCell align="center">חדר ילדים </TableCell>
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default PricesTable