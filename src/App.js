import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BackButton from './BackButton';
import PaymentPage from './PaymentPage';
import Prizes from './Prizes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="Prizes" element={<Prizes />} />
        <Route path="PaymentPage" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

export default App;