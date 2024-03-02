import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Divider, Checkbox, Input, Button } from 'antd';
import Tdata from "../../component/adata";
const style = { background: '#4a4a4a', padding: '8px 13px', color: 'white' };
const style2 = { margin: '0px 10px', padding: '2px 0', color: 'white' };
const style1 = { margin: '0px 10px', background: '#666666', padding: '2px 23px', color: 'white' };
function Student() {
  const [studentState, setStudentState] = useState([]);
  const [tdata, settdata] = useState(Tdata);
  const [demo, setdemo] = useState([]);
  const [demo1, setdemo1] = useState([]);
  const [demos, setdemos] = useState([]);
  useEffect(() => {

    let tdata = Tdata;
    settdata(
      tdata.map(e => {

        
          return {
            select: e.select,
            id: e.id,
            name: e.name,
            email: e.email,
          };
        })
      
    );
  }, []);

  useEffect(() => {
    let studentState = [
      {
        id: '1',
        name: 'Demo', email: 'demo@demo.com', education: [
          { Qualification: 'BCA', year: '2021' },
          { Qualification: 'Class 12', year: '2018' },
        ]
      }, {
        id: '2',
        name: 'Demo1', email: 'demo1@demo.com', education: [
          { Qualification: 'BCA', year: '2021' },
          { Qualification: 'Class 12', year: '2018' },
        ]
      },
      {
        id: '3',
        name: 'Demo2', email: 'demo2@demo.com', education: [
          { Qualification: 'BCA', year: '2021' },
          { Qualification: 'Class 12', year: '2018' },
        ]
      }
    ]

    setStudentState(
      studentState.map(d => {
        return {
          select: false,
          id: d.id,
          name: d.name,
          email: d.email,
        };
      })
    );
  }, []);

const nclkpdate =()=> {
  
  const result = tdata.filter(item => item.select=== true  );
 
        setdemo1(
        result.map((item)=>

          item.name

        ) 
         );

  
}
  return (
    <><div>
      <div style={style2}>

        <Row style={style}>
          <Col className="gutter-row" span={2}>
            <div style={style}>
              <Checkbox
                onChange={e => {
                  let checked = e.target.checked;
                  setStudentState(
                    studentState.map(d => {
                      d.select = checked;

                      return d;
                    })
                  );
                }}
              ></Checkbox>
               Select</div> </Col>
          <Col className="gutter-row" span={8}>
            <div style={style}>Name</div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div style={style}>Email</div>
          </Col>
        </Row></div>



      <div style={style1}>
        {
          studentState.map((item) =>
<>
            <Row >

              <Col className="gutter-row" span={2}>
                <div ><Checkbox
                  onChange={event => {
                    let checked = event.target.checked;
                    setStudentState(
                      studentState.map(data => {
                        if (item.id === data.id) {
                          data.select = checked;
                          setdemos(demos + ' ' + data.name);
                        }
                        return data;
                      })
                    );
                  }}
                  checked={item.select}
                ></Checkbox></div>
              </Col>
              <Divider type="vertical" />
              <Col className="gutter-row" span={8}>
                <div >{item.name}</div>
              </Col><Divider type="vertical" />
              <Col className="gutter-row" span={8}>
                <div >{item.email}</div>
              </Col><Divider type="vertical" />

            </Row>
            
            
            
       </>     ) }</div>
      
      {demo}
    </div>






















      <Divider />

      <div>
      <div style={style2}>

        <Row style={style}>
          <Col className="gutter-row" span={2}>
            <div style={style}>
              <Checkbox
                onChange={e => {
                  let checked = e.target.checked;
                  settdata(
                    tdata.map(d => {
                      d.select = checked;

                      return d;
                    })
                    
                  );
                }}
              ></Checkbox>
               Select</div> </Col>
          <Col className="gutter-row" span={8}>
            <div style={style}>Name</div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div style={style}>Email</div>
          </Col>
        </Row></div>



      <div style={style1}>
        {
          Tdata.map((item) =>

            <Row >

              <Col className="gutter-row" span={2}>
                <div ><Checkbox
                  onChange={event => {
                    let checked = event.target.checked;
                    settdata(
                      tdata.map(data => {
                        if (item.id === data.id) {
                          data.select = checked;
                          

                        }
                        return data;
                      })
                    );
                  }}
                  checked={item.select}
                ></Checkbox></div>
              </Col>
              <Divider type="vertical" />
              <Col className="gutter-row" span={8}>
                <div >{item.name}</div>
              </Col><Divider type="vertical" />
              <Col className="gutter-row" span={8}>
                <div >{item.cat}</div>
              </Col><Divider type="vertical" />

            </Row>)}</div>
            <Button type='primary' onClick={nclkpdate}>Click Here</Button>
      {demo1}
    </div>



        </>
  );
}

export default Student;