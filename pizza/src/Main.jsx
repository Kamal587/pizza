import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import EmptyCart from './pages/Cart/EmptyCart';
import Cart from './pages/Cart/Cart';

const Main = ({ searchValue }) => {
  return (
    <Routes>
      <Route path="/" element={<Home searchValue={searchValue} />} />
      <Route path="cart" element={<Cart />} />
      <Route path="basket" element={<EmptyCart />} />
    </Routes>
  );
};

export default Main;
