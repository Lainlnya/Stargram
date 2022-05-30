import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from './redux/configPages';

import Login from './pages/Login';
import Signup from './pages/Signup';
import { ConnectedRouter } from 'connected-react-router';

const App = (props) => {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
};

export default App;
