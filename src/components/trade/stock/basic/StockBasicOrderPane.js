import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './StockBasicOrderPane.css';
import { Card } from 'antd';
import StockBasicOrderSet from './StockBasicOrderSet';

const tabListNoTitle = [
  {
    key: 'stockOrderPane',
    tab: '下单面板'
  }
];

const contentListNoTitle = {
  stockOrderPane: <StockBasicOrderSet/>,
};

export default class StockBasicOrderPane extends Component {
  state = {
    noTitleKey: 'stockOrderPane'
  };
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };
  render() {
    return (
      <div>
        <Card
          size={'small'}
          headStyle={{ color: 'red' }}
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey');
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    );
  }
}
