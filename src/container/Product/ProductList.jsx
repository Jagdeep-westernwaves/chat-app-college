import React from 'react';
import Cards from './Cards';
import Tdata from '../../component/adata';
import {Space } from 'antd';


    

const ProductList = () => {
    return (
        <>

           
            <div>
                <Space className="outerdiv">
                   
                    {Tdata.map((val)=>{
    

    return (

        <Cards
            key={val.id}
            id={val.id}
            img={val.pimg}
            pname={val.name}
            pcat={val.cat}

        />

    );
    })}
                   
                </Space>
            </div>
        </>
    )
}

export default ProductList;
