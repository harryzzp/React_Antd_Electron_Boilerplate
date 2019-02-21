import React, { Component } from 'react';
import { Card } from 'antd';

const tabListNoTitle = [
  {
    key: 'selectedStock',
    tab: '自选股'
  },
  {
    key: 'todayOrder',
    tab: '当日委托'
  },
  {
    key: 'todayTrade',
    tab: '当日成交'
  },
];

const contentListNoTitle = {
  selectedStock: <div>selectedStock</div>,
  todayOrder: <div>todayOrder</div>,
  todayTrade: <div>todayTrade</div>,
};

class StockInfoPane extends Component {
  state = {
    noTitleKey: 'stockOrderPane'
  };
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };
  render() {
    return (
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
    );
  }
}

export default StockInfoPane;
