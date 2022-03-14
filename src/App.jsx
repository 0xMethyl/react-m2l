import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signupage from './pages/Signupage';
import Signinpage from './pages/Signinpage';
import Checkoutpage from './pages/Checkoutpage';
import Adminpage from './pages/Adminpage';
import Contactpage from './pages/Contactpage';

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

        <Route path="/login" element={
          <Signinpage />
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

        <Route path="/admin" element={
            <Adminpage />
          } /> 

        <Route path="/contact" element={
          <Contactpage />
        } />  

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;