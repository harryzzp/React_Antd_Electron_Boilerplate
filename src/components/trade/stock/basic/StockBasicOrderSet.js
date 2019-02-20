import React, { Component } from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import './StockBasicOrderSet.css';

const TabPane = Tabs.TabPane;

class StockBasicOrderSet extends Component {

  render() {
    return (
      <div>
        <Tabs size={'small'} tabPosition={'left'}>
          <TabPane tab="买入" key="1">
            买入
            <div id='StockBasicOrderBuy'>11</div>
          </TabPane>
          <TabPane tab="卖出" key="2">
            卖出
          </TabPane>
          <TabPane tab="撤单" key="3">
            撤单
          </TabPane>
          <TabPane tab="融资融券" key="4">
            融资融券
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default StockBasicOrderSet;
