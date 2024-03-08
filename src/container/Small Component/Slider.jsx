import React, { useState,useEffect } from 'react';
import { Carousel } from 'antd';
import axios from "axios";

const Slider = () => {
 const [item, setItem]=useState([]);


    useEffect(() => {
        async function getData(){
            const res = await axios.get(`https://picsum.photos/v2/list`);
            console.log(res.data);
            setItem(res.data);
        }
        getData();
       
    } );
    return (
        <>
            <Carousel autoplay>{
                
                item.map((item) => {
                    const contentStyle = {
                        height: '600px',
                        color: '#fff',
                        position: "cover",
                        overflow: 'hidden',
                        boxshadow: '-1px 2px 10px 2px rgba(0,0,0,0.5)',
                        lineHeight: '160px',
                        textAlign: 'center',
                        backgroundImage: `url(${item.download_url})`,
                        backgroundSize: 'cover',
                    };



                    return (<div>
                        <h3 style={contentStyle}>{item.author}</h3>
                    </div>)
                }





                )
            }

            </Carousel>
        </>
    )
}

export default Slider;
