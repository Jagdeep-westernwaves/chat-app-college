import React, { useState } from "react";
import { Table } from "antd";
import MData from "../component/json1";
import PData from "../component/json2";

const NestedCheck = () => {
  const [tdata] = useState(PData);
  const [js1] = useState(MData);

  const columns = [
    {
      title: "Name",
      dataIndex: "permission",
    },

    {
      title: "Category",
      dataIndex: "mid",
    },
  ];

  const dataSource = [];
  console.log(dataSource);
  const rowdata = {};

  return (
    <>
      {js1.map((jsdata) => {
        const result = tdata.filter((item) => {
          return item.mid === jsdata.id;
        });

        console.log(result);

        return (
          <>
            {result.map((value, key) => {
              const { permission } = value;
              dataSource.push({
                key: key + 1,
                name: <span>{permission}</span>,
              });
            })}
            <Table
              rowSelection={rowdata}
              columns={columns}
              dataSource={result}
            />
          </>
        );
      })}
    </>
  );
};

export default NestedCheck;
