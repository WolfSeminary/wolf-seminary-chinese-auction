import React, { useState } from 'react';
import AppBarPage from "./AppBarPage";
import ContinueToPayment from "./ContinueToPayment";
import BonussCard from './NoticeModal';
import Prizes from "./Prizes";

const PrizesPage = () => {
    const [showNoticeModal, setShowNoticeModal] = useState(false);
    const [numOfSelectedPrizes, setNumOfSelectedPrizes] = useState(0);
    return (
        <>
            <AppBarPage numOfSelectedPrizes={numOfSelectedPrizes}/>
            <Prizes numOfSelectedPrizes={numOfSelectedPrizes} setNumOfSelectedPrizes={setNumOfSelectedPrizes} setShowNoticeModal={setShowNoticeModal}  />
            <ContinueToPayment />
            {showNoticeModal && <BonussCard showNoticeModal={setShowNoticeModal} />}
        </>
    )
}
export default PrizesPage;
