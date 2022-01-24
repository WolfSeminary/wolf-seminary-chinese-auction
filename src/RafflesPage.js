import React from "react"
import AppBar from './AppBar'
// import RafflesTable from './RafflesTable'
import Winner from './Winner'

const RafflesPage = (props) => {
    return (<>
        <AppBar></AppBar>
        {/* <RafflesTable></RafflesTable> */}
        {/* <Winner firstname={} lastName={} currentPrize={} ></Winner>  */}
        <Winner></Winner>
    </>)
}

export default RafflesPage;