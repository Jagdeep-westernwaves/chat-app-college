import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Tag, Avatar, Button, Table, Input } from "antd";
import { ProfileForm } from "../../Style/Style";
import { lowerCase } from "lodash";
const FreindList = () => {
  const [filteredUser, setFilteredUser] = useState([]);
  const [value, setValue] = useState("");
  const [test, setTest] = useState(0);
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
        setFilteredUser(
          res.data?.map((item) => {
            return {
              key: item.id,
              name: item.name,
              uname: item.uname,
              mno: item.mno,
              Profile: (
                <Avatar
                  size={50}
                  shape="circle"
                  src={`http://localhost:9000/Uploads/${item.imgname}`}
                />
              ),
              duname: (
                <div>
                  {item.name} <br />
                  <Tag color="blue">{item.uname}</Tag>
                </div>
              ),
              btn: (
                <>
                  {" "}
                  <NavLink to={`/Uprofile/${item.uname}`}>
                    <Button
                      onClick={() => {
                        setTest(test + 1);
                      }}
                    >
                      View Profile
                    </Button>
                  </NavLink>
                </>
              ),
            };
          })
        );
      });
  };
  useEffect(() => {
    getAllLogs();
    // fetchData();
    const interval = setInterval(() => {
      getAllLogs();
    }, 10000);

    return () => clearInterval(interval);
  }, [test]);

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
                console.log("filtered Data: ", filteredData);
                setDataSource(filteredData);
              }}
              allowClear
            />
            <Table
              bordered
              onRow={(i) => ({
                onClick: (e) => {
                  // history.push(
                  //   `/admin/viewLog/${i.id}/${i.Profile.props.children}`
                  // );
                },
              })}
              columns={columns}
              dataSource={dataSource}
              size="small"
              pagination={false}
            />
          </div>
        </ProfileForm>
      ) : null}
    </>
  );
};
export default FreindList;
