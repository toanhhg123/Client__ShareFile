import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../axios/auth";
import { requesSuccess } from "../features/auth/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { islogin } = auth;

  const onFinish = async (values) => {
    try {
      const data = await login(values);
      console.log(data);
      dispatch(requesSuccess(data));
    } catch (error) {
      console.log(error.message);
    }
  };

  if (islogin) return <Navigate to={"/"} replace />;
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{
        padding: "3rem",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <h1>Login</h1>
      <Form.Item name="email">
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="email"
        />
      </Form.Item>
      <Form.Item name="password">
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
  );
};
export default Login;
