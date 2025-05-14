import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const token=localStorage.getItem('logintoken');
    let verifyUser=false;
    if(token){
        verifyUser=true;
    }
  return (
    verifyUser?<Outlet/>:<Navigate to={'/'}/> //outlet: to load /router outlet, routes defined in app.jsx
    )
}

export default PrivateRoutes