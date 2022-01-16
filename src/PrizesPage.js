import BonussCard from "./NoticeModal"
const PrizesPage = () => {
    const [shouldShowNoticeModal, SetshouldShowNoticeModal] = useState(false)
    return (
        // AppBar
        // PrizesSum - Should be added within the app bar component
        // Prizes
        // ContinueToPayment
        shouldShowNoticeModal && <BonussCard />)
}
export default PrizesPage