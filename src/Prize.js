import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import shadows from '@mui/material/styles/shadows';
import { Checkbox } from '@mui/material';
import { Container, Row } from 'react-bootstrap';

const Prize = (props) => {
    const [isSelected,setIsSelected]=useState(false);
    const onSelectedPrizeChange=()=>{
    props.SelectedPrize=props.prize;
    // השורה הקודמת אמורה לשים במשתנה באבא את בחירת הפרס בקומפוננטה זו
    }
    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
                component="img"
                height="140"
                image=""
                alt="prize image"
            /><CardContent>
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
<<<<<<< HEAD
            <Checkbox onChange={onSelectedPrizeChange} style={{ display: 'flex' }}/>
=======
            <Container>
                <Row className="justify-content-md-center">
                    <Checkbox />
                </Row>
            </Container>
>>>>>>> origin/main
        </Card>
    )
}
export default Prize;