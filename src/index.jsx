import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "antd/dist/antd.css";
import App from "./layout/App";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { SocketProvider } from "./context/SocketProvider";

ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <SocketProvider>
        <App />
      </SocketProvider>
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
