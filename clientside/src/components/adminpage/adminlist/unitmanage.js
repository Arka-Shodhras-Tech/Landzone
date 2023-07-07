import React from "react";
import { Footer, Navbar } from "../../navfoot/navbar";
import { Comp } from "../../company/company";
import { Link } from "react-router-dom";
import { Payment } from "../../payment/payment";
export const Unitmanage=()=>
{
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>
                    <div>
                            <Payment/>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
