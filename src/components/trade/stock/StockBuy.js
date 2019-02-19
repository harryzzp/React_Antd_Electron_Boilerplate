import React, { Component } from "react";

import "antd/dist/antd.css";
import { Row, Col, Table, Tabs } from "antd";

const TabPane = Tabs.TabPane;

const columns = [
  {
    title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left',
  },
  {
    title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left',
  },
  {
    title: 'Column 1', dataIndex: 'address', key: '1', width: 150,
  },
  {
    title: 'Column 2', dataIndex: 'address', key: '2', width: 150,
  },
  {
    title: 'Column 3', dataIndex: 'address', key: '3', width: 150,
  },
  {
    title: 'Column 4', dataIndex: 'address', key: '4', width: 150,
  },
  {
    title: 'Column 5', dataIndex: 'address', key: '5', width: 150,
  },
  {
    title: 'Column 6', dataIndex: 'address', key: '6', width: 150,
  },
  {
    title: 'Column 7', dataIndex: 'address', key: '7', width: 150,
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
];

const data = [];
for (let i = 0; i < 2; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

class StockBuy extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isFetching: true
    };
  }

  render() {
    const { hits, isFetching } = this.state;
    return (
      <div>
        <Row gutter={10} style={{ width: "1700px", height: "100px" }}>
          <Col span={24}>
            <Tabs size={"small"} defaultActiveKey="1">
              <TabPane tab="Tab 1" key="1">
                <Table pagination={false} size={'small'} columns={columns} dataSource={data} scroll={{ x: 1700, y: 100 }} />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <Row gutter={10} style={{ width: "1700px", height: "622px" }}>
          <Col span={18} push={6}>
            col-18 col-push-6
          </Col>
          <Col span={6} pull={18}>
            col-6 col-pull-18
          </Col>
        </Row>
        <Row gutter={10} style={{ width: "1700px", height: "150px" }}>
          <Col span={24}>
            <Tabs size={"small"} defaultActiveKey="2">
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
