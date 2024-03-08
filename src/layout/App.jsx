import React, { useEffect } from "react";
import "../customcss/App.css";
import { Route, Switch } from "react-router-dom";
import Menus from "./menu";
import Home from "./Home";
import CatProduct from "../container/Product/CatProduct";
import Error from "./Error";
import User from "../container/User/User";
import Register from "../container/Login/Register";
import File from "../container/Login/login";
import Uprofile from "../container/User/Uprofile";
import Profilepage from "../container/User/Forgetpswd";
import SearchPenal from "../container/User/SearchPenal";
import Profile from "../container/User/Profile";
import Chat from "../container/User/Chat/Chat";
const SERVER_URL = "http://localhost:9000"; // Replace with your server URL

const App = () => {
  useEffect(() => {
    localStorage.setItem("current", "Home");
  }, []);
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