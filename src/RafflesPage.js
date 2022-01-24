import React from "react";
import AppBarPage from "./AppBarPage";
import Winner from './Winner'
import RafflesTable from "./RafflesTable ";
const RafflesPage = (props) => {
    return (<>
        <AppBarPage/>
        <RafflesTable prizes={props.prizes}/>
        <Winner firstname={""} lastName={""} currentPrize={""} />
    </>)
}

export default RafflesPage;