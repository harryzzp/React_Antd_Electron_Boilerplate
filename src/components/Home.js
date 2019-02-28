import React from 'react';
import { connect } from 'react-redux';
import Navigator from './Navigator';
import Main from '../pages/Main';
import Login from './Login';

const HomeComponent = ({ authData }) => {
  console.log('check username: ', authData.username);
  // 此处可以添加用户检查逻辑
  if (authData.username === '') {
    console.log('check failed: ', authData.username);
    return <Login />;
  }
  return (
    <div>
      <Navigator />
      <Main />
    </div>
  );
};

export default connect(state => ({ authData: state.user.data }))(HomeComponent);
