import React, { useState } from "react";
import AppBarPage from "./AppBarPage";
import RaflesTable from RaflesTable
import { useState } from "react";

const RafflesPage = () => {
    const [curentRaffle, setCurentRaffle] = useState(null)
    const [winner, setWinner] = useState(null)
    const onMakeRaffleClick = () => {
        const users = localStorage.getItem('users');
        const prize = localStorage.getItem('prizeName');
        setCurentRaffle(prize);
        const rand = Math.floor(Math.random() * users.length);
        setWinner(users[rand]);
    }
    return (<>
        <AppBarPage></AppBarPage>
        <RaflesTable></RaflesTable>
        <Winner firstname={ } lastName={ } currentPrize={ } ></Winner>
    </>)
}
export default RafflesPage;