import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './StockOrderPane.css';
import { Card } from 'antd';

const tabListNoTitle = [
  {
    key: 'stockOrderPane',
    tab: '下单面板'
  },
  {
    key: 'futureHedge',
    tab: '期货套利'
  }
];

const contentListNoTitle = {
  stockOrderPane: <p>stockOrderPane content</p>,
  app: <p>app content</p>
};

export default class StockOrderPane extends Component {
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
