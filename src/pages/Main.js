import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Trade from './trade/Trade';
import Strategy from '../components/strategy/Strategy';
import Gateway from '../components/gateway/Gateway';
import Dashboard from '../components/Dashboard';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/trade" component={Trade} />
      <Route path="/strategy" component={Strategy} />
      <Route path="/gateway" component={Gateway} />
    </Switch>
  </main>
);

export default Main;
