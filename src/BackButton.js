import { Button } from "@mui/material"
import { Route, Routes, useNavigate } from "react-router-dom"

const BackButton = () => {
    const navigate = useNavigate();
    const backPrizes = () => {
        navigate("/Prizes")
    }
    return (
        <>
            <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={backPrizes} >
                בחזרה לבחירת המתנות
            </Button>
        </>
    )
}
export default BackButton