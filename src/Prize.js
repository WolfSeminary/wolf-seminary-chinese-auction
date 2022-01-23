import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import shadows from '@mui/material/styles/shadows';
import { Checkbox } from '@mui/material';
//import { Container, Row } from 'react-bootstrap';

const Prize = (props) => {
    const onSelectedPrizeChange = (e) => {
        let isChecked = e.target.checked;
        props.changeSelectedPrize(props.Id);
        if (isChecked)
            props.setNumOfSelectedPrizes(props.numOfSelectedPrizes + 1)
        else
            props.setNumOfSelectedPrizes(props.numOfSelectedPrizes - 1)
    }
    return (
        <Card sx={{ maxWidth: 345 }} >
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
           {/* <Container>
                <Row className="justify-content-md-center">
                    <Checkbox  onChange={onSelectedPrizeChange}/>
                </Row>
            </Container> */}
              <Checkbox  onChange={onSelectedPrizeChange}/>
        </Card>
    )
}
export default Prize;