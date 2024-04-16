import React from 'react';
import CheckoutBagPage from './Components/CheckoutBagPage/CheckoutBagPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CheckoutBagPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
