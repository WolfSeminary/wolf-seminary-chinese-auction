import { Button } from "@mui/material"
import { Route, Routes, useNavigate } from "react-router-dom"
import Prize from "./Prize"

const BackButton = () => {
    let navigate = useNavigate();
    const backPrizes = () => {
        navigate("/Prize")
    }
    return (
        <>
            <Button onClick={backPrizes} >back to prizes</Button>
        </>
    )
}
export default BackButton