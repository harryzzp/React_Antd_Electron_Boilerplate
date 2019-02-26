import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export const store = createStore(applyMiddleware(thunkMiddleware));
