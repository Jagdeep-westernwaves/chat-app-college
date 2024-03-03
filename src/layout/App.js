import React, { useEffect } from "react";
import "../customcss/App.css";
import { Route, Switch } from "react-router-dom";
import Menus from "./menu";
import Home from "./Home";
import Contact from "../container/Small Component/Contact";
import CatProduct from "../container/Product/CatProduct";
import Error from "./Error";
import User from "../container/User/User";
import About from "../container/Small Component/About";
import Register from "../container/Login/Register";
import File from "../container/Login/login";
import Uprofile from "../container/User/Uprofile";
import Profilepage from "../container/User/Forgetpswd";
import SearchPenal from "../container/User/SearchPenal";
import Profile from "../container/User/Profile";
import io from "socket.io-client";
import axios from "axios";
import Chat from "../container/User/Chat/Chat";
const jwt = require("jsonwebtoken");

const App = () => {
  useEffect(() => {
    const socket = io("http://localhost:9000/");
    console.log("✌️socket --->", socket);
    // const socket = io();
    // listen for events emitted by the server

    socket.on("connection", () => {
      console.log("Connected to server");
    });

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);
  useEffect(() => {
    localStorage.setItem("current", "Home");
  }, []);
  const getverify = async () => {
    if (!sessionStorage.getItem("demo")) {
      if (localStorage.getItem("jwt")) {
        try {
          const ver = jwt.verify(localStorage.getItem("jwt"), "Testingjwt");
          sessionStorage.setItem("demo", ver.user);
          localStorage.setItem("lid", ver.Id);
        } catch (err) {
          localStorage.removeItem("jwt");

          axios
            .post(
              `http://localhost:9000/refjwt`,

              {
                id: localStorage.getItem("lid"),
              }
            )
            .then((res) => {
              console.log(res);
              localStorage.setItem("jwt", res.data);
            });
        }
      }
    }
  };

  getverify();

  return (
    <>
      {localStorage.getItem("jwt") ? (
        <>
          <Menus />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/about" component={About} /> */}
            {/* <Route path="/product/:pid" component={Product} /> */}
            <Route path="/CatProduct/:Catname" component={CatProduct} />
            <Route exact path="/chat/:uname" component={Chat} />
            <Route path="/Uprofile/:fname" component={Uprofile} />
            <Route path="/user/:fname" component={User} />
            <Route path="/forget-password" component={Profilepage} />
            <Route path="/friends" component={SearchPenal} />
            <Route path="/profile" component={Profile} />
            <Route component={Error} />
          </Switch>
        </>
      ) : (
        <Switch>
          <Route exact path="/" component={File} />
          <Route path="/register/" component={Register} />
          <Route component={Error} />
        </Switch>
      )}
    </>
  );
};

export default App;
