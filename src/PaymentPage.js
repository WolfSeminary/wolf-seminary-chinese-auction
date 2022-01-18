
import TotalPrice from "./TotalPrice";
import SubmitButton from './SubmitButton'
import PricesTable from './PricesTable'
import ThankYouModal from './ThankYouModal'
import React, { useState } from "react";
import AppBAr from "./AppBar";
import BackButton from './BackButton'
const PaymentPage = () => {
    const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false);
    let prizes = [
        {
            id: 1,
            price: 10,
            item: "cumputer",
        },
        {
            id: 2,
            price: 20,
            item: "bed"
        },
        {
            id: 3,
            price: 200,
            item: "kandy"
        },
        {
            id: 4,
            price: 200,
            item: "kandy"
        },
        {
            id: 5,
            price: 200,
            item: "andy"
        },
    ]
    return (<>
        <AppBAr></AppBAr>
        <BackButton></BackButton>
        <PricesTable prizes={prizes} />
        <TotalPrice />
        <SubmitButton setShouldShowThankYouModal={setShouldShowThankYouModal} />
        {shouldShowThankYouModal && <ThankYouModal setShouldShowThankYouModal={setShouldShowThankYouModal} />}
    </>);
}
export default PaymentPage;