import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Navigator from './Navigator';
import Main from '../pages/Main';

const App = () => (
  <BrowserRouter>
    <div>
      <Navigator />
      <Main />
    </div>
  </BrowserRouter>
);

export default App;
