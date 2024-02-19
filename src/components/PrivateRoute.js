import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function PrivateRoute({isLoggedIn, children}) { //children -> Dashboard
    
    const navigate = useNavigate;
    if(isLoggedIn){
        console.log(children)
        return children;
    }
    else{
        navigate("/login")
    }
    return (
    <div>PrivateRoute</div>
    )
}
