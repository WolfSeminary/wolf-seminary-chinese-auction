import TotalPrice from "./TotalPrice";
import SubmitButton from './SubmitButton'
import PricesTable from './PricesTable'
import ThankYouModal from './ThankYouModal'
import React,{useState} from "react";

const PaymentPage = () => {
    const [shouldShowThankYouModal, setShouldShowThankYouModal] = useState(false);

    return (<>
        {/* AppBar */}
        {/* Back to Prizes button */}
        <PricesTable />
        <TotalPrice />
        <SubmitButton setShouldShowThankYouModal={setShouldShowThankYouModal}/>
        {shouldShowThankYouModal && <ThankYouModal setShouldShowThankYouModal={setShouldShowThankYouModal} />}
    </>);
}
export default PaymentPage;