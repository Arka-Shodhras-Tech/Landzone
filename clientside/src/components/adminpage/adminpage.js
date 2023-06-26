import React, { useState } from "react";
import { Footer, Navbar } from "../navfoot/navbar";
import { Link } from "react-router-dom";
import { Dashboard } from "./adminlist/dashboard";
import { Adminlogin } from "../login/login";
import { UserRegister } from "../register/register";
export const Adminpage=()=>
{
    const [d1,sd1]=useState([])
    const [d2,sd2]=useState([])
    const [d3,sd3]=useState([])
    const [d4,sd4]=useState([])
    const [d5,sd5]=useState([])
    const Db=()=>
    {
        sd1("db")
    }
    const Um=()=>
    {
        sd2("um")
    }
    const Aum=()=>
    {
        sd3('aum')
    }
    const Pm=()=>
    {
        sd4('pm')
    }
    const Urm=()=>
    {
        sd5('urm')
    }
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <aside>
                    {/* <Link to='/dashboard' className="asidebtn"><b>Dashboard</b></Link>
                    <Link to='/usermanagement' className="asidebtn"><b>User Management</b></Link>
                    <Link to='/adminusermanagement' className="asidebtn"><b>Admin User Management</b></Link>
                    <Link to='/projectmanagement' className="asidebtn"><b>Project Management</b></Link>
                    <Link to='/unitrequestmanagement' className="asidebtn"><b>Unit Request Management</b></Link> */}
                    <button className="asidebtn" onClick={Db}><b>Dashboard</b></button>
                    <button className="asidebtn" onClick={Um}><b>User Management</b></button>
                    <button className="asidebtn" onClick={Aum}><b>Admin User Management</b></button>
                    <button className="asidebtn" onClick={Pm}><b>Project Management</b></button>
                    <button className="asidebtn" onClick={Urm}><b>Unit Request Management</b></button>
                </aside>
                <section>
                    {/* <Dashboard/> */}
                    {
                        d1 ==='db'?<Dashboard/>:<UserRegister/>&&
                        d2 ==='um'?<Adminlogin/>:<UserRegister/>
                    }
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}