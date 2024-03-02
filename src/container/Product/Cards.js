import React from 'react';
import { Card } from 'antd';
import '../../layout/web.css';
import { NavLink } from 'react-router-dom';




const Cards = (props) => {

    return (
        <>
            <NavLink to={`/product/${props.id}`}>
                <Card
                    className="main"
                    hoverable
                    style={{ width: 260 }}
                    cover={<img alt="example" src={props.img} />}
                >
                    <div>
                        <span>Product Name:</span> <span>{props.pname}</span>
                    </div>
                    <div>
                        <span>Product Category:</span> <span>{props.pcat}</span>
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

export default Cards;