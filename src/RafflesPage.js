import React, { useState } from "react";
import AppBarPage from "./AppBarPage";
import RafflesTable from './RafflesTable'
import Winner from './Winner'

const RafflesPage = () => {
    const [curentRaffle, setCurentRaffle] = useState(null)
    const [winner, setWinner] = useState(null)
    const onMakeRaffleClick = (prizeName) => {
        setCurentRaffle(prizeName);
        const users = JSON.parse(localStorage.getItem("users"))
            .filter((user) => {
                return user?.prizesList?.some(prize => prize == prizeName)
            });
        const rand = Math.floor(Math.random() * users.length);
        setWinner(users[rand]);
    }

    return (<>
        <AppBarPage></AppBarPage>
        {winner && <Winner firstName={winner.firstName} lastName={winner.lastName} currentPrize={curentRaffle} ></Winner> ||
            <Winner firstName={""} lastName={""} currentPrize={curentRaffle} ></Winner>}
        <RafflesTable onMakeRaffleClick={onMakeRaffleClick}></RafflesTable>
    </>)
}
export default RafflesPage;