import TotalPrice from "./TotalPrice";
import SubmitButton from './SubmitButton'
import PricesTable from './PricesTable'
import ThankYouModal from './ThankYouModal'
import React, { useState } from "react";
import AppBAr from "./AppBar";
import BackButton from './BackButton'

const PaymentPage = (props) => {
    const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false);
    return (<>
        <AppBAr></AppBAr>
        <BackButton></BackButton>
        <PricesTable prizes={props.prizes} />
        <TotalPrice />
        <SubmitButton setShouldShowThankYouModal={setShouldShowThankYouModal} />
        {shouldShowThankYouModal && <ThankYouModal setShouldShowThankYouModal={setShouldShowThankYouModal} />}
    </>);
}
export default PaymentPage;