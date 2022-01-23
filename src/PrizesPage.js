import React, { useState } from 'react';
import AppBarPage from "./AppBarPage";
import ContinueToPayment from "./ContinueToPayment";
import BonussCard from './NoticeModal';
import Prizes from "./Prizes";
//import PrizesSum from "./PrizesSum ";

const PrizesPage = () => {
    const [showNoticeModal, setShowNoticeModal] = useState(false);
    return (
        <>
            <AppBarPage>
                {/* <PrizesSum /> */}
            </AppBarPage>
            <Prizes />
            <ContinueToPayment />
            {showNoticeModal && <BonussCard showNoticeModal={setShowNoticeModal} />}
        </>
    )}
export default PrizesPage;
