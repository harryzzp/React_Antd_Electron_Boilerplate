import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';


const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class Trade extends Component {
  render() {
    return (
      <div>
      <Content style={{ padding: '0 5px' }}>
                  <Layout style={{ padding: '5px 0', background: '#fff' }}>
                      <Sider width={200} style={{ background: '#fff', overflow: 'auto', height: '100vh', position:"fixed", left:0 }}>
                          <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }}>
                              <SubMenu key="sub1" title={<span>
                                  <Icon type="user" />股票</span>}>
                                  <Menu.Item key="1">个股闪电手</Menu.Item>
                                  <Menu.Item key="2">组合闪电手</Menu.Item>
                                  <Menu.Item key="3">触发条件策略</Menu.Item>
                                  <Menu.Item key="4">自动交易策略</Menu.Item>
                                  <Menu.Item key="5">批量新股申购</Menu.Item>
                              </SubMenu>
                              <SubMenu key="sub2" title={<span>
                                  <Icon type="laptop" />期货</span>}>
                                  <Menu.Item key="6">option6</Menu.Item>
                                  <Menu.Item key="7">option7</Menu.Item>
                                  <Menu.Item key="8">option8</Menu.Item>
                              </SubMenu>
                              <SubMenu key="sub3" title={<span>
                                  <Icon type="notification" />期权</span>}>
                                  <Menu.Item key="9">option9</Menu.Item>
                                  <Menu.Item key="10">option10</Menu.Item>
                                  <Menu.Item key="11">option11</Menu.Item>
                                  <Menu.Item key="12">option12</Menu.Item>
                              </SubMenu>
                              <SubMenu key="sub4" title={<span>
                                  <Icon type="notification" />基金</span>}>
                                  <Menu.Item key="13">FOF</Menu.Item>
                                  <Menu.Item key="14">MOM</Menu.Item>
                              </SubMenu>
                          </Menu>
                      </Sider>
                      <Content style={{ padding: '0 5px', height:'100vh', position:"fixed", left:200 }}>
                          Content
                      </Content>
                  </Layout>
              </Content>
              </div>
    );
  }
}

export default Trade;