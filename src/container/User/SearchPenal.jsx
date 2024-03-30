import React, { useState, useEffect } from "react";
import axios from "axios";
import FreindList from "./FreindList";
import Confirm from "./Confirm";
import { Input } from "antd";
import "../../layout/web.css";
import { ModalForm } from "../../Style/Style";
import _, { get, lowerCase } from "lodash";
import { Grid, useMediaQuery } from "@mui/material";
import UserListCard from "../../component/user-list-card";
import { useSocket } from "../../context/SocketProvider";

const ListLogs = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const socket = useSocket();
  const [roww, setroww] = useState([]);
  const [value, setValue] = useState("");

  localStorage.setItem("current", "Friends");
  const applyFilter = (e, data) => {
    if (e) {
      const filteredData = data.filter(
        (entry) =>
          lowerCase(entry.name).includes(lowerCase(e)) ||
          lowerCase(entry.uname).includes(lowerCase(e)) ||
          lowerCase(entry.mno).includes(lowerCase(e))
      );
      setroww(filteredData);
    } else {
      setroww(data);
    }
  };
  const getAllLogs = () => {
    axios
      .post(
        `http://localhost:9000/frnd`,

        {
          srch: localStorage.getItem("lid"),
        }
      )
      .then((res) => {
        console.log("value", value);
        applyFilter(value, get(res, "data", []));
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  useEffect(() => {
    getAllLogs();
    socket.on("recieve_request", () => getAllLogs());
    return () => {
      socket.off("recieve_request", () => getAllLogs());
    };
  }, []);

  return (
    <div style={{}}>
      <Grid container>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <div
            className={isSmallScreen ? "" : "scrollbar"}
            id="style-1"
            style={{
              background: "transparent",
              margin: 0,
              maxWidth: "calc(100vw - 5px)",
              maxHeight: "calc(100vh - 70px)",
              padding: 0,
            }}
          >
            <Grid
              item
              lg={12}
              sx={{
                px: "10px",
              }}
            >
              <Grid container>
                <Confirm />
              </Grid>
              <Grid container>
                <FreindList />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          sm={6}
          xs={12}
          sx={{
            maxHeight: isSmallScreen ? "" : "calc(100vh - 70px)",
            overflow: isSmallScreen ? "" : "scroll",
            p: "10px",
          }}
        >
          <ModalForm
            style={{
              height: "auto",
              padding: "24px 40px",
              margin: "10px 0",
            }}
          >
            <div>
              <header>
                <h1> Search User </h1>
              </header>
            </div>
            <div>
              <Input.Search
                placeholder="Input search text"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  applyFilter(e.target.value, roww);
                }}
              />
              <UserListCard data={roww} />
            </div>
          </ModalForm>
        </Grid>
      </Grid>
    </div>
  );
};
export default ListLogs;
