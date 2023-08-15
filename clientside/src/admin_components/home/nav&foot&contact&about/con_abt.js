import React from "react";
import { Footer, Navbar } from "./navbar";
export const About=()=>
{
    return(
        <>
        <Navbar/>
        <div className="home">
        <div className="homename">
               <b> Quntam2Land About</b>
            </div>
        </div>
        <Footer/>
        </>
    )
}


export const Contact=()=>
{
    return(
        <>
        <Navbar/>
        <div className="home">
        <div className="homename">
               <b> Quntam2Land Contact</b>
            </div>
        </div>
        <Footer/>
        </>
    )
}