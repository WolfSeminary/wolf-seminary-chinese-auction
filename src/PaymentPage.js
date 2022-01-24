import TotalPrice from "./TotalPrice";
import SubmitButton from './SubmitButton'
import PricesTable from './PricesTable'
import ThankYouModal from './ThankYouModal'
import React, { useState } from "react";
import BackButton from './BackButton'
import AppBarPage from "./AppBarPage";
import { prizesArray } from './Prizes'

const PaymentPage = (props) => {
    const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false);
    return (<>
        <AppBarPage />
        <BackButton />
        <PricesTable prizes={props.prizes} />
        <TotalPrice prizes={prizesArray} />
        <SubmitButton setShouldShowThankYouModal={setShouldShowThankYouModal} />
        {shouldShowThankYouModal && <ThankYouModal setShouldShowThankYouModal={setShouldShowThankYouModal} />}
    </>);
}
export default PaymentPage;