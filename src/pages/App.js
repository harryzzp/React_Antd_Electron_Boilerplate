import React, { Component } from 'react';

import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

//加载自定义组件
import Navigator from './Navigator';
import Dashboard from './Dashboard';

const { Content } = Layout;

class App extends Component {

  render() {
    return (
      <Layout>
        <Navigator></Navigator>
        <Layout>
          <Content>
            <Dashboard></Dashboard>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
