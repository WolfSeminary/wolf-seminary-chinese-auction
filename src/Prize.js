import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import shadows from '@mui/material/styles/shadows';
import { Checkbox } from '@mui/material';

const Prize = () => {
    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
                component="img"
                height="140"
                image=""
                alt="prize image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    prize title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    prize details
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    prize price
                </Typography>
            </CardContent>
            <Checkbox style={{ display: 'flex' }}/>
        </Card>
    )
}
export default Prize;