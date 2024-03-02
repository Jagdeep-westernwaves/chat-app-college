import React from "react";
import { Form, Input, Button, Checkbox, message, Row, Col } from "antd";
import axios from "axios";
import { CenterForm } from "../../Style/Style";
import { NavLink, useHistory } from "react-router-dom";
const layout = {
  layout: "vertical",
};

const File = () => {
  const history = useHistory();
  const onFinish = (values) => {
    console.log(values);

    axios
      .post(
        `http://localhost:9000/log`,

        {
          uname: values.uname,
          pswd: values.password,
        }
      )
      .then((res) => {
        console.log(res);

        if (res.data.count > 0) {
          console.log("✌️res.data --->", res.data);
          localStorage.setItem("demo", values.uname);
          localStorage.setItem("lid", res.data.id);
          localStorage.setItem("jwt", res.data.token);
          history.push("/");
          message.success("Successfully Loged In");
          window.location.reload(false);
        } else {
          console.log("wrng pswd");
          console.log(values);

          message.error("Wrong LogIn Details");
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
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
                  <Input
                    className="form-Input "
                    placeholder="Enter User Name"
                  />
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
    </>
  );
};

export default File;
