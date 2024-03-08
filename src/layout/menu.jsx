import React, { useState, useEffect } from "react";
import { Menu, Image, Col, Row } from "antd";
import { Link, NavLink, useHistory } from "react-router-dom";

const { SubMenu } = Menu;
const Menus = () => {
  const [current, setcurrent] = useState(localStorage.getItem("current"));

  const [uname, setUname] = useState(sessionStorage.getItem("demo"));

  useEffect(() => {
    setUname(sessionStorage.getItem("demo"));
  }, []);

  const history = useHistory();

  const handleClick = (e) => {
    console.log("click ", e);
    setcurrent(e.key);
  };

  const logout = () => {
    sessionStorage.removeItem("demo");
    localStorage.removeItem("jwt");
    localStorage.removeItem("refjwt");
    history.push("/");
    window.location.reload(false);
  };
  return (
    <>
      <Row>
        <Col span={17} style={{ paddingTop: "10px", paddingLeft: 10 }}>
          <Link to="/">
            {" "}
            <Image
              width={200}
              preview={false}
              style={{ display: "flex" }}
              src="/logo512.png"
            />
          </Link>
          <Menu
            style={{ display: "flex" }}
            onClick={handleClick}
            selectedKeys={current}
            mode="horizontal"
          >
            <Menu.Item key="Home">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            {/* <Menu.Item key="About">
              <NavLink to="/about">About Us</NavLink>
            </Menu.Item> */}
            {/* <Menu.Item key="Products">
              <NavLink to="/product/1">Products</NavLink>
            </Menu.Item>
            <Menu.Item key="Contact">
              <NavLink to="/contact">Contact Us</NavLink>
            </Menu.Item> */}
            {sessionStorage.getItem("demo") ? (
              <Menu.Item key="Friends">
                <NavLink to={`/friends`}>Friends</NavLink>
              </Menu.Item>
            ) : (
              <Menu.Item key="Login">
                <NavLink to={`/`}>Log In</NavLink>
              </Menu.Item>
            )}
          </Menu>
        </Col>

        <Col span={7}>
          <Menu
            onClick={handleClick}
            style={{ float: "right", marginTop: 60 }}
            selectedKeys={current}
            mode="horizontal"
          >
            {sessionStorage.getItem("demo") ? (
              <SubMenu key="SubMenu" title={uname}>
                <Menu.Item key="profile">
                  <NavLink to={`/profile`}>Profile</NavLink>
                </Menu.Item>
                <Menu.Item key="Logout">
                  <NavLink to={`/`} onClick={logout}>
                    Log Out
                  </NavLink>
                </Menu.Item>
              </SubMenu>
            ) : null}
          </Menu>
        </Col>
      </Row>
    </>
  );
};

export default Menus;
