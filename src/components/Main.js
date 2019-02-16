import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Trade from './Trade';
import Strategy from './Strategy';
import Gateway from './Gateway';
import Home from './Home';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
// 注意这个神奇的小写main，如果M大写则报错-_-!!!暂时没找到原因
const Main = () => (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/trade" component={Trade} />
          <Route path="/strategy" component={Strategy} />
          <Route path="/gateway" component={Gateway} />
        </Switch>
      </main>
    )

export default Main;
