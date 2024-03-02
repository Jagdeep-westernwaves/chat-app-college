import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Calendar, Badge, Button, Row, Avatar, Upload, message, Input, Col, Modal, Form, Progress } from 'antd';
import moment from 'moment';
import axios from 'axios';

const Calander = () => {
  const [selectedValue, setselectedValue] = useState(moment('2021-05-25'));
  const [value, setValue] = useState(moment('2017-01-25'));
  const [userdetail, setUserdetail] = useState([]);
  const [userdetails, setUserdetails] = useState([]);
  const [visible, setVisible] = useState(false);
  const [modaldata, setModaldata] = useState([]);
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  async function getData() {
    const res = await axios.get(`http://localhost:9000/`);

    setUserdetail(res.data);
  }

  getData();

  const onFinish = (values) => {
    axios.post(`http://localhost:9000/event`,

      {
        "uid": sessionStorage.getItem("demo"),
        "edate": values.edate,
        "remarks": values.remarks,
        "name": values.name,
        "mno": values.mno

      }
    )
      .then(res => {

        setUserdetail(res);

      });

    window.location.reload(false);
  }


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const reset = () => {
    setUserdetail(['']);
    console.log(userdetail);
    setVisible(false);
  }

  const onSelect = value => {
    axios.post(`http://localhost:9000/date`,

      {
         "edate": value.format('YYYY-MM-DD')
      }
    )
      .then(res => {

        
        console.log(res);

      });
    console.log(value.format('YYYY-MM-DD'));
    setVisible(true);
    setselectedValue(value.format('YYYY-MM-DD'))
  };

  const onPanelChange = values => {

    setValue(values);

  };
  function monthCellRender(value) {
    const num = getMonthData(value);

    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>{`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}</span>
      </div>
    ) : null;
  }

  const popset = (item) => {
    setModaldata(item);
    setVisible(true);
  }
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {
          listData.map(item => (

            <>
              <div>{item.name}</div>
              <div>{item.content}</div>
              <Button className='form-button' onClick={() => popset(item)}>
                view
                            </Button>
            </>

          ))}
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function getListData(value) {
    let listData;
    let data;
    userdetail.map((item) => {

      data = item.Datem


      data = data - 1;


      if (value.year() == item.Datey) {
        if (value.month() == data) {
          if (value.date() == item.Dated) {
            listData = [
              { createtym: item.createtym, name: item.name, content: item.mno, remarks: item.remarks }

            ];
          }
        }
      }
    })

    return listData || [];

  }
  return (<>
    <Calendar onSelect={onSelect} onPanelChange={onPanelChange} dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    <Modal
      title="Update Profile"
      centered
      visible={visible}
      onOk={() => reset()}
      onCancel={() => reset()}
      width={1000}
      destroyOnClose={true}
    ><Form
      {...layout}
      name="basic"
      initialValues={{
        name: modaldata.name,
        mno: modaldata.content,
        remarks: modaldata.remarks,
        edate: selectedValue
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="edate"
          name="edate"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="mno"
          name="mno"
          rules={[{ required: true, message: 'Please input your mno!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="remarks"
          name="remarks"
          rules={[{ required: true, message: 'Please input your remarks!' }]}
        >
          <Input />
        </Form.Item>



        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
      </Form>

    </Modal>
  </>)
}
export default Calander;