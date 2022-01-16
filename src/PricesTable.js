import { TableContainer, TableCell, TableBody, TableHead, Table,TableRow } from '@mui/material';

const PricesTable = (props) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableCell align="center">מחיר</TableCell>
                    <TableCell align="center">כמות</TableCell>
                    <TableCell align="center">פריט</TableCell>
                </TableHead>
                <TableBody>
                    {props.prizes.map(item =>
                        <TableRow key={item.id}>
                            <TableCell align="center">{item.price}</TableCell>
                            <TableCell align="center">{item.count}</TableCell>
                            <TableCell align="center">{item.id}</TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default PricesTable