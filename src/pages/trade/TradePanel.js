import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import StockBasic from '../../components/trade/stock/basic/StockBasic';
import StockAlgorithm from '../../components/trade/stock/algorithm/StockAlgorithm';
import StockStrategy from '../../components/trade/stock/strategy/StockStrategy';

const TradePanel = () => (
  <main>
    <Switch>
      <Route path="/trade/stock/basic" component={StockBasic} />
      <Route path="/trade/stock/algorithm" component={StockAlgorithm} />
      <Route path="/trade/stock/strategy" component={StockStrategy} />
      <Redirect to="/trade/stock/basic" />
    </Switch>
  </main>
);

export default TradePanel;
