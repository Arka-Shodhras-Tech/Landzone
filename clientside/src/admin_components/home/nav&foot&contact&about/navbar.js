import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Navbar=()=>
{
    const [prof,sprof]=useState([]);
    const Logout=()=>
    {
        localStorage.mainadmin='';
        localStorage.name='';
        localStorage.adminmail='';
    }
    const Profile=async()=>
    {
        const responce1=await axios.get("https://landzone-server.onrender.com/check/"+localStorage.adminmail)
        if(responce1.data)
        {
            sprof(responce1.data);
            document.getElementById('profiledis').style.display="block";
        }
    }
    const Disprofile=()=>
    {
        document.getElementById('profiledis').style.display="none";
    }
    return(
        <nav>
            <div className="navbar" onClick={Disprofile}>
                <Link to='/home' className="navitem">Home</Link>
                <Link to={"/adminpage"} className="navitem">Menu</Link>
                {
                     localStorage.adminmail===''?<Link to='/' className="navitem">Login</Link>:<Link onClick={Profile} className="navitem" style={{color:'blue'}}><img src="user.svg" width={"30px"}/>{localStorage.name}</Link>
                }
                <Link to='/about' className="navitem">About</Link>
                <Link to='/contact' className="navitem">Contact Us</Link>
            </div>

            <div className="profile" onClick={Disprofile} id="profiledis">
                <tr>
                    <td><b>Name</b></td><td>{prof.Name}</td>
                </tr>
                <tr>
                    <td><b>Gmail</b></td><td>{prof.Gmail}</td>
                </tr>
                <tr>
                    <td><b>Phone number</b></td><td>{prof.Phone_Number}</td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <Link to='/' className="profileLink"  onClick={Logout}>Log Out</Link>
                    </td>
                </tr>
            </div>
        </nav>
    )
}

export const Footer=()=>
{
    return(
        <footer>
            <div>
                <p>Thank you</p>
            </div>
        </footer>
    )
}