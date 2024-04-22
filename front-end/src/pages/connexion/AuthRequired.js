import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired(){
    // const token = localStorage("token")
    // if(!token){
    //     return <Redirect to="/connexion" />
    // }
    // return <Outlet/>
    const isLoggedIn= true;
    if(!isLoggedIn){
     return <Navigate to="/connexion" />;
    }
 return <Outlet/>
}