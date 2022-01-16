import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@mui/material"
import { Route, Routes, useNavigate } from "react-router-dom"
import Prize from "./Prize"

const BackButton = () => {
  const navigate = useNavigate();

  const backPrizes = () => {
    navigate("/Prize")
  }

  return (
    <>
      <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={backPrizes} >
        בחזרה לבחירת המתנות
      </Button>
      <Routes>
        <Route path="Prize" element={<Prize />} />
      </Routes>
    </>
  )
}

export default BackButton
