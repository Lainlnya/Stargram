import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
