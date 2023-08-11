import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "./nav&foot&contact&about/navbar";
const Login=()=>
{
    if(localStorage.gmail!=='')
    {
        alert("logouted");
        localStorage.name = '';
        localStorage.gmail = '';
        localStorage.adminmail='';
    }
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