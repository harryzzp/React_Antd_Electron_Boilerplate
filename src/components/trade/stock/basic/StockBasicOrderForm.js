import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

class StockBasicOrderForm extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal'
    };
  }

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };

  render() {
    const { formLayout } = this.state;
    const formItemLayout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 4}
    };
    const buttonItemLayout = {
      wrapperCol: { span: 4, offset: 4 }
    };
    return (
      <div>
        <Form layout={formLayout}>
          <Form.Item label='证券代码' {...formItemLayout}>
            <Input placeholder='' />
          </Form.Item>
          <Form.Item label='证券名称' {...formItemLayout}>
            <Input placeholder='' />
          </Form.Item>
          <Form.Item label='买入价格' {...formItemLayout}>
            <Input placeholder='' />
          </Form.Item>
          <Form.Item label='最大可买' {...formItemLayout}>
            <Input placeholder='' />
          </Form.Item>
          <Form.Item label='买入数量' {...formItemLayout}>
            <Input placeholder='' />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type='primary'>下单</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default StockBasicOrderForm;
