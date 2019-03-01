import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { login } from '../actions/user';
import PropTypes from 'prop-types';
import './Login.css'

export class LoginContainer extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.login({
          username: values.username,
          password: values.password
        });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={10}></Col>
          <Col span={4}>
            <div style={{ marginTop: '30vh', textAlign: 'center' }}>
              <p>Miner</p>
            </div>
            <Form onSubmit={this.handleSubmit} className='login-form'>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入你的用户名!' }],
                })(
                  <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='用户名'/>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(
                  <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='密码' />
                )}
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit' className='login-form-button'>
                  登 录
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={10}></Col>
        </Row>
      </div>
    );
  }
}

export default connect(null, { login })(Form.create()(LoginContainer));