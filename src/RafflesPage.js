import React from "react";
import AppBarPage from "./AppBarPage";
import Winner from './Winner'
import RaflesTable from "./RaflesTable ";
const RafflesPage = (props) => {
    return (<>
        <AppBarPage/>
        <RaflesTable prizes={props.prizes}/>
        <Winner firstname={""} lastName={""} currentPrize={""} />
    </>)
}

export default RafflesPage;