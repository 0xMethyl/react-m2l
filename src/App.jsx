import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signupage from './pages/Signupage';
import Signinpage from './pages/Signinpage';
import Checkoutpage from './pages/Checkoutpage';
import Adminpage from './pages/Adminpage';
import Contactpage from './pages/Contactpage';
import ProductSearchpage from './pages/ProductSearchpage';
import CategoryPage from './pages/Categorypage';
import ProductPage from './pages/ProductPage';
import Profilepage from './pages/Profilepage';

import axios from './config/axios';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';



const App = () => {
  const [loginStatus, setLoginStatus] = useState("");

  useEffect(() => {
    logged();
  }, [])

  const logged = () => {
    axios.get("/users/login").then(res => {
      setLoginStatus(res.data.loggedIn);
    }).catch((err) =>{
      console.log("login error ", err)
    })
  }

  const ProtectedRoute = () => {
    return loginStatus ? false : true;
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={
            <NotFound />
          } /> 

          <Route path="/terms" element={
            <Signupage />
          } />  

          <Route path="/privacy" element={
            <Signupage />
          } />  

          <Route path="/contact" element={
            <Contactpage />
          } />  

          <Route path="/search/:keyword" element={
            <ProductSearchpage />
          } />

          <Route path="/category/:id" element={
            <CategoryPage />
          } />

          <Route path="/product/:id" element={
            <ProductPage />
          } />

          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />

          { ProtectedRoute && <Route path='/signup' element={<Signupage />} /> }
          { ProtectedRoute && <Route path='/login' element={<Signinpage />} /> }
          { ProtectedRoute && <Route path='/profile' element={<Profilepage />} /> }
          { ProtectedRoute && <Route path="/checkout" element={<Checkoutpage />} /> }
          { ProtectedRoute && <Route path="/cart" element={<Checkoutpage />} /> }
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;