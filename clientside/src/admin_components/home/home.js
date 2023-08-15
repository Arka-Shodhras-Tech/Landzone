import React from "react";
import { Footer, Navbar } from "./nav&foot&contact&about/navbar";
const Home=()=>
{
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="homename">
               <b> Quntam2Land Home</b>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Home;