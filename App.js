import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from './home';
import Allmoblie from './allmoblie';
import MobileDetail from './mobileDetail';
import Add from './Add';
import Login from './login';

export default function app(){
    return (
        <>
        <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Layout/>}>
      <Route path="/login" element={<Login/>} />
       <Route index element={<Home/>}></Route>
      <Route path="/allmoblie" element={<Allmoblie/>}></Route>
      <Route path="/mobileDetail/:id" element={<MobileDetail/>}></Route>
      <Route path='/mobile/add' element={<Add/>}></Route>
      <Route path='/mobile/edit/:id' element={<Add/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </>
    );
}