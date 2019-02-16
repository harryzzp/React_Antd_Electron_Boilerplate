import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Trade from './Trade';
import Strategy from './Strategy';
import Gateway from './Gateway';
import Home from './Home';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/trade" component={Trade} />
          <Route path="/strategy" component={Strategy} />
          <Route path="/gateway" component={Gateway} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
