import TotalPrice from "./TotalPrice";
import SubmitButton from './SubmitButton'
import PricesTable from './PricesTable'
import ThankYouModal from './ThankYouModal'
import React, { useState } from "react";
import BackButton from './BackButton'
import AppBarPage from "./AppBarPage";
import { prizesArray } from './Prizes'
import RafflesPage from "./RafflesPage";
import NavigateRaffles from "./NavigateRaffles";

const PaymentPage = (props) => {
    const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false);
    return (<>
        <AppBarPage />
        <BackButton />
        <PricesTable prizes={prizesArray} />
        <TotalPrice prizes={prizesArray} />
        <SubmitButton setShouldShowThankYouModal={setShouldShowThankYouModal} />
        {shouldShowThankYouModal && <ThankYouModal setShouldShowThankYouModal={setShouldShowThankYouModal} />}
        <NavigateRaffles></NavigateRaffles>
    </>);
}
export default PaymentPage;