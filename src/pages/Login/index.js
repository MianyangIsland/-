import React from "react";
import { Button, Form, Input, message } from 'antd';
import {  useNavigate, NavLink } from "react-router-dom";
import styles from './index.module.css';

const Login = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        const {email , password} = values;
        message.open({
            type:'success',
            content:'登陆成功!'
        })
        navigate('/main')
      };
      const onFinishFailed = (errorInfo) => {
        message.open({
            type: 'warning',
            content: '请输入必填信息!'
        })
      };
    return (
       <div className={styles.login_view}>
          <div className={styles.login_form}>
          <Form
            name="basic"
            labelCol={{
            span: 4,
            offset: 2,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            width: 400,
            height: 300,
            paddingTop: 50,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                 label="邮箱"
                 name="email"
                 rules={[
                    {
                    required: true,
                    message: 'Please input your email!',
                    },
                    ]}
                >
                    <Input />
                    </Form.Item>

                    <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input.Password />
                    </Form.Item>

                    <Form.Item
                    wrapperCol={{
                        offset: 6,
                        span: 16,
                    }}
                    >
                    <Button type="primary" htmlType="primary">
                        登陆
                    </Button>
                    <NavLink 
                      to={'/register'}
                      style={{
                        marginLeft: 20,
                        color: 'white'
                      }}
                      >
                       还没有账号，点击注册
                     </NavLink>
                    </Form.Item>
          </Form>
          </div>
       </div>
    )
}

export default Login;