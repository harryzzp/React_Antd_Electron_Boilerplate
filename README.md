# React_Antd_Electron_Boilerplate
一个Electron React Ant Design样板脚手架

# 安装运行
下载代码
```
git clone https://github.com/harryzzp/React_Antd_Electron_Boilerplate.git
```
安装依赖
```
yarn
```
测试react
```
yarn start
```

测试electron
```
yarn estart
```
# 打包发布
开发时为便于调试开启DEV模式，调整package.json中的参数为false
```Json
  "DEV":false,
```
打包react
```
yarn build
```
使用webpack生成的build目录文件，使用electron-packager打包发布
```
yarn package
```

# 组件升级管理
本项目使用yarn管理升级依赖组件。执行如下命令选择升级组件。
```
yarn upgrade-interactive --latest
```

# 开发流程
本章节除非想一步步安装，否则无须执行。

全局安装elctron，yarn和create-react-app
```
npm install electron@4.0.4 -g
npm install yarn -g
npm install create-react-app -g
```
创建react项目
```
create-react-app miner
```
进入项目目录测试react
```
yarn start
```
引入Ant-Design
```
yarn add antd
```
引入 react-app-rewired
```
yarn add react-app-rewired --dev
```
引入moment时间控件
```
yarn add moment
```
引入react-router-dom路由,支持页面局部刷新
```
yarn add react-router-dom
```
修改 package.json 里的启动配置
```Json
"scripts": {
   "start": "react-app-rewired start",
   "build": "react-app-rewired build",
   "test": "react-app-rewired test --env=jsdom",
}
```
然后在项目根目录创建一个 config-overrides.js 用于修改默认配置
```JavaScript
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```
babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件
```
yarn add babel-plugin-import --dev
```
修改 config-overrides.js 文件
```JavaScript
+ const { injectBabelPlugin } = require('react-app-rewired');

  module.exports = function override(config, env) {
+   config = injectBabelPlugin(
+     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
+     config,
+   );
    return config;
  };
```
移除前面在 src/App.css 里全量添加的 @import '~antd/dist/antd.css'; 样式代码，并且按下面的格式引入模块
```JavaScript
import React, { Component } from 'react';
- import Button from 'antd/lib/button';
+ import { Button } from 'antd';
  import './App.css';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <Button type="primary">Button</Button>
        </div>
      );
    }
  }

  export default App;
```
解决The "injectBabelPlugin" helper has been deprecated as of v2.0. You can use customize-cra plugins in replacement - https://github.com/arackaf/customize-cra#available-plugins问题 
```
yarn add --dev customize-cra
yarn add --dev less-loader
```
然后修改config-overrides.js如下：
```JavaScript
// const {
//     injectBabelPlugin
// } = require('react-app-rewired');
const {
    override,
    fixBabelImports,
    // addLessLoader,
} = require("customize-cra");
// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     config = injectBabelPlugin(
//         ['import', {
//             libraryName: 'antd',
//             libraryDirectory: 'es',
//             style: 'css'
//         }],
//         config,
//     );
//     return config;
// };
module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: 'css' // change importing css to less
    }),
    // addLessLoader({
    //   javascriptEnabled: true,
    //   modifyVars: { "@primary-color": "#1DA57A" }
    // })
);
```
重新启动测试
```
yarn start
```
引入electron
```
npm install electron@latest --save-dev
```
在根目录下创建main.js文件
```JavaScript
const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const pkg = require('./package.json')
// 保持一个对于 window 对象的全局引用，如果你不这样做， 
// 当 JavaScript 对象被垃圾回收， window 会被自动地关闭 
let win
function createWindow() {
    // 创建浏览器窗口。 
    win = new BrowserWindow({ width: 800, height: 600 })
    // 然后加载应用的 index.html。 
    // package中的DEV为true时，开启调试窗口。为false时使用编译发布版本 
    if (pkg.DEV) {
        win.loadURL('http://localhost:3000/')
    } else {
        win.loadURL(url.format({
            pathname: path.join(__dirname, './build/index.html'),
            protocol: 'file:',
            slashes: true
        }))
    }
    // 打开开发者工具。 
    // win.webContents.openDevTools() 
    // 当 window 被关闭，这个事件会被触发。 
    win.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话， 
        // 通常会把多个 window 对象存放在一个数组里面， 
        // 与此同时，你应该删除相应的元素。 
        win = null
    })
}
```
打包react
```
yarn build
```
测试electron
```
yarn estart
```

# 参考
[Electron+React+Ant-Design 构建初始化应用](https://blog.csdn.net/yanlovehan/article/details/83067536)，
[antd中按需加载使用react-app-rewired报错](https://segmentfault.com/q/1010000017794269/a-1020000017860037)
[React + Redux - User Registration and Login Tutorial & Example](https://github.com/cornflourblue/react-redux-registration-login-example)
