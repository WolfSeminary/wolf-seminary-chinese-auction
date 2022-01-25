import React, { useEffect, useState } from 'react'

import { TextField } from '@mui/material';

const TotalPrice = (props) => {
    let sum = 0;
    const [totalPrice, setTotalPrice] = useState(sum);
    useEffect(() => {
        props.prizes.forEach(element => {
            if (element.isSelected == true)
                sum += element.price;
        });
        setTotalPrice(sum);
    }, [onload]);
    return (
        <TextField id="outlined-basic" label="סך לתשלום" variant="outlined" disabled={true} value={totalPrice} />
    )
}
export default TotalPrice;