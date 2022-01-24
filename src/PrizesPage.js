import React, { useState } from 'react';
import ContinueToPayment from "./ContinueToPayment";
import BonussCard from './NoticeModal';
import Prizes from "./Prizes";
import PrizesSum from './PrizesSum'
import AppBarPage from './AppBar';
import PayButton from './Button';

const PrizesPage = () => {
    const [showNoticeModal, setShowNoticeModal] = useState(false);
    return (
        <><AppBarPage>
            <PrizesSum />
        </AppBarPage>
            <Prizes setShowNoticeModal={setShowNoticeModal} />
            <PayButton></PayButton>
            {showNoticeModal && <BonussCard showNoticeModal={setShowNoticeModal} />}
        </>
    )
}
export default PrizesPage;
