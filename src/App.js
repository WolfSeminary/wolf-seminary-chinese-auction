import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PaymentPage from './PaymentPage';
import Prizes from './Prizes'
import PrizesPage from './PrizesPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="Prizes" element={<Prizes />} />
        <Route path="PaymentPage" element={<PaymentPage />} />
      </Routes>
      <PrizesPage/>
    </div>
  );
}

export default App;