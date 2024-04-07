import { Avatar, Button, Col, Form, Input, Row } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { capitalize, map, toNumber } from "lodash";
import React, { useEffect, useState } from "react";
import { ChartForm } from "../../../Style/Style";
import { useParams } from "react-router-dom";
import ChatMessageWithArrow, {
  ChatMessageWithRightArrow,
} from "../../../Style/ChatMessage";
import useAPIClient from "../../../service/API/api-Client";
import { useSocket } from "../../../context/SocketProvider";
import { getProfile } from "../../../service/API";

const Chat = () => {
  const socket = useSocket();
  const apiClient = useAPIClient();
  const { uname } = useParams();
  const [friendProfile, setFriendProfile] = useState({});
  const [state, setState] = useState();
  const getFriendProfile = async () => {
    const res = await getProfile();
    if (res) {
      setFriendProfile(res);
    }
  };
  function scrollToBottom() {
    var chatBox = document.getElementById("chat-box-container");
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  const getMessage = async () => {
    const res = await apiClient.post("/hndleMsg", {
      lid: localStorage.getItem("lid"),
      uname: uname,
    });
    if (res) {
      setState(res);
      scrollToBottom();
    }
  };

  const onFinish = (values) => {
    axios
      .post("http://localhost:9000/sendMsg", {
        lid: localStorage.getItem("lid"),
        uname: uname,
        msg: values.msg,
      })
      .then((res) => {
        setState(res.data);
        getMessage();
        // socket.emit("send_msg");
      });
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    getFriendProfile();
    getMessage();
    const receiveMsgHandler = (socket) => {
      getMessage();
    };
    socket.on(`recieve_msg_${localStorage.getItem("demo")}`, receiveMsgHandler);

    // Cleanup function to remove the event listener
    return () => {
      socket.off(
        `recieve_msg_${localStorage.getItem("demo")}`,
        receiveMsgHandler
      );
    };
  }, []);

  const [form] = Form.useForm();
  return (
    <ChartForm
      style={{
        minHeight: "calc(100vh -60px) !important",
      }}
    >
      <>
        <Row style={{ background: "#f0f2f5", padding: "10px 16px" }}>
          {/* <Link to={"/profile/" + uname}>
            <LuArrowLeftCircle style={{}} size={40} />
          </Link> */}
          <Avatar
            size={40}
            src={`http://localhost:9000/Uploads/${friendProfile.imgname}`}
          />
          &nbsp;&nbsp;
          <h2 style={{}}>{capitalize(friendProfile.name)}</h2>
        </Row>
      </>
      <div className="scrollbar newScroll" id="chat-box-container">
        {map(state, (item) => {
          return item.sId !== toNumber(localStorage.getItem("lid")) ? (
            <ChatMessageWithRightArrow
              msg={item.CloneMsg}
              createAt={item.createAt}
            />
          ) : (
            <ChatMessageWithArrow
              msg={item.CloneMsg}
              createAt={item.createAt}
            />
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
            gap: "8px",
            height: 20,
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
