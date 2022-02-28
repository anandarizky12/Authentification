import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Card } from "antd";
import { handleChange } from "../utils";
import { login } from "../../actions/user";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = (e: any) => {
    login(state.email, state.password);
  };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
      }}
      className=""
    >
      <Card title="Card title" bordered={true} style={{ width: 400 }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={(e) => handleSubmit(e)}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="Email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              name="email"
              onChange={(e) => handleChange(e, state, setState)}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              name="password"
              onChange={(e) => handleChange(e, state, setState)}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
