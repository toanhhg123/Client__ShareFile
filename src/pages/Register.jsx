import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllSchool } from "../axios/shool";
const Register = () => {
  const [user, setUser] = useState({
    email: "",
    lastName: "",
    firstName: "",
    schoolId: "",
    password: "",
    dateOfBirth: Date.now(),
  });
  const [schools, setSchools] = useState([]);
  const [shoolSelected, setShoolSelected] = useState({});

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  useEffect(() => {
    getAllSchool().then((res) => {
      setSchools(res);
      setShoolSelected(res[0]);
    });
  }, []);
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
      <h1>Register</h1>
      <Form.Item name="Email">
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
      </Form.Item>
      <Form.Item name="lastName">
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Last name"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
      </Form.Item>
      <Form.Item name="firstName">
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="FirstName"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
      </Form.Item>
      <Form.Item name="password">
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
      </Form.Item>

      <Form.Item label="School">
        <Select
          value={shoolSelected.name}
          onSelect={(e) =>
            setShoolSelected(() => schools.find((x) => x._id === e))
          }
        >
          {schools.map((x) => (
            <Select.Option key={x._id} value={x._id}>
              {x.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/login">login now!</Link>
      </Form.Item>
    </Form>
  );
};
export default Register;
