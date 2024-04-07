import React, { useState, useEffect } from "react";
import { Row, Avatar, Col } from "antd";
import { ProfileForm } from "../../Style/Style";
import { useParams, Link } from "react-router-dom";
import PostList from "../../PostPage/PostList";
import { get, map, size } from "lodash";
import { getProfile } from "../../service/API";

const Profile = () => {
  const { fname } = useParams();
  const [userdetail, setUserdetail] = useState([]);
  const [state, setState] = useState([]);
  async function getData() {
    const res = await getProfile(fname);
    if (res) {
      setUserdetail(res);
      localStorage.setItem("fidOfChat", res.id);
      localStorage.setItem("nameOfFriend", res.name);
      localStorage.setItem("profile", res.imgname);
      localStorage.setItem("uname", res.uname);
      setState(
        map(get(res, "posts", []), (item) => {
          item.imgname =
            get(res, "picBgoogle", "") !== "" ? res.picBgoogle : res.imgname;
          item.uname = res.uname;
          return item;
        })
      );
    }
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
              <label className="form-Lable">Name: {userdetail.name} </label>
            </Row>
            <Row>
              <label className="form-Lable">Email: {userdetail.email}</label>
            </Row>
            <Row>
              <label className="form-Lable">
                Phone Number: {userdetail.mno}
              </label>
            </Row>
            <Row>
              <label className="form-Lable">Bio: {userdetail.bio}</label>
            </Row>

            <Row>
              <Col span={12}>
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
