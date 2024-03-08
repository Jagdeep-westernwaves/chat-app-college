import React from "react";
import {useParams} from'react-router-dom';
import Tdata from '../../component/adata';
import Cards from './Cards';
import Categorylist from './Categorylist';

import { Space} from 'antd';
import '../../layout/web.css';


const ncard =(val)=>{
    

    return (

        <Cards
            key={val.id}
            id={val.id}
            img={val.pimg}
            pname={val.name}
            pcat={val.cat}

        />

    );
    }

const CatProcuct = () => {
    const {Catname} =useParams();


    const result = Tdata.filter(item => item.cat=== Catname  );
        
    


    return (
        <>
        <Categorylist/>
       <div>
                <Space className="outerdiv">
                   
                    {result.map(ncard)}
                   
                </Space>
            </div>
       
            
     </>
    );
}
export default CatProcuct;