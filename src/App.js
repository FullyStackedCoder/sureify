import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import './App.css';

import Home from './containers/Home';

function App() {
  let routes = (
    <Switch>
      <Route exact path="/" component={Home} />} />
      <Redirect to="/" />
    </Switch>
  );
  return <div>{routes}</div>;
}

export default withRouter(App);
