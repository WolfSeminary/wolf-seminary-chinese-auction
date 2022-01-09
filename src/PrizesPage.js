import React, { useState } from 'react';
import AppBAr from "./AppBar";
import ContinueToPayment from "./ContinueToPayment";
import BonussCard from './NoticeModal';
import Prizes from "./Prizes";
import PrizesSum from "./PrizesSum";

const PrizesPage = () => {
  const [showNoticeModal, setShowNoticeModal] = useState(false);
    return (
        <>
            <AppBAr>
                <PrizesSum />
            </AppBAr>
            <Prizes />
            <ContinueToPayment />
            {showNoticeModal && <  BonussCard/>}
        </>
    )
}
export default PrizesPage;