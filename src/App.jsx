import React from 'react';
import CheckoutBagPage from './Components/CheckoutBagPage/CheckoutBagPage';
import AddPayment from './Components/AddPayment/AddPayment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Dashboard  from './dashboard';
import AddAddress from './AddAddress';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path='/view-bag' element={<CheckoutBagPage/>} />
        <Route path='/change-payment' element={<AddPayment/>} />
        <Route path='/add-address' element={<AddAddress/>} />
      </Routes>
    </Router>
  );
}

export default App;
