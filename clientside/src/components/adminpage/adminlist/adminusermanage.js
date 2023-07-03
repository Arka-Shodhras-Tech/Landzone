import React from "react";
import { Link } from "react-router-dom";
import { Comp } from "../../company/company";
import { Footer, Navbar } from "../../navfoot/navbar";
export const Adminusermanage=()=>
{
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <aside>
                <Comp/>
                <Link to='/adminusermanage' className="asidebtn" style={{marginTop:'42.2vh',backgroundColor:'lightblue'}}><b>Admin User Management</b></Link>
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
