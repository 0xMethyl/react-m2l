import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signupage from './pages/Signupage';
import Checkoutpage from './pages/Checkoutpage';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home />
        } />
          <Route path="*" element={
            <NotFound />
          } />

        <Route path="/signup" element={
          <Signupage />
        } />  

        <Route path="/checkout" element={
          <Checkoutpage />
        } /> 

        <Route path="/terms" element={
            <Signupage />
          } />  

        <Route path="/privacy" element={
            <Signupage />
          } />  

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;