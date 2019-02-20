import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './StockOrderPane.css';
import { Card } from 'antd';
import AccountAssetTable from './AccountAssetTable';

const tabList = [
  {
    key: 'accountAssetPane',
    tab: '账号资金'
  }
];

const contentListNoTitle = {
  accountAssetPane: <AccountAssetTable />
};

export default class AccountAssetPane extends Component {
  state = {
    noTitleKey: 'accountAssetPane'
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
          tabList={tabList}
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
