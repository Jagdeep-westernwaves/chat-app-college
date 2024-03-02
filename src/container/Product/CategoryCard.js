import React from 'react';
import {  Card } from 'antd';
import '../../layout/web.css';
import { NavLink } from 'react-router-dom';




const CategoryCard= (props) => {

    return (
        <> 
          <NavLink to= {`/CatProduct/${props.pcat}`}>
        <Card
        className="main1"
            hoverable
            style={{ width: 100}}
          
        >
           <div> 
           <img alt="example" style={{ width: 100,height:100}} src={props.img} />
           </div>
           <div> 
            <span>{props.pcat}</span>
           </div>
           {/* <div> 
            <span>Student Education:</span> <span>{props.education}</span>
           </div> */}
         
           <div> 
          
           </div>
        </Card></NavLink>
        </>
    );
}

export default CategoryCard;