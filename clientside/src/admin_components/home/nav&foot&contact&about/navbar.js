import React from "react";
import { Link } from "react-router-dom";
export const Navbar=()=>
{
    const Logout=()=>
    {
        localStorage.gmail='';
        localStorage.name='';
        localStorage.adminmail='';
    }
    return(
        <nav>
            <div className="navbar">
                <Link to='/home' className="navitem">Home</Link>
                <Link to='/about' className="navitem">About</Link>
                <Link to='/contact' className="navitem">Contact Us</Link>
                {
                     localStorage.adminmail===''?<b></b>:<Link to='/profile' className="navitem" style={{color:'blue'}}>{localStorage.name}</Link>
                }
                {
                    localStorage.adminmail===''?<Link to='/adminlogin' className="navitem">Login</Link>:<Link to='/' className="navitem" onClick={Logout}>Log Out</Link>
                }
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