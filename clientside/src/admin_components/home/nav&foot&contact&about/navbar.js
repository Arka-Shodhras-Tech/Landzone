import React from "react";
import { Link } from "react-router-dom";
export const Navbar=()=>
{
    return(
        <nav>
            <div className="navbar">
                <Link to='/' className="navitem">Home</Link>
                <Link to='/about' className="navitem">About</Link>
                <Link to='/contact' className="navitem">Contact Us</Link>
                <Link to='/login' className="navitem">Login</Link>
            </div>
        </nav>
    )
}

export const Navbar1=()=>
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
                <Link to='/' className="navitem">Home</Link>
                <Link to='/about' className="navitem">About</Link>
                <Link to='/contact' className="navitem">Contact Us</Link>
                <Link to='/profile' className="navitem" style={{color:'blue'}}>{localStorage.name}</Link>
                <Link to='/' className="navitem" onClick={Logout}>Log Out</Link>
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