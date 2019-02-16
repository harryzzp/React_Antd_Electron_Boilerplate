import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Trade from './trade/Trade';
import Strategy from './strategy/Strategy';
import Gateway from './gateway/Gateway';
import Home from './Home';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match an y pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/trade" component={Trade} />
    <Route path="/strategy" component={Strategy} />
    <Route path="/gateway" component={Gateway} />
  </Switch>
)

export default Main;
