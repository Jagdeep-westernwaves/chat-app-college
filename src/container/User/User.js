import React,{useState} from 'react';
import {useParams} from'react-router-dom';
const User = () => {
    const {fname} =useParams();
    const [user,setUser]=useState(fname);
    
    
    return (
        <>
            <h1>Hello {user},Welcome to your User Page</h1>
        </>
    )
}
export default User;
