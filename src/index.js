import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import * as reducers from './reducers/user';

const reducer = combineReducers(Object.assign({}, reducers, {}));

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunkMiddleware)
);

// Note: passing enhancer as the last argument requires redux@>=3.1.0
const store = createStore(reducer, enhancer);

render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
