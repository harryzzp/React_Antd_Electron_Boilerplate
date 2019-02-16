import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import Trade from '../components/Trade';
import Strategy from '../components/Strategy';
import Gateway from '../components/Gateway';

export class MainRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/Trade" component={Trade} />
          <Route path="/Strategy" component={Strategy} />
          <Route path="/Gateway" component={Gateway} />
        </Switch>
      </BrowserRouter>
    );
  }
}
