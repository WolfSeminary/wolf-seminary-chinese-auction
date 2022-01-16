import TotalPrice from "./TotalPrice";

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