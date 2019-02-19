import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import StockBuy from './stock/StockBuy';
import StockSell from './stock/StockSell';
import StockPurchase from './stock/StockPurchase';

const TradePanel = () => (
  <main>
    <Switch>
      <Route path="/trade/stock/buy" component={StockBuy} />
      <Route path="/trade/stock/sell" component={StockSell} />
      <Route path="/trade/stock/purchase" component={StockPurchase} />
      <Redirect to="/trade/stock/buy" />
    </Switch>
  </main>
)

export default TradePanel;
