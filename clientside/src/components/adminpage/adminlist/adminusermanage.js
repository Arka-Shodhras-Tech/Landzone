import React from "react";
import { Footer, Navbar } from "../../navfoot/navbar";
import { Comp } from "../../company/company";
export const Adminusermanage=()=>
{
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <Comp/>
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
