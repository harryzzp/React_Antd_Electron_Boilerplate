import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Tabs } from 'antd';
import StockOrderPane from './StockOrderPane';
import AccountAssetPane from './AccountAssetPane';

const TabPane = Tabs.TabPane;

class StockBuy extends Component {
  render() {
    return (
      <div>
        <Row gutter={10} style={{ width: '1000px', height: '150px' }}>
          <Col span={24}>
            <AccountAssetPane />
          </Col>
        </Row>
        <Row gutter={10} style={{ width: '1000px', height: '422px' }}>
          <Col span={24}>
            <StockOrderPane />
          </Col>
        </Row>
        <Row gutter={10} style={{ width: '1000px', height: '150px' }}>
          <Col span={24}>
            <Tabs size={'small'} defaultActiveKey="2">
              <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

export default StockBuy;
