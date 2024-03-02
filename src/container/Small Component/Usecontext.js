import React, {useState} from 'react';
import { Table } from 'antd';
import Tdata from "../../component/adata";
import '../layout/web.css';



const Usecontext = () => {
    const [tdata, settdata] = useState(Tdata);  

    const columns = [
        {

          title: 'Name',
          dataIndex: 'name',
         
        },

        {
          title: 'Category',
          dataIndex: 'cat',
           
        },
        
        
      ];
     
      const dataSource = [];
      tdata.map((value, key) => {
    
        const { name,cat,col} = value;
        return ( dataSource.push({
          key: key + 1,
          col: col,
          name:<span >{name}</span>,
          cat:<span>{cat}</span>,
          
         
      })
     ) })

    return (
        <>
           <Table  columns={columns} dataSource={dataSource}  rowKey={record => record.id}
           rowClassName={(record, index) => record.col === true  ? 'true' :  'false'}
           />
        </>
    );
}

export default Usecontext;
        