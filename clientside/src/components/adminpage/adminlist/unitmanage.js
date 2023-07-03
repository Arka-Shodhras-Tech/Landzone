import React from "react";
import { Footer, Navbar } from "../../navfoot/navbar";
import { Comp } from "../../company/company";
import { Link } from "react-router-dom";
export const Unitmanage=()=>
{
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <aside>
                <Comp/>
                <Link to='/unitmanage' className="asidebtn" style={{marginTop:'72.4vh',backgroundColor:'lightskyblue'}}><b>Unit Request Management</b></Link>
                </aside>
                <section>
                    <div>
                            
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
