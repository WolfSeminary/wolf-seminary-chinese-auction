import BonussCard from "./NoticeModal"
import React,{useState} from "react";
const PrizesPage = () => {
    const [shouldShowNoticeModal, SetshouldShowNoticeModal] = useState(false)
    return (<>
        // AppBar
        // PrizesSum - Should be added within the app bar component
        // Prizes
        // ContinueToPayment
        
        <BonussCard SetshouldShowNoticeModal={SetshouldShowNoticeModal} />
        </>);
}
export default PrizesPage