import React, { useEffect } from 'react';
import Footer from '../../components/layout/';
import Layout from 'antd/es/layout/layout';
import style from './Login.module.scss';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, rememberUserAction } from '../../features/user/userSlice';
import { useNavigate } from 'react-router';

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.user.isLoading);
  const userObject = useSelector((store) => store.user);
  let user;
  if (userObject) {
    user = userObject.user;
  }

  const navigate = useNavigate();

  const onFinish = (values) => {
    const { remember, ...user } = values;
    dispatch(rememberUserAction(remember));
    dispatch(loginUser(user));
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);
  return (
    <Layout className={style.loginContainer}>
      <div className={style.formContainer}>
        <div className={style.loginText}>
          <h1 className={style.companyName}>SOSAZ</h1>
          <h3 className={style.action}>Giriş</h3>
        </div>
        <Form
          name='basic'
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: 'Elektron poçt ünvanın daxil edin!',
              },
            ]}
          >
            <Input placeholder='Elektron poçt ünvanı' />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Şifrənizi daxil edin!',
              },
            ]}
          >
            <Input.Password placeholder='Şifrə' />
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type='primary' htmlType='submit' loading={isLoading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default Login;
