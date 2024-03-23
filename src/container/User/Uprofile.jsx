import React, { useState, useEffect } from "react";
import { Button, Row, Avatar, Col } from "antd";
import { PostForm, ProfileForm } from "../../Style/Style";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import PostList from "../../PostPage/PostList";
import { get, map, size } from "lodash";

const Profile = () => {
  const { fname } = useParams();
  const [userdetail, setUserdetail] = useState([]);
  const [state, setState] = useState([]);
  async function getData() {
    axios
      .post(
        `http://localhost:9000/profile`,

        {
          uname: fname,
          token: localStorage.getItem("jwt"),
          id: localStorage.getItem("lid"),
        }
      )
      .then((res) => {
        setUserdetail(res.data);
        let data = [];
        map(get(res.data, "posts", []), (item) => {
          item.imgname =
            get(res.data, "picBgoogle", "") !== ""
              ? res.data.picBgoogle
              : res.data.imgname;
          item.uname = res.data.uname;
          data.push(item);
        });
        localStorage.setItem("fidOfChat", res.data.id);
        localStorage.setItem("nameOfFriend", res.data.name);
        localStorage.setItem("profile", res.data.imgname);
        localStorage.setItem("uname", res.data.uname);
        setState(data);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ProfileForm>
        <Row>
          <Col span={8}>
            <div>
              <Avatar
                size={200}
                shape="square"
                src={`http://localhost:9000/uploads/${userdetail.imgname}`}
              />
              <Row>
                {" "}
                <label className="profilelable">User Name: </label>
                <br />
                <label className="profilename">{userdetail.uname}</label>
              </Row>
            </div>
          </Col>
          <Col span={16}>
            <Row>
              <span className="form-heading">Profile Information</span>
            </Row>
            <Row>
              {" "}
              <label className="form-Lable">Name: {userdetail.name} </label>
            </Row>
            <Row>
              <label className="form-Lable">Email: {userdetail.email}</label>
            </Row>
            <Row>
              {" "}
              <label className="form-Lable">
                Phone Number: {userdetail.mno}
              </label>
            </Row>
            <Row>
              {" "}
              <label className="form-Lable">Bio: {userdetail.bio}</label>
            </Row>

            <Row>
              <Col span={12}>
                {" "}
                <Link to={"/chat/" + userdetail.uname} className="form-button">
                  Message Now
                </Link>
              </Col>
              <Col span={12}></Col>
            </Row>
          </Col>
        </Row>
      </ProfileForm>
      {size(state) > 0 ? <PostList state={state} setState={setState} /> : ""}
    </>
  );
};

export default Profile;
