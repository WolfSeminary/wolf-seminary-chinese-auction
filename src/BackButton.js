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
            <Button onClick={backPrizes} >hello</Button>
            <Routes>
                <Route path="Prize" element={<Prize />} />
            </Routes>
        </>
    )
}
export default BackButton