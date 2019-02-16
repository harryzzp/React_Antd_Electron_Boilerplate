import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Router from '../components/Router';
import Navigator from '../components/Navigator';

const App = () => (
    <div>
        <Navigator />
        <Router />
    </div>
);

export default App;
