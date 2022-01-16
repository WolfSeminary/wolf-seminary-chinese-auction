import React from "react";
import TotalPrice from "./TotalPrice";
import PricesTable from './PricesTable'
import ThankYouModal from './ThankYouModal'


const PaymentPage = () => {
    const [shouldShowThankYouModal, setShouldShowThankYouModal] = React.useState(false);

    return (<>
        {/* AppBar */}
        {/* Back to Prizes button */}
        <PricesTable />
        <TotalPrice />
        {/* Submit button */}
        {shouldShowThankYouModal && <ThankYouModal setShouldShowThankYouModal={setShouldShowThankYouModal} />}
    </>);
}


export default PaymentPage;