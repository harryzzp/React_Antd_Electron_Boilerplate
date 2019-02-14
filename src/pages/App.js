import React, { Component } from "react";
import { StickyContainer, Sticky } from "react-sticky";
import {
  LocaleProvider,
  DatePicker,
  message,
  Alert,
  Button,
  Icon,
  Layout,
  Menu,
  Table,
  Tabs,
  Form
} from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import "antd/dist/antd.css";
import "./App.css";

moment.locale("zh-cn");

const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    date: null
  };
  handleChange = date => {
    message.info(`您选择的日期是: ${date.format("YYYY-MM-DD")}`);
    this.setState({ date });
  };
  render() {
    const { date } = this.state;
    const dataSource = [
      {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号"
      },
      {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号"
      }
    ];

    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "住址",
        dataIndex: "address",
        key: "address"
      }
    ];

    const TabPane = Tabs.TabPane;

    const renderTabBar = (props, DefaultTabBar) => (
      <Sticky bottomOffset={80}>
        {({ style }) => (
          <DefaultTabBar
            {...props}
            style={{ ...style, zIndex: 1, background: "#fff" }}
          />
        )}
      </Sticky>
    );

    return (
      <Layout>
        <Header>Miner Project</Header>
        <Layout>
          <Sider breakpoint collapsible="true" collapsedWidth="0">
            <Menu theme="light" mode="inline">
              <Menu.ItemGroup>
                <Menu.Item>
                  <Icon
                    type="star"
                    theme="filled"
                    style={{ fontSize: "20px", color: "#08c" }}
                  />
                </Menu.Item>
                <Menu.SubMenu title="子菜单A">
                  <Menu.Item>
                    <Icon type="fire" />
                  </Menu.Item>
                  <Menu.Item>子菜单项2</Menu.Item>
                  <Menu.Item>子菜单项3</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item>菜单项B</Menu.Item>
                <Menu.SubMenu title="子菜单C">
                  <Menu.Item>子菜单项4</Menu.Item>
                </Menu.SubMenu>
              </Menu.ItemGroup>
            </Menu>
          </Sider>
          <Content>
            <div className="App">
              <LocaleProvider locale={zhCN}>
                <div style={{ width: 400, margin: "100px auto" }}>
                  <DatePicker onChange={this.handleChange} />
                  <div style={{ marginTop: 20 }}>
                    <Alert
                      message={`当前日期：${
                        date ? date.format("YYYY-MM-DD") : "未选择"
                      }`}
                      type="success"
                    />
                  </div>
                </div>
              </LocaleProvider>
              <div style={{ width: 400, margin: "100px auto" }}>
                <Button type="primary">确定</Button>
              </div>
              <Table dataSource={dataSource} columns={columns} />
              <StickyContainer>
                <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                  <TabPane tab="Tab 1" key="1" style={{ height: 200 }}>
                    Content of Tab Pane 1
                  </TabPane>
                  <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              </StickyContainer>
              <Form.Item>
                <Form />
              </Form.Item>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
