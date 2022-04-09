import React from 'react';
import ReactDOM from 'react-dom';
// import Register from './components/login/Register';
import './index.scss';
// Components
// import App from './App';
// import Login from './components/login/Login';
import Home from './components/pages/home/Home';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Home/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
