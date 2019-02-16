import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../pages/App';
import Trade from './Trade';
import Strategy from './Strategy';
import Gateway from './Gateway';

export class MainRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/trade" component={Trade} />
          <Route path="/strategy" component={Strategy} />
          <Route path="/gateway" component={Gateway} />
        </Switch>
      </BrowserRouter>
    );
  }
}
