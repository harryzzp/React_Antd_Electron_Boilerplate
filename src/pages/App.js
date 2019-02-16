import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import Trade from '../components/Trade';

const { Header} = Layout;

class App extends Component {

  render() {
    return (
        <div>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
                    <Menu.Item key="1">
                        <Icon type="dashboard" />交易</Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="form" />策略</Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="api" />网关</Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="setting" />配置</Menu.Item>
                </Menu>
            </Header>
            <Trade />
        </div>
    );
  }
}

export default App;
