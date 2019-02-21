import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import StockOrderPane from './StockBasicOrderPane';
import AccountAssetPane from '../account/AccountAssetPane';
import StockInfoPane from '../info/StockInfoPane';

class StockBasic extends Component {
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
            <StockInfoPane />
          </Col>
        </Row>
      </div>
    );
  }
}

export default StockBasic;
