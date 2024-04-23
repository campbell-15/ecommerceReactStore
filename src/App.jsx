import React from 'react';
import CheckoutBagPage from './Components/CheckoutBagPage/CheckoutBagPage';
import AddPayment from './Components/AddPayment/AddPayment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Dashboard  from './dashboard';
import AddAddress from './AddAddress';
import Items from './Items';
import Checkout from './Checkout';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path='/view-bag' element={<CheckoutBagPage/>} />
        <Route path='/change-payment' element={<AddPayment/>} />
        <Route path='/add-address' element={<AddAddress/>} />
        <Route path='/view-bag' element={<CheckoutBagPage/>} />
        <Route path='/items' element={<Items/>} />
        <Route path='/checkout' element={<Checkout/>} />

      </Routes>
    </Router>
  );
}

export default App;
