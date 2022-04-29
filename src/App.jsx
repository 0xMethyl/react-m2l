import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

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

import axios from './config/axios';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';



const App = () => {
  const [loginStatus, setLoginStatus] = useState("");

  useEffect(() => {
    logged();
  }, [])

  const logged = () => {
    axios.get("/users/login").then((response) => {
      
      if (response.data.loggedIn === true){
        setLoginStatus(true);
      }
    }).catch((err) =>{
      console.log("login error ", err)
    })
  }

  const ProtectedRoute = () => {
    return loginStatus ? <Outlet /> : <Navigate to="/login" />
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/home" element={
            <Home />
          } />

          <Route path="/" element={
            <Home />
          } />

          <Route path="*" element={
            <NotFound />
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


          <Route path="/contact" element={
            <Contactpage />
          } />  

          <Route path="/search" element={
            <ProductSearchpage />
          } />

          <Route path="/category/:id" element={
            <CategoryPage />
          } />

          <Route path="/product/:id" element={
            <ProductPage />
          } />

          <Route path="/admin" element={
            <Adminpage />
          } />

          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path='/signup' element={<Signupage />} />
          <Route path='/login' element={<Signinpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;