import AppBar from "./AppBar";

const PaymentPage = () => {
    const [shouldShowThankYouModal, setShouldShowThankYouModal] = React.useState(true);
    return (<>
        {/* AppBar */}
        {/* Back to Prizes button */}
        <PricesTable />
        {/* TotalPrice */}
        {/* Submit button */}
        <ThankYouModal setShouldShowThankYouModal={setShouldShowThankYouModal} />
    </>);
}


export default PaymentPage;