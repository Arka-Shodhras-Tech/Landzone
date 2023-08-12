import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Footer, Navbar } from "./nav&foot&contact&about/navbar";
const Login=()=>
{
   
    if(localStorage.gmail!=='')
    {
        alert("Welcome Please Login");
        localStorage.name = '';
        localStorage.gmail = '';
        localStorage.adminmail='';
    }
    useEffect(()=>
    {
        const date=new Date();
        let value;
        const name="Quntam";
        try
       {
        const responce=axios.get("http://localhost:8000/currentland/"+name)
        if (responce.data.Date !== date.toDateString()) {
            value = parseFloat(responce.data.Value) + 1;
            const responce2=axios.post("http://localhost:8000/insertcurland/"+name+"/"+date.toDateString()+"/"+value)
            if (responce2.data) {
                localStorage.currentland=responce2.data.Value;
            }
        }
        else {
            localStorage.currentland=responce.data.Value;
        }
       }
       catch(e)
       {
        console.log(e);
       }
    })
    return(
        <>
        <Navbar/>
        <div className="home">
            <h1 className="homewel">Welcome</h1>
            <div className="homeicon">
            <Link to='/adminlogin'>
            <img src={"adminlogo.png"} width={'85px'} alt="admin_logo"></img>
            </Link>
            <Link to='/userlogin'>
            <img src={"userlogin.svg"} width={'55px'} alt="user_logo"></img>
            </Link>
            </div>
           <div className="homeicon">
           <Link to='/adminlogin' className="homeiconames">Admin</Link>
            <Link to='/userlogin' className="homeiconames">User</Link>
           </div>
        </div>
        <Footer/>
        </>
    )
}
export default Login;