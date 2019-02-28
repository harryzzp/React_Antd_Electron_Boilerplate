import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Button } from 'antd';
import 'antd/dist/antd.css';

import { logout } from '../actions/user';

const { Header } = Layout;

const Navigator = ({ authData, logout }) => {
  return (
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
        <Menu.Item key='-1' style={{ float: 'right' }}>
          <Button type='danger' block onClick={logout}>
            <Icon type='logout' />
          </Button>
        </Menu.Item>
        <Menu.Item key='0' disabled style={{ float: 'right' }}>
          {`欢迎 ${authData.username}`}
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default connect(
  state => ({ authData: state.user.data }),
  { logout }
)(Navigator);
