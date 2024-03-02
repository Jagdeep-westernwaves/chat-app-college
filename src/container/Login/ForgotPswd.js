import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { CenterProfile } from "./Style/StyleLRform";

export const ForgotPswd = () => {
    const[checkCount,setCheckCount]=useState(0);
  const onFinish = (values) => {
    console.log(values);
    setCheckCount(1);
  };

  const [form] = Form.useForm();
  return (
    <CenterProfile>
      <div className="forgot-passwordContainer">
          <h2>
              Please enter your E-Mail or phone number to find your account
          </h2>
      { checkCount === 0 && <Form
          form={form}
          name="register"
          className="reg-form"
          onFinish={onFinish}
          style={{ width: "100%", paddingTop: "10%" }}
          scrollToFirstError
        >
          <Form.Item
            name="txtData"
            rules={[
              {
                required: true, message: "This fielf is required",
              },
            ]}
          >
            <Input placeholder="Enter your E-mail/ Mobile Number" />
          </Form.Item>
          <Form.Item>
            <Button className="form-button" type="primary" htmlType="submit">
              Send Request
            </Button>
          </Form.Item>
        </Form>}
      { checkCount === 1 && <Form
          form={form}
          name="register"
          className="reg-form"
          onFinish={onFinish}
          style={{ width: "100%", paddingTop: "10%" }}
          scrollToFirstError
        >
          <Form.Item
            name="txtData"
            rules={[
              {
                required: true, message: "This fielf is required",
              },
            ]}
          >
            <Input placeholder="Enter your E-mail/ Mobile Number" />
          </Form.Item>
          <Form.Item>
            <Button className="form-button" type="primary" htmlType="submit">
              Send Request
            </Button>
          </Form.Item>
        </Form>}
      </div>
    </CenterProfile>
  );
};
