import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './App.css';
import styles from './App.css';
import { logout } from '../actions/user';
import HomeComponent from './Home';
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir, userIsAdminRedir,
  userIsAuthenticated, userIsNotAuthenticated } from '../utils/auth';

import LoginComponent from './Login';

const getUserName = user => {
  if (user.data) {
    console.log('user data: ', user.data)
    return `Welcome ${user.data.name}`
  }
  console.log('no user data: ', user.data)
  return `Not logged in`
}

// Need to apply the hocs here to avoid applying them inside the render method
const Login = userIsNotAuthenticatedRedir(LoginComponent);
const Home = userIsAuthenticatedRedir(HomeComponent)

// Only show login when the user is not logged in and logout when logged in
// Could have also done this with a single wrapper and `FailureComponent`
const UserName = ({ user }) => (<div className={styles.username}>{getUserName(user)}</div>)
// const LoginLink = userIsNotAuthenticated(() => <NavLink activeClassName={styles.active} to="/login">Login</NavLink>)

function App({ user, logout }) {
  return (
    <BrowserRouter>
      <div>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>
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
