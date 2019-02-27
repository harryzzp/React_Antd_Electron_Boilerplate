import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './App.css';
import { logout } from '../actions/user';
import Navigator from './Navigator';
import Main from '../pages/Main';

// import LoginComponent from './Login';

function App({ user, logout }) {
  return (
    <BrowserRouter>
      <div>
        <Navigator />
        <Main />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { logout }
)(App);
