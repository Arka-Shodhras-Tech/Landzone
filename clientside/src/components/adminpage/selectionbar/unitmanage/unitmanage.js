import React from "react";
import { Footer, Navbar } from "../../../navfoot/navbar";
import { Comp } from "../../asidebar/asidebar";
import { Payment } from "./payment/payment";
export const Unitmanage=()=>
{
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>
                    <div className="editdis">
                            <Payment/>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
