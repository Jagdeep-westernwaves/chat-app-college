import React, { useState, useEffect } from "react";
import {
  Button,
  Row,
  Avatar,
  Upload,
  message,
  Input,
  Col,
  Modal,
  Form,
  Progress,
} from "antd";
import { ModalForm } from "../../Style/Style";
import UserProfile from "./profiles";
import axios from "axios";
import { getProfile } from "../../service/API";
import { useParams } from "react-router-dom";

const { TextArea } = Input;
const Profile = () => {
  const { fname } = useParams();
  const [visible, setVisible] = useState(false);
  const [userdetail, setUserdetail] = useState([]);
  const [defaultFileList, setDefaultFileList] = useState([]);
  const [progress, setProgress] = useState(0);
  const [test, setTest] = useState(0);
  const uploadImage = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    fmData.append("postimg", file.name);
    fmData.append("uname", localStorage.getItem("demo"));
    fmData.append("demo_image", file);

    try {
      const res = await axios.post(
        "http://localhost:9000/image",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
    } catch (err) {
      console.log("Eroor: ", err);

      onError({ err });
    }
    setTest(test + 1);
  };

  const handleOnChange = ({ file, fileList, event }) => {
    setDefaultFileList(fileList);
  };
  useEffect(() => {
    async function getData() {
      const data = await getProfile(fname);
      if (data) {
        setUserdetail(data);
      }
    }

    getData();
  }, [test]);

  const onFinish = (values) => {
    axios
      .post(`http://localhost:9000/log`, {
        uname: values.uname,
        pswd: values.password,
      })
      .then((res) => {
        if (res.data[0].count > 0) {
          localStorage.setItem("demo", values.uname);

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
      <UserProfile profile_data={userdetail} />
      <Modal
        title="Update Profile"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <ModalForm>
          <Row>
            <Col span={8}>
              <div>
                <Upload
                  accept="image/*"
                  customRequest={uploadImage}
                  onChange={handleOnChange}
                  className="avatar-uploader"
                  defaultFileList={defaultFileList}
                >
                  {/* <div style={{ marginTop: "50%" }}>
                                <PlusOutlined />
                                <div style={{ zIndex: 999, }} >Upload</div>
                            </div> */}
                  <Avatar
                    size={200}
                    shape="circle"
                    src={`http://localhost:9000/uploads/${userdetail.imgname}`}
                  />
                </Upload>
                {progress > 0 ? <Progress percent={progress} /> : null}
              </div>

              <Row>
                <label className="form-Lable">
                  User Name: {userdetail.uname}
                </label>
              </Row>
            </Col>
            <Col span={16}>
              <Form
                layout="vertical"
                name="basic"
                initialValues={{
                  name: userdetail.name,
                  email: userdetail.email,
                  bio: userdetail.bio,
                  mno: userdetail.mno,
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row>
                  <span className="form-heading">Profile Information</span>
                </Row>
                <Row>
                  <>
                    <Col span={24}>
                      <Form.Item>
                        <label className="form-Lable">Name</label>
                      </Form.Item>
                      <Form.Item name="name" rules={[{ required: true }]}>
                        <Input className="form-Input " />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item>
                        <label className="form-Lable">Email</label>
                      </Form.Item>
                      <Form.Item name="email" rules={[{ required: true }]}>
                        <Input className="form-Input " />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item>
                        <label className="form-Lable">Mobile</label>
                      </Form.Item>
                      <Form.Item name="mno" rules={[{ required: true }]}>
                        <Input className="form-Input " />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item>
                        <label className="form-Lable">Your Bio</label>
                      </Form.Item>
                      <Form.Item name="bio" rules={[{ required: true }]}>
                        <TextArea rows={4} className="form-Input " />
                      </Form.Item>
                    </Col>
                  </>
                </Row>
                <Form.Item>
                  <Button
                    className="form-button"
                    type="primary"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </ModalForm>
      </Modal>
    </>
  );
};

export default Profile;
