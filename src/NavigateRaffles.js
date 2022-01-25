import { Button } from '@mui/material';
import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Route, Routes, useNavigate } from "react-router-dom"

const NavigateRaffles = () => {
    let navigate = useNavigate();
    return (<>
        <Button onClick={() => { navigate("/RafflesPage") }}>
            <KeyboardArrowLeftIcon ></KeyboardArrowLeftIcon>
            להגרלות
        </Button>
    </>
    )
}
export default NavigateRaffles;