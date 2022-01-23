import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PaymentPage from './PaymentPage';
import Prizes from './Prizes';
import PrizesPage from './PrizesPage'
import AppBarPage from './AppBarPage';
function App() {
  return (
    <div className="App">
        <AppBarPage/>
      <Routes>
        <Route path="Prizes" element={<Prizes />} />
        <Route path="PaymentPage" element={<PaymentPage />} />
      </Routes>
    
      <PrizesPage/>
    </div>
  );
}

export default App;