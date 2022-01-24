import TotalPrice from "./TotalPrice";
import SubmitButton from './SubmitButton'
import PricesTable from './PricesTable'
import ThankYouModal from './ThankYouModal'
import React, { useState } from "react";
import BackButton from './BackButton'
import AppBarPage from "./AppBar";

const PaymentPage = (props) => {
    const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false);
    return (<>
        <AppBarPage></AppBarPage>
        <BackButton></BackButton>
        <PricesTable prizes={props.prizes} />
        <TotalPrice />
        <SubmitButton setShouldShowThankYouModal={setShouldShowThankYouModal} />
        {shouldShowThankYouModal && <ThankYouModal setShouldShowThankYouModal={setShouldShowThankYouModal} />}
    </>);
}
export default PaymentPage;