import React from "react";
import { Form, Input, Button, Checkbox, message, Row, Col } from "antd";
import { CenterForm } from "../../Style/Style";
import { NavLink } from "react-router-dom";
import { loginHandler } from "../../service/API";
const layout = {
  layout: "vertical",
};

const File = () => {
  const onFinish = (values) => {
    loginHandler({
      uname: values.uname,
      pswd: values.password,
    }).then((res) => {
      if (res.count > 0) {
        localStorage.setItem("demo", values.uname);
        localStorage.setItem("lid", res.id);
        localStorage.setItem("authToken", res.token);
        message.success("Successfully Loged In");
        window.location.reload(false);
      } else {
        message.error("Wrong LogIn Details");
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <CenterForm>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row>
          <span className="form-heading">Sign In</span>
        </Row>
        <Row>
          <>
            <Col span={24}>
              <Form.Item>
                <label className="form-Lable">User Name</label>
              </Form.Item>
              <Form.Item name="uname" rules={[{ required: true }]}>
                <Input className="form-Input " placeholder="Enter User Name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <label className="form-Lable">Password</label>
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true }]}>
                <Input.Password
                  className="form-Input "
                  placeholder="Enter Password"
                />
              </Form.Item>
              <Form.Item>
                <NavLink to={`/forget-password`}>Forgot password?</NavLink>
              </Form.Item>
            </Col>
          </>
        </Row>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button className="form-button" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Row>
          <span className="form-link">Create New Account </span>
          <NavLink to="/register" className="form-links">
            &nbsp;register now!
          </NavLink>
        </Row>
      </Form>
    </CenterForm>
  );
};

export default File;
