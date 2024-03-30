import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tag, Avatar, Button, Table, Input } from "antd";
import { ProfileForm } from "../../Style/Style";
import { lowerCase } from "lodash";
import { useSocket } from "../../context/SocketProvider";
import UserListCard from "../../component/user-list-card";
const Confirm = () => {
  const [filteredUser, setFilteredUser] = useState([]);
  const [value, setValue] = useState("");
  const socket = useSocket();
  const [test, settest] = useState(0);

  const getAllLogs = async () => {
    axios
      .post(
        `http://localhost:9000/confirm`,

        {
          srch: localStorage.getItem("lid"),
        }
      )
      .then((res) => {
        setFilteredUser(res.data);
      });
  };

  const removeuser = async (valuess) => {
    axios
      .post(
        `http://localhost:9000/confirmfrnd`,

        {
          lid: valuess.id,
          fid: localStorage.getItem("lid"),
        }
      )
      .then((res) => {
        getAllLogs();
      })
      .catch((err) => {
        console.log("✌️err --->", err);
      });
  };

  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getAllLogs();
    socket.on("recieve_request", () => getAllLogs());
    return () => {
      socket.off("recieve_request", () => getAllLogs());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setDataSource(filteredUser);
  }, [filteredUser]);

  const columns = [
    {
      title: "Profile",
      dataIndex: "Profile",
      key: "Profile",
      width: 60,
    },
    {
      title: "User",
      dataIndex: "duname",
      key: "duname",
    },
    { User: "", dataIndex: "btn", key: "btn" },
  ];
  return (
    <>
      {dataSource.length > 0 ? (
        <ProfileForm>
          <div>
            <header>
              <h1> Pending Freind Request </h1>
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
                console.log("filtered Data: ", filteredData);
                setDataSource(filteredData);
              }}
              allowClear
            />
            <UserListCard data={dataSource} req={2} />
          </div>
        </ProfileForm>
      ) : null}
    </>
  );
};
export default Confirm;
