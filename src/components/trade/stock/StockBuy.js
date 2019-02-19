import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Table, Tabs, Tag } from "antd";

const TabPane = Tabs.TabPane;


class StockBuy extends Component {

  constructor(props) {
    super(props);

    this.state = {
      columns: [],
      data: [],
    };
  }

  fetchTableData() {
    const tempData = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London',
    },
    {
      key: '3',
      name: 'James White',
      age: 48,
      address: 'Shanghai',
    }]
    this.setState({
      columns: [
        {
          title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left',
        },
        {
          title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left',
        },
        { title: 'Column 1', dataIndex: 'address', key: '1' },
        { title: 'Column 2', dataIndex: 'address', key: '2' },
        { title: 'Column 3', dataIndex: 'address', key: '3' },
        { title: 'Column 4', dataIndex: 'address', key: '4' },
        { title: 'Column 5', dataIndex: 'address', key: '5' },
        { title: 'Column 6', dataIndex: 'address', key: '6' },
        { title: 'Column 7', dataIndex: 'address', key: '7' },
        { title: 'Column 8', dataIndex: 'address', key: '8' },
        { title: 'Column 9', dataIndex: 'address', key: '9' },
        { title: 'Column 10', dataIndex: 'address', key: '10' },
      ],
      data: tempData,
    });

  }

  componentDidMount() {
    this.fetchTableData();
  }

  render() {
    const { columns, data } = this.state;
    return (
      <div>
        <Row gutter={10} style={{ width: "1000px" }}>
          <Col span={24}>
          <Tag size="small" color="blue">账户资金</Tag>
            {/* <Tabs size={"small"} defaultActiveKey="1">
              <TabPane tab="Tab 1" key="1"> */}
                <Table size={"small"} pagination={false} columns={columns} dataSource={data} scroll={{ x: 1300, y: 60}} />
              {/* </TabPane>
            </Tabs> */}
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
