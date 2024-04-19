import React from 'react';
import CheckoutBagPage from './Components/CheckoutBagPage/CheckoutBagPage';
import AddPayment from './Components/AddPayment/AddPayment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CheckoutBagPage/>} />
        <Route path='/change-payment' element={<AddPayment/>} />
      </Routes>
    </Router>
  );
}

export default App;
