import React from 'react';
import './App.css';
import BackButton from './BackButton';

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