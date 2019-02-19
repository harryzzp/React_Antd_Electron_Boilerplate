import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import TradePanel from './TradePanel';


const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const Trade = () => (
      <div>
        <Content style={{ padding: '0 5px' }}>
          <Layout style={{ padding: '5px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff', overflow: 'auto', height: '90vh', position: "fixed", left: 0 }}>
              <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }}>
                <SubMenu key="sub1" title={<span>
                  <Icon type="user" />股票</span>}>
                  <Menu.Item key="1"><Link to='/trade/stock/buy'>买入</Link></Menu.Item>
                  <Menu.Item key="2"><Link to='/trade/stock/sell'>卖出</Link></Menu.Item>
                  <Menu.Item key="3"><Link to='/trade/stock/purchase'>申购</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span>
                  <Icon type="laptop" />期货</span>}>
                  <Menu.Item key="1">option6</Menu.Item>
                  <Menu.Item key="2">option7</Menu.Item>
                  <Menu.Item key="3">option8</Menu.Item>
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
                  <Menu.Item key="15">MOM</Menu.Item>
                  <Menu.Item key="16">MOM</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 5px', height: '80vh', position: "fixed", left: 200 }}>
              <TradePanel />
            </Content>
          </Layout>
        </Content>
      </div>
    )

export default Trade;