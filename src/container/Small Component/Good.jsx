import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Modal } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const Good = () => {
  const [visible, setVisible] = useState(false);
  const [userdetail, setUserdetail] = useState([]);
  const [modaldata, setModaldata] = useState([]);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`http://localhost:9000/`);
      setUserdetail(res.data);
    }

    getData();
  });
  const data = [];
  const rows = [];

  for (var i = 0; i < 8; i++) {
    userdetail.map((res) => {
      if (res.id === i) {
        rows.push({
          key: i,
          ids: res.id,
          name: res.name,
          age: 32,
          address: `London Park no. ${i}`,
        });
        data.push(res.id);
      }
    });
    if (i === data) {
      console.log(i === data);
    } else {
      rows.push({
        ids: i,
        name: "",
        age: 32,
        address: `London Park no. ${i}`,
      });
    }
  }
  const newArray = rows.filter(
    (v, i, a) => a.findIndex((t) => t.ids === v.ids) === i
  );

  const gridStyle = {
    width: "25%",
    hieght: 100,
    textAlign: "center",
  };

  const popset = (item) => {
    console.log(item);
    setModaldata(item);
    setVisible(true);
  };
  return (
    <div>
      <Card title="Card Title">
        {newArray.map((item) => {
          return (
            <Card.Grid style={gridStyle} onClick={() => popset(item)}>
              {item.name ? item.name : <PlusOutlined />}
            </Card.Grid>
          );
        })}
      </Card>
      <Modal
        title="Update Profile"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        destroyOnClose={true}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
            username: modaldata.ids,
            password: modaldata.name,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="User Name"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Good;
