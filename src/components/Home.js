import React from 'react';
import { connect } from 'react-redux';
import Navigator from './Navigator';
import Main from '../pages/Main';

const HomeComponent = ({ authData }) => {
  return (
    <div>
      <Navigator />
      <Main />
    </div>
  );
};

export default connect(state => ({ authData: state.user }))(HomeComponent);
