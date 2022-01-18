
import { TableContainer, TableCell, TableBody, TableHead, Table, TableRow, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

const PricesTable = (props) => {
    const [prizes, setPrizes] = useState(
        [
            {
                id: 1,
                name: 'bbb',
                price: 20,
                count: 3
            },
            {
                id: 2,
                name: 'ccc',
                price: 20,
                count: 3
            },
            {
                id: 3,
                name: 'aaa',
                price: 20,
                count: 3
            }
        ]
    )
    const sort = () => {
        const all=[...prizes]
        setPrizes(all.sort((s1, s2) => s1.name.localeCompare(s2.name)))
    }
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">מחיר</TableCell>
                        <TableCell align="center">כמות</TableCell>
                        <TableCell align="center">
                            <Button onClick={sort} variant="outlined" startIcon={<ArrowDropDownIcon />}>
                                (מיין) פריט
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {prizes.map((item) =>
                        <TableRow key={item.id}>
                            <TableCell align="center">{item.price}</TableCell>
                            <TableCell align="center">{item.count}</TableCell>
                            <TableCell align="center">{item.name}</TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default PricesTable