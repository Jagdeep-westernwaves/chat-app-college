import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tag, Avatar, Button, Table, Input } from "antd";
import { ProfileForm } from "../../Style/Style";
import { lowerCase } from "lodash";
const Confirm = () => {
  const [filteredUser, setFilteredUser] = useState([]);
  const [value, setValue] = useState("");
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
        setFilteredUser(
          res.data?.map((user, index) => ({
            key: index,
            name: user.name,
            uname: user.uname,
            mno: user.mno,
            Profile: (
              <Avatar
                size={50}
                shape="circle"
                src={`http://localhost:9000/uploads/${user?.imgname}`}
              />
            ),
            duname: (
              <div>
                {user.name} <br />
                <Tag color="blue">{user.uname}</Tag>
              </div>
            ),
            btn: <Button onClick={() => removeuser(user)}>Confirm</Button>,
          }))
        );
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
    const interval = setInterval(() => {
      getAllLogs();
    }, 10000);

    return () => clearInterval(interval);
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
export default Confirm;
