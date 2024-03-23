import { Avatar, Button, Col, Form, Input, Row } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { capitalize, map, toNumber } from "lodash";
import React, { useEffect, useState } from "react";
import { FcLeft } from "react-icons/fc";
import { ChartForm } from "../../../Style/Style";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
const SERVER_URL = "http://localhost:9000"; // Replace with your server URL

const Chat = () => {
  const socket = io(SERVER_URL);
  const { uname } = useParams();
  const [state, setState] = useState();
  const onFinish = (values) => {
    const socket = io(SERVER_URL);
    axios
      .post("http://localhost:9000/sendMsg", {
        lid: localStorage.getItem("lid"),
        uname: uname,
        msg: values.msg,
      })
      .then((res) => {
        setState(res.data);
        socket.emit("send_msg");
      });
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    // Listen for "hello" message from server
    const socket = io(SERVER_URL);
    axios
      .post("http://localhost:9000/hndleMsg", {
        lid: localStorage.getItem("lid"),
        uname: uname,
      })
      .then((res) => {
        setState(res.data);
      });
    socket.on("recieve_msg", () => {
      axios
        .post("http://localhost:9000/hndleMsg", {
          lid: localStorage.getItem("lid"),
          uname: uname,
        })
        .then((res) => {
          setState(res.data);
        });
    });
  }, []);
  useEffect(() => {
    // const chatRefresher = setInterval(() => {
    //   axios
    //     .post("http://localhost:9000/hndleMsg", {
    //       lid: localStorage.getItem("lid"),
    //       uname: uname,
    //     })
    //     .then((res) => {
    //       setState(res.data);
    //     });
    // }, 800);
    scrollToBottom();

    return () => {
      // clearInterval(chatRefresher);
      // localStorage.removeItem("fidOfChat");
      // localStorage.removeItem("nameOfFriend");
      // localStorage.removeItem("uname");
      // localStorage.removeItem("profile");
    };
  }, [state]);
  function scrollToBottom() {
    var chatBox = document.getElementById("chat-box-container");
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  const [form] = Form.useForm();
  return (
    <ChartForm>
      <>
        <Row style={{ background: "#f0f2f5", padding: "7px" }}>
          <Link to={"/Uprofile/" + uname}>
            <FcLeft style={{ paddingTop: "10px" }} size={50} />
          </Link>
          <Avatar
            size={60}
            src={
              `http://localhost:9000/Uploads/` + localStorage.getItem("profile")
            }
          />
          &nbsp;&nbsp;
          <h2 style={{ padding: "10px" }}>
            {capitalize(localStorage.getItem("nameOfFriend"))}
          </h2>
        </Row>{" "}
      </>
      <div className="scrollbar newScroll" id="chat-box-container">
        {map(state, (item) => {
          return (
            <>
              {item.sId !== toNumber(localStorage.getItem("lid")) ? (
                <div
                  style={{
                    boxShadow: "1px 1px 2px  #e7e7e7 ",
                    background: "#ffffff",
                    margin: "2px 10px",
                    padding: "6px 10px",
                    maxWidth: "350px",
                    width: "auto",
                    borderRadius: "0px 10px 10px 10px",
                  }}
                >
                  {item.CloneMsg}
                </div>
              ) : (
                <div
                  style={{
                    background: "#d9fdd3",
                    margin: "2px 10px",
                    padding: "6px 10px",
                    maxWidth: "100%",
                    width: "350px",
                    borderRadius: "0px 10px 10px 10px",
                    marginLeft: "140px",
                  }}
                >
                  {item.CloneMsg}
                </div>
              )}
            </>
          );
        })}
      </div>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        rese
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row
          style={{
            width: "100%",
            padding: 8,
            gap: "8px",
          }}
        >
          <Col span={19}>
            <Form.Item style={{ minWidth: "100%" }} name="msg">
              <Input style={{ minWidth: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </ChartForm>
  );
};

export default Chat;
