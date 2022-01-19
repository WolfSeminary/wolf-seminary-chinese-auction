import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BackButton from './BackButton';
import PaymentPage from './PaymentPage';
import Prizes from './Prizes';
import Prize from './Prize';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="Prize" element={<Prize />} />
        <Route path="PaymentPage" element={<PaymentPage />} />
      </Routes>
      <Prizes/>
    </div>
  );
}

export default App;