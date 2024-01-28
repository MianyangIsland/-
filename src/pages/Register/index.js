import React, { useState, useEffect } from "react";
import { Button, Form, Input, message , Space} from 'antd';
import {  useNavigate, NavLink } from "react-router-dom";
import styles from './index.module.css';

const Register = () => {

    const navigate = useNavigate();
    const [disabled, setDisabled ] = useState(false);
    const [time,setTime] = useState(60)

    useEffect(() => {
      let timer = null;
       
      if(disabled) { 
        timer = setInterval(() => {
            setTime((prevTime) => {
                const nowTime = prevTime - 1;
                if( nowTime === 0 ) {
                  setDisabled(false);
                  setTime(60);
                }
                return nowTime;
            })
          },1000)
      } else {
        setTime(60);
      }
      return () => clearInterval(timer)
    },[disabled])


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

      // 获取验证码
      const getCaptcha = () => {
        message.open({
            type: 'success',
            content:'验证码已发送至您的邮箱，请注意查收！'
        })
        setDisabled(true);
      }
      
    return(
       <div className={styles.register_view}>
         <div className={styles.register_form}>
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
                    label="验证码"
                    name="captcha"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your captcha!',
                        },
                    ]}
                    >
                     <Space>
                     <Input />
                    <Button 
                    onClick={getCaptcha} 
                    disabled={disabled} 
                    style={{
                      color: disabled ? 'white' : 'black'
                     }}
                     >
                         {
                            disabled ? `还剩${time}秒` : `获取验证码`
                         }
                    </Button>
                     </Space>
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
                      to={'/Login'}
                      style={{
                        marginLeft: 20,
                        color: 'white'
                      }}
                      >
                       已有账号，直接登陆
                     </NavLink>
                    </Form.Item>
          </Form>
         </div>
       </div>
    )
}

export default Register;