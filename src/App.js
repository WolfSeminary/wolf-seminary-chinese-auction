import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BackButton from './BackButton';
import PaymentPage from './PaymentPage';
import Prizes from './Prizes';
import ThankYouModal from './ThankYouModal';

function App() {
  return (
    <div className="App">
      <ThankYouModal></ThankYouModal>
      <Routes>
        <Route path="Prizes" element={<Prizes />} />
        <Route path="PaymentPage" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

export default App;