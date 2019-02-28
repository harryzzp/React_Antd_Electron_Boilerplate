import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './App.css';
import { logout } from '../actions/user';
import HomeComponent from './Home';
import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir
} from '../utils/auth';

import LoginComponent from './Login';

// Need to apply the hocs here to avoid applying them inside the render method
const Login = userIsNotAuthenticatedRedir(LoginComponent);
const Home = userIsAuthenticatedRedir(HomeComponent);

function App({ user, logout }) {
  return (
    <BrowserRouter>
      <div>
        <Route path='/login' component={Login} />
        <Route path='/' component={Home} />
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
