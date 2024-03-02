import React from "react";
import { useParams } from 'react-router-dom';
import Tdata from '../../component/adata';
import { Row, Col } from 'antd';
import '../../layout/web.css';
const Procuct = () => {


  
  const { pid } = useParams();
console.log({pid});

  const result = Tdata.filter(item => item.id === parseInt(pid));
  const { cat, name, pimg, pdes } = result[0];
  

  localStorage.setItem("current","Products") ;
  
  return (
    <>
      <Row>

        <Col span={12}>


          <img alt="example" style={{ width: 600, height: 500 }} src={pimg} ></img>

        </Col>
        <Col span={12}>
          <h1>{name}</h1>
          <h1>{cat}</h1>
          {
            pdes.map((e) => <>
              <h1>{e.pweight}</h1>
              <h1>{e.mgfdate}</h1>
              <h1>{e.expdate}</h1>
            </>)
          }
        </Col>
      </Row>


    </>
  );
}
export default Procuct;