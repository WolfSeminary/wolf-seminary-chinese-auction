import React, { useState } from 'react';
import ContinueToPayment from "./ContinueToPayment";
import BonussCard from './NoticeModal';
import Prizes from "./Prizes";
import PrizesSum from './PrizesSum'
import AppBarPage from './AppBarPage';
import PayButton from './Button';

const PrizesPage = () => {
    const [showNoticeModal, setShowNoticeModal] = useState(false);
    const [numOfSelectedPrizes, setNumOfSelectedPrizes] = useState(0);
    return (
        <>
            <AppBarPage numOfSelectedPrizes={numOfSelectedPrizes} />
            <Prizes numOfSelectedPrizes={numOfSelectedPrizes} setNumOfSelectedPrizes={setNumOfSelectedPrizes} setShowNoticeModal={setShowNoticeModal} />
            <PayButton />
            {showNoticeModal && <BonussCard showNoticeModal={setShowNoticeModal} />}
        </>
    )
}
export default PrizesPage;
