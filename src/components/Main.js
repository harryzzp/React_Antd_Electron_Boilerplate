import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Trade from './trade/Trade';
import Strategy from './strategy/Strategy';
import Gateway from './gateway/Gateway';
import Home from './Home';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/trade" component={Trade} />
      <Route path="/strategy" component={Strategy} />
      <Route path="/gateway" component={Gateway} />
      <Redirect to="/" />
    </Switch>
  </main>
)

export default Main;
