import React, { useState } from "react";
import MData from "../component/json1";
import PData from "../component/json2";
import { Table } from "antd";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: "12%"
    },
    {
        title: "Address",
        dataIndex: "address",
        width: "30%",
        key: "address"
    }
];

const data = [];






const findChildsParent = (data) => {
    return data.reduce((acc, cur) => {
        if (cur.children) {
            cur.children.forEach((child) => {
                acc[child.key] = cur.key;
            });
        }
        return acc;
    }, {});
};
const childToParentMap = findChildsParent(data);
console.log("childToParentMap", childToParentMap);




const TreeData = () => {

    const [tdata, settdata] = useState(PData);
    const [js1, setjs1] = useState(MData);

    js1.map((jsdata, key) => {

        {


            const result = tdata.filter(item => { return item.mid === jsdata.id });



            return (<>{
                data.push({
                    key: key + 1,
                    name: jsdata.Name,
                    age: 60,
                    address: "New York No. 1 Lake Park",
                    childern: result.map((value, key) => {

                        const { mid, permission } = value;

                        return (
                            {
                                key: key+1,
                                name: permission,
                                age: 60,
                            }
                        )
                    })



                })

            }

            </>)
        }

    })





    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    // rowSelection objects indicates the need for row selection
    const rowSelection = {
        onSelect: (record, selected, selectedRows) => {
            if (selected && record.children) {
                setSelectedRowKeys((prev) =>
                    Array.from(
                        new Set([
                            ...prev,
                            record.key,
                            ...record.children.map((child) => child.key)
                        ])
                    )
                );
            } else if (!selected && record.children) {
                setSelectedRowKeys((prev) =>
                    prev.filter(
                        (key) =>
                            key !== record.key &&
                            !record.children.map((child) => child.key).includes(key)
                    )
                );
            } else if (selected) {
                setSelectedRowKeys((prev) => [...prev, record.key]);
            } else {
                if (childToParentMap[record.key]) {
                    setSelectedRowKeys((prev) =>
                        prev.filter(
                            (key) =>
                                key !== record.key && key !== childToParentMap[record.key]
                        )
                    );
                } else {
                    setSelectedRowKeys((prev) =>
                        prev.filter((key) => key !== record.key)
                    );
                }
            }
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            if (selected) {
                setSelectedRowKeys(selectedRows.map((row) => row.key));
            } else {
                setSelectedRowKeys([]);
            }
        },
        selectedRowKeys: selectedRowKeys
    };
    return (
        <Table
            columns={columns}
            rowSelection={{ ...rowSelection }}
            dataSource={data}
        />
    );
}
export default TreeData;
