import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Tag, Avatar, Button, Table, Input } from "antd";
import { ProfileForm } from "../../Style/Style";
import { lowerCase } from "lodash";
import { useSocket } from "../../context/SocketProvider";
import UserListCard from "../../component/user-list-card";
const FreindList = () => {
  const socket = useSocket();
  const [filteredUser, setFilteredUser] = useState([]);
  const [value, setValue] = useState("");
  const [dataSource, setDataSource] = useState([]);

  const getAllLogs = () => {
    axios
      .post(
        `http://localhost:9000/addedfrnd`,

        {
          srch: localStorage.getItem("lid"),
        }
      )
      .then((res) => {
        setFilteredUser(res.data);
      });
  };
  useEffect(() => {
    getAllLogs();
    // fetchData();
    socket.on("recieve_request", () => getAllLogs());
    return () => {
      socket.off("recieve_request", () => getAllLogs());
    };
  }, []);

  useEffect(() => {
    setDataSource(filteredUser);
  }, [filteredUser]);
  return (
    <>
      {dataSource.length > 0 ? (
        <ProfileForm>
          <div>
            <header>
              <h1>Freinds </h1>
            </header>
          </div>
          <div>
            <Input.Search
              placeholder="Input search text"
              value={value}
              onChange={(e) => {
                const currValue = e.target.value;

                setValue(currValue);

                const filteredData = filteredUser.filter(
                  (entry) =>
                    lowerCase(entry.name).includes(lowerCase(currValue)) ||
                    lowerCase(entry.uname).includes(lowerCase(currValue)) ||
                    lowerCase(entry.mno).includes(lowerCase(currValue))
                );
                setDataSource(filteredData);
              }}
              allowClear
            />
            <UserListCard data={dataSource} req={3} />
          </div>
        </ProfileForm>
      ) : null}
    </>
  );
};
export default FreindList;
