import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { history } from './redux/configPages';

import Login from './pages/Login';
import Signup from './pages/Signup';

const Router = (props) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes history={history}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Router;
