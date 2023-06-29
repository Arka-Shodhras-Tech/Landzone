import React from "react";
import { Footer, Navbar } from "../../navfoot/navbar";
import { Link } from "react-router-dom";
import { Comp } from "../../company/company";
export const Landmanage=()=>
{
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>
                    <div>
                    <div className="land">
                        <Link className="landitem">Enter Land project data</Link>
                        <Link className="landitem">change Land project data</Link>
                        <Link className="landitem">view/show Land entered data</Link>
                        <Link className="landitem">show Land total value</Link>
                    </div> 
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
