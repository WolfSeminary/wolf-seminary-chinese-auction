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
                user.prizesList.contain(curentRaffle)
            });
        const rand = Math.floor(Math.random() * users.length);
        setWinner(users[rand]);
    }

    return (<>
        <AppBarPage></AppBarPage>
        <RafflesTable onMakeRaffleClick={onMakeRaffleClick}></RafflesTable>
        {winner && <Winner firstname={winner.firstName} lastName={winner.lastName} currentPrize={curentRaffle} ></Winner>}
    </>)
}
export default RafflesPage;