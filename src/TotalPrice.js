import React, { useState } from 'react'
import { TextField } from '@mui/material';

const TotalPrice = (props) => {
    const [totalPrice, setTotalPrice] = useState();
    useEffect() = () => {
        let sum = 0;
        props.prizes.forEach(element => {
            if (element.isSelected == true)
                sum += element.cost;
        });
        setTotalPrice(sum);
    }, [onload, totalPrice]
    
    return (
        <TextField id="outlined-basic" label="סך לתשלום" variant="outlined" disabled={true} value="120" />
    )
}
export default TotalPrice;