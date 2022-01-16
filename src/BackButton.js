import { Button } from "@mui/material"
import { Route, Routes, useNavigate } from "react-router-dom"
import prizes from "./Prizes"

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
            <Routes>
                <Route path="Prizes" element={<Prizes />} />
            </Routes>
        </>
    )
}
export default BackButton