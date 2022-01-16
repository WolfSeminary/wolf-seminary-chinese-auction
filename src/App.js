import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BackButton from './BackButton';
import PaymentPage from './PaymentPage';
import Prize from './Prize';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="Prize" element={<Prize />} />
        <Route path="PaymentPage" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

export default App;