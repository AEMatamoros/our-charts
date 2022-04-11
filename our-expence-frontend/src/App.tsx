import React from 'react'
import './App.css'

import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './app/layouts/Navbar';
import Footer from './app/layouts/Footer';

// import Login from './app/login/Login';
// import Register from './app/login/Register';

import Home from './app/components/home/Home';
import Report from './app/components/expense/Report';
import Tracker from './app/components/expense/Tracker';
import Categories from './app/components/expense/categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/report" element={<><Navbar /><Report /><Footer /></>} />
      <Route path="/tracker" element={<><Navbar /><Tracker /><Footer /></>} />
      <Route path="/categories" element={<><Navbar /><Categories /><Footer /></>} />
      <Route path="/categories/:id" element={<><Navbar /><Home /><Footer /></>} />

      {/* <Route path="login" element={<Login />} /> */}
      {/* <Route path="register" element={<Register />} /> */}
      {/* <Route path="*" element={<Login/>}/> */}
      <Route path="*" element={<><Navbar /><Home /><Footer /></>}/>
    </Routes>
  )
}

export default App
