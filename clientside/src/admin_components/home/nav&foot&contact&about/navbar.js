import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Navbar=()=>
{
    const [user,suser]=useState('');
    const Logout=()=>
    {
        suser(null)
    }
    return(
        <nav>
            {suser(localStorage.gmail)}
            <div className="navbar">
                <Link to='/' className="navitem">Home</Link>
                <Link to='/about' className="navitem">About</Link>
                <Link to='/contact' className="navitem">Contact Us</Link>
                {
                    user==null?<Link to='/login' className="navitem">Login</Link>:<Link to='/login' onClick={Logout} className="navitem">Log out</Link>
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