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