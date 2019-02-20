import React, { Component } from 'react';
import { Table } from 'antd';

export default class AccountAssetTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [],
      data: []
    };
  }

  fetchTableData() {
    const tempData = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York'
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 40,
        address: 'London'
      },
      {
        key: '3',
        name: 'James White',
        age: 48,
        address: 'Shanghai'
      }
    ];
    this.setState({
      columns: [
        {
          title: '账号名称',
          width: 100,
          dataIndex: 'name',
          key: 'name',
          fixed: 'left'
        },
        {
          title: '证券公司',
          width: 100,
          dataIndex: 'age',
          key: 'age',
          fixed: 'left'
        },
        { title: '资金账号', width: 100, dataIndex: 'address', key: '1' },
        { title: '产品', width: 100, dataIndex: 'address', key: '2' },
        { title: '总资产', width: 100, dataIndex: 'address', key: '3' },
        { title: '总市值', width: 100, dataIndex: 'address', key: '4' },
        { title: '可用金额', width: 100, dataIndex: 'address', key: '5' },
        { title: '可取金额', width: 100, dataIndex: 'address', key: '6' },
        { title: '盈亏', width: 100, dataIndex: 'address', key: '7' },
        { title: '股票总市值', width: 100, dataIndex: 'address', key: '8' },
        { title: '冻结金额', width: 100, dataIndex: 'address', key: '9' },
        { title: '基金总市值', dataIndex: 'address', key: '10' }
      ],
      data: tempData
    });
  }
  componentDidMount() {
    this.fetchTableData();
  }

  render() {
    const { columns, data } = this.state;
    return (
      <Table bordered
        size={'small'}
        pagination={false}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1300, y: 60 }}
      />
    );
  }
}
