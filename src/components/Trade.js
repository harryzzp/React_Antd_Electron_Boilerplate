import React, { Component } from 'react';
import { LocaleProvider, DatePicker, Alert, Button, Tabs, message } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import { StickyContainer, Sticky } from 'react-sticky';

const TabPane = Tabs.TabPane;

moment.locale('zh-cn');

class Trade extends Component {
    state = {
        date: null
      };
      handleChange = date => {
        message.info(`您选择的日期是: ${date.format("YYYY-MM-DD")}`);
        this.setState({ date });
      };

    render() {
        const { date } = this.state;


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
        return(
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
            </div>
        );
    }
}

export default Trade;