import React from 'react';
import CategoryCard from './CategoryCard';
import {CatData} from '../../component/adata';
import {Space } from 'antd';

const ncard =(val)=>{
    

            return (
        
                <CategoryCard
                    key={val.id}
                    id={val.id}
                    img={val.img}
                    pcat={val.pcat}

                />
        
            );
            }
    

const Categorylist = () => {

    
    return (
        <>
<div >

            <div>
                <Space className="outerdiv">
                   
                    {CatData.map(ncard)}
                   
                </Space>
            </div></div>
        </>
    )
}

export default Categorylist;
