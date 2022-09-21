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




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
<Routes>

<Route path="/" element={<Layout/>}>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
