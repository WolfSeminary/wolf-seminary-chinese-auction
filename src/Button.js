import { Button } from '@mui/material';
import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Router } from '@mui/icons-material';
import { Route, Routes, useNavigate } from "react-router-dom"
import PaymentPage from './PaymentPage';


const PayButton = () => {
    let navigate = useNavigate();
    return (<>
        <Button onClick={() => { navigate("/PaymentPage") }}g>
            <KeyboardArrowLeftIcon ></KeyboardArrowLeftIcon>
            המשך לתשלום
        </Button>       
    </>
    )
}
export default PayButton;