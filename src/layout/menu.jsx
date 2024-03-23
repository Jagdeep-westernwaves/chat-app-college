import React, { useState, useEffect } from "react";
import { Menu, Image, Col, Row } from "antd";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Grid } from "@mui/material";

const { SubMenu } = Menu;
const Menus = () => {
  const [current, setcurrent] = useState(localStorage.getItem("current"));

  const [uname, setUname] = useState(localStorage.getItem("demo"));

  useEffect(() => {
    setUname(localStorage.getItem("demo"));
  }, []);

  const history = useHistory();

  const handleClick = (e) => {
    console.log("click ", e);
    setcurrent(e.key);
  };

  const logout = () => {
    localStorage.removeItem("demo");
    localStorage.removeItem("jwt");
    localStorage.removeItem("refjwt");
    history.push("/");
    window.location.reload(false);
  };
  return (
    <Row
      style={{
        background: "#fff",
        position: "fixed",
        top: 0,
        zIndex: 9999,
        width: "100%",
      }}
    >
      <Col span={4} style={{ paddingTop: "10px", paddingLeft: 10 }}>
        <Link to="/">
          <Image
            width={200}
            preview={false}
            style={{ display: "flex" }}
            src="/logo512.png"
          />
        </Link>
      </Col>
      <Col span={20} style={{ paddingTop: "10px", paddingLeft: 10 }}>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            {" "}
            <Menu
              style={{ display: "flex" }}
              onClick={handleClick}
              selectedKeys={current}
              mode="horizontal"
            >
              <Menu.Item key="Home">
                <NavLink to="/">Home</NavLink>
              </Menu.Item>
              {localStorage.getItem("demo") ? (
                <Menu.Item key="Friends">
                  <NavLink to={`/friends`}>Friends</NavLink>
                </Menu.Item>
              ) : (
                <Menu.Item key="Login">
                  <NavLink to={`/`}>Log In</NavLink>
                </Menu.Item>
              )}
            </Menu>
          </Grid>
          <Grid item>
            <Menu
              onClick={handleClick}
              style={{ float: "right" }}
              selectedKeys={current}
              mode="horizontal"
            >
              {localStorage.getItem("demo") ? (
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
          </Grid>
        </Grid>
      </Col>
    </Row>
  );
};

export default Menus;
