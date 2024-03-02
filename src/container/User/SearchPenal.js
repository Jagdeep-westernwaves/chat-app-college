import React, { useState, useEffect } from "react";
import axios from "axios";
import FreindList from "./FreindList";

import { NavLink } from "react-router-dom";
import Confirm from "./Confirm";
import {
  Row,
  Col,
  Tag,
  Avatar,
  Button,
  Table,
  Input,
  message,
  Image,
} from "antd";
import "../../layout/web.css";
import { ModalForm } from "../../Style/Style";
import { get, lowerCase, size } from "lodash";
const ListLogs = () => {
  const [roww, setroww] = useState([]);
  const [test, settest] = useState(0);
  const [value, setValue] = useState("");

  localStorage.setItem("current", "Friends");
  const applyFilter = (e, data) => {
    const filteredData = data.filter(
      (entry) =>
        lowerCase(entry.name).includes(lowerCase(e)) ||
        lowerCase(entry.uname).includes(lowerCase(e)) ||
        lowerCase(entry.mno).includes(lowerCase(e))
    );
    console.log("✌️filteredData --->", filteredData);
    setroww(e !== "" ? filteredData : data);
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

  const confirmuser = async (valuess) => {
    console.log(valuess);

    axios
      .post(
        `http://localhost:9000/confirmfrnd`,

        {
          fid: localStorage.getItem("lid"),
          lid: valuess.id,
        }
      )
      .then((res) => {
        console.log("removed");
      });

    settest(test + 1);
  };

  const adduser = (valuess) => {
    console.log(valuess);

    axios
      .post(
        `http://localhost:9000/addfrnd`,

        {
          fid: valuess.id,
          lid: localStorage.getItem("lid"),
        }
      )
      .then((res) => {
        console.log("req sended");
      });

    settest(test + 1);
    // window.location.reload(false);
  };

  const removeuser = (valuess) => {
    console.log(valuess);

    axios
      .post(
        `http://localhost:9000/removereq`,

        {
          fid: valuess.id,
          lid: localStorage.getItem("lid"),
        }
      )
      .then((res) => {
        console.log("removed");
      });
    settest(test + 1);
    // window.location.reload(false);
  };

  const dataLog = [];

  const [dataSource, setDataSource] = useState(dataLog);

  useEffect(() => {
    getAllLogs();

    const interval = setInterval(() => {
      getAllLogs();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    roww.map((items) => {
      if (items.req === 1) {
        dataLog.push({
          key: items.id,
          name: items.name,
          uname: items.uname,
          mno: items.mno,
          Profile: (
            <Avatar
              size={50}
              shape="circle"
              src={`http://localhost:9000/uploads/${items.imgname}`}
            />
          ),
          duname: (
            <div>
              {items.name} <br />
              <Tag color="blue">{items.uname}</Tag>
            </div>
          ),
          btn: (
            <>
              <Button onClick={() => removeuser(items)} danger>
                Cancel Request
              </Button>
            </>
          ),
        });
      } else if (items.req === 2) {
        dataLog.push({
          key: items.id,
          name: items.name,
          uname: items.uname,
          mno: items.mno,
          Profile: (
            <Avatar
              size={50}
              shape="circle"
              src={`http://localhost:9000/uploads/${items.imgname}`}
            />
          ),
          duname: (
            <div>
              {items.name} <br />
              <Tag color="blue">{items.uname}</Tag>
            </div>
          ),
          btn: (
            <>
              <Button onClick={() => confirmuser(items)}>Confirm</Button>
            </>
          ),
        });
      } else if (items.req === 0) {
        dataLog.push({
          key: items.id,
          name: items.name,
          uname: items.uname,
          mno: items.mno,
          Profile: (
            <Avatar
              size={50}
              shape="circle"
              src={`http://localhost:9000/uploads/${items.imgname}`}
            />
          ),
          duname: (
            <div>
              {items.name} <br />
              <Tag color="blue">{items.uname}</Tag>
            </div>
          ),
          btn: (
            <>
              {" "}
              <Button onClick={() => adduser(items)}>Add+</Button>
            </>
          ),
        });
      } else {
        dataLog.push({
          key: items.id,
          name: items.name,
          uname: items.uname,
          mno: items.mno,
          Profile: (
            <Avatar
              size={50}
              shape="circle"
              src={`http://localhost:9000/uploads/${items.imgname}`}
            />
          ),
          duname: (
            <div>
              {items.name} <br />
              <Tag color="blue">{items.uname}</Tag>
            </div>
          ),
          btn: (
            <>
              <NavLink to={`/Uprofile/${items.uname}`}>
                <Button success>View Profile</Button>
              </NavLink>
            </>
          ),
        });
      }
    });
    setDataSource(dataLog);
  }, [roww]);

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
    <div style={{ marginTop: 10 }}>
      <Row>
        <Col span={8}>
          <div className="scrollbar" id="style-1">
            <Col span={23}>
              <Row>
                <Confirm />
              </Row>
              <Row>
                <FreindList />
              </Row>
            </Col>
          </div>
        </Col>
        <Col span={15}>
          <ModalForm>
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
              <Table
                bordered
                columns={columns}
                dataSource={dataSource}
                size="small"
                pagination={false}
              />
            </div>
          </ModalForm>
        </Col>
      </Row>
    </div>
  );
};
export default ListLogs;
