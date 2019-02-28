import * as constants from '../constants/ActionTypes';

export const login = data => dispatch => {
  dispatch({
    type: constants.USER_LOGGING_IN
  });
  // Wait 0.5 seconds before "logging in"
  console.log('login user info: ', data);
  setTimeout(() => {
    dispatch({
      type: constants.USER_LOGGED_IN,
      payload: data
    });
  }, 500);
};

export function logout() {
  console.log('log out user!!! ');
  return {
    type: constants.USER_LOGGED_OUT
  };
}
