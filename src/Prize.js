import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Checkbox } from '@mui/material';

const Prize = (props) => {
    const [isSelected, setIsSelected] = useState(false);
    const onSelectedPrizeChange = (e) => {
        let isChecked = e.target.checked;
        props.changeSelectedPrize(props.Id);
        if (isChecked)
            props.setNumOfSelectedPrizes(props.numOfSelectedPrizes + 1)
        else
            props.setNumOfSelectedPrizes(props.numOfSelectedPrizes - 1)
    }
    return (
        <Card sx={{ maxWidth: 345 }} style={{textAlign:"center"}}>
            <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt="prize image"
            /><CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ש"ח    {props.price}
                </Typography>
            </CardContent>
            <Checkbox onChange={onSelectedPrizeChange} />

        </Card>
    )
}
export default Prize;