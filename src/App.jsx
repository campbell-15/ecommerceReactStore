import React from 'react';
import CheckoutBagPage from './Components/CheckoutBagPage/CheckoutBagPage';
import AddPayment from './Components/AddPayment/AddPayment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Checkout from './Checkout';
// import Items from './Items';

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
        {/* <Route path='/checkout' element={<Checkout/>} />
        <Route path='/item-view' element={<Items/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
