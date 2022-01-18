import React, { useState } from 'react';
import AppBar from "./AppBar";
import ContinueToPayment from "./ContinueToPayment";
import BonussCard from './NoticeModal';
import Prizes from "./Prizes";
import PrizesSum from "./PrizesSum ";

const PrizesPage = () => {
    const [showNoticeModal, setShowNoticeModal] = useState(false);
    return (
        <>
            <AppBar>
                <PrizesSum />
            </AppBar>
            <Prizes />
            <ContinueToPayment />
            {showNoticeModal && <BonussCard showNoticeModal={setShowNoticeModal} />}
        </>
    )
}
export default PrizesPage;
