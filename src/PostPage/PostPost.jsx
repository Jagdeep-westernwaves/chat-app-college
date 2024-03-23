import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Divider,
  Form,
  Button,
  Image,
  Select,
  Avatar,
  Input,
  Upload,
  Modal,
} from "antd";
import { PostForm } from "../Style/Style";
import axios from "axios";
import { lastIndexOf, size } from "lodash";
const { Option } = Select;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    // if (file && file.type.match("image.*")) {
    reader.readAsDataURL(file);
    // }
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const PostPost = ({ getPosts }) => {
  const [defaultFileList, setDefaultFileList] = useState([]);
  const [postImage, setpostImage] = useState("");
  const [form] = Form.useForm();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [userdetail, setUserdetail] = useState([]);
  const normFile = async ({ file, fileList }) => {
    setDefaultFileList(file);
    const postImages = await getBase64(fileList[0].originFileObj);
    setpostImage(postImages);
  };
  // const normVideo = async ({ file, fileList }) => {
  //   console.log(file, "file");
  //   console.log(fileList, "fileList");
  //   const postImages = await getBase64(fileList[0].originFileObj);
  //   setpostImage(postImages);
  // };
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
      setPreviewImage(file.url || file.preview);
      setPreviewVisible(true);
      setPreviewTitle(
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
      );
    }
  };
  async function getData() {
    axios
      .post(
        `http://localhost:9000/profile`,

        {
          uname: sessionStorage.getItem("demo"),
          token: localStorage.getItem("jwt"),
        }
      )

      .then((res) => {
        setUserdetail(res.data);
      });
  }
  useEffect(() => {
    async function getData() {
      axios
        .post(
          `http://localhost:9000/profile`,

          {
            uname: localStorage.getItem("demo"),
            token: localStorage.getItem("jwt"),
          }
        )

        .then((res) => {
          setUserdetail(res.data);
        });
    }

    getData();
  }, []);
  const onFinish = (values) => {
    const indexss = lastIndexOf(defaultFileList.name, ".");
    const fmData = new FormData();
    fmData.append("posttitle", values.title);
    fmData.append(
      "postimg",
      "test" + new Date().getTime() + defaultFileList.name.slice(indexss)
    );
    fmData.append("privacysts", values.privacy);
    fmData.append("postDes", values.title);
    fmData.append("uid", userdetail.id);
    fmData.append("demo_image", defaultFileList);
    try {
      axios
        .post("http://localhost:9000/postpost", fmData)
        .then(() => {
          setDefaultFileList([]);
          getPosts();
          form.resetFields();
        })
        .catch((e) => {
          console.log("error", e);
        });
    } catch (err) {
      console.log("Eroor: ", err);
    }
  };
  const onFinishFailed = (values) => {
    console.log(values);
  };
  return (
    <>
      <PostForm>
        <Form
          form={form}
          layout="vertical"
          name="basic"
          initialValues={{
            privacy: "1",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col span={2}>
              {userdetail.imgname ? (
                <Avatar
                  size={40}
                  shape="circle"
                  src={`http://localhost:9000/uploads/${userdetail.imgname}`}
                />
              ) : (
                <Avatar size={40} shape="circle" src={`default.png`} />
              )}
            </Col>
            <Col span={22}>
              <Form.Item
                name="title"
                noStyle
                rules={[{ required: true, message: "Title is required" }]}
              >
                <Input
                  className="Post-Input "
                  placeholder={`What's on your mind, ${
                    userdetail.name ? userdetail.name : "Friend"
                  }`}
                />
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={24}>
              <Form.Item name="demo_image" valuePropName="file">
                {size(defaultFileList) === 0 ? (
                  <>
                    <Upload
                      name="demo_image"
                      listType="picture"
                      accept="image/*"
                      maxCount={1}
                      fileList={defaultFileList}
                      beforeUpload={() => false}
                      onChange={normFile}
                      onPreview={handlePreview}
                    >
                      <div>
                        <>
                          <Row className="PostButton">
                            <Col>
                              <Avatar
                                size={34}
                                shape="squre"
                                src={`/122.gif`}
                              />
                              &nbsp;Attach Image with post 😍
                            </Col>
                          </Row>
                        </>
                      </div>
                    </Upload>
                  </>
                ) : (
                  <div
                    style={{ width: "100%", height: 400, textAlign: "center" }}
                  >
                    <Image
                      preview={false}
                      style={{ width: "auto", height: 400 }}
                      onClick={() => {
                        setpostImage("");
                        setDefaultFileList([]);
                      }}
                      src={postImage}
                    />
                  </div>
                )}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="privacy"
                noStyle
                rules={[
                  { required: true, message: "Username is xsssrequired" },
                ]}
              >
                <Select defaultValue="1" style={{ width: 200 }}>
                  <Option value="1">Public</Option>
                  <Option value="0">Freinds Only</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Form.Item style={{ width: "100%" }}>
              <Button className="form-button" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </PostForm>{" "}
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{ width: "100%", height: "60vh" }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default PostPost;
