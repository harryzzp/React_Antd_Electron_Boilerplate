import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

const { Header } = Layout;

const Navigator = ({ authData }) => (
  <Header className='header'>
    <div className='logo' />
    <Menu theme='dark' mode='horizontal' style={{ lineHeight: '64px' }}>
      <Menu.Item key='1'>
        <Link to='/trade'>
          <Icon type='dashboard' />
          交易
        </Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link to='/strategy'>
          <Icon type='form' />
          策略
        </Link>
      </Menu.Item>
      <Menu.Item key='3'>
        <Link to='/gateway'>
          <Icon type='api' />
          网关
        </Link>
      </Menu.Item>
      <Menu.Item key='4'>
        <Link to='/setting'>
          <Icon type='setting' />
          配置
        </Link>
      </Menu.Item>
      <Menu.Item key='0' style={{ float: 'right' }}>
        <Link to='/login'>
          <Icon type='logout' />
          {`欢迎 ${authData.username}`}
        </Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default connect(state => ({ authData: state.user.data }))(Navigator);
