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
