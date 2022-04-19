import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

class Routes extends Component {
  render() {
    return (
      <Router>
        <switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </switch>
      </Router>
    );
  }
}

export default Routes;
