import React from 'react'
import './App.css'

import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

// import Login from './components/login/Login';
// import Register from './components/login/Register';

import Home from './components/pages/home/Home';
import Report from './components/pages/expense/Report';
import Tracker from './components/pages/expense/Tracker';
import Categories from './components/pages/expense/categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/report" element={<><Navbar /><Report /><Footer /></>} />
      <Route path="/tracker" element={<><Navbar /><Tracker /><Footer /></>} />
      <Route path="/categories" element={<><Navbar /><Categories /><Footer /></>} />
      {/* <Route path="login" element={<Login />} /> */}
      {/* <Route path="register" element={<Register />} /> */}
      {/* <Route path="*" element={<Login/>}/> */}
      <Route path="*" element={<><Navbar /><Home /><Footer /></>}/>
    </Routes>
  )
}

export default App
