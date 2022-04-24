import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes as RouteLogin,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

class Routes extends Component {
  render() {
    return (
      <Router>
        <RouteLogin>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </RouteLogin>
      </Router>
    );
  }
}

export default Routes;
