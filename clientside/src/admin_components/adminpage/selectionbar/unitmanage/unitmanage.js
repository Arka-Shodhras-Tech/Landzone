import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../../home/nav&foot&contact&about/navbar";
import { Comp } from "../../asidebar/asidebar";
import { Payment } from "./payment/payment";
export const Unitmanage=()=>
{
    const [pymt,spymt]=useState([]);
    const [crt,scrt]=useState([]);
    const gmal=localStorage.gmail;
    const Approval_pend=async()=>
    {
        document.getElementById('tansdetail').style.display="block";
        document.getElementById('userdetail').style.display="none";
    }
    const Approved=async()=>
    {
        document.getElementById('userdetail').style.display="block";
        document.getElementById('tansdetail').style.display="none";
    }
    useEffect(() => {
        axios.get("https://landzone-server.onrender.com/disableshow")
        .then((result2) => {
            scrt(result2.data)
        })
        axios.get("https://landzone-server.onrender.com/pymtretrive")
        .then((result1)=>
        {
            spymt(result1.data)
        })
    }, [])
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>
                    <div className="unitreq">
                        <Link className="unitreqitem" onClick={Approval_pend}>Approval Pending</Link>
                        <Link className="unitreqitem" onClick={Approved}>Approved</Link>
                    </div>
                    <div>
                    <div className="editdis" style={{display:'none'}} id="tansdetail"><Payment/></div>
                    <div className="editdis" style={{display:'none'}} id="userdetail">
                    <div>
                                        <table className="aufltable" style={{marginTop:'25vh'}}>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Name</th>
                                                <th>G-mail</th>
                                                <th>Phone Number</th>
                                            </tr>
                                            {
                                                crt.map((val2, index) => (
                                                  <>
                                                  {
                                                    gmal===val2.Gmail?
                                                    <>
                                                    <tr>
                                                        <td><b>{index + 1}</b></td>
                                                        <td><b>{val2.Name}</b></td>
                                                        <td><b>{val2.Gmail}</b></td>
                                                        <td><b>{val2.Phone_Number}</b></td>
                                                    </tr>
                                                   </>:<b></b>
                                                  }
                                                  </>
                                                ))
                                            }
                                            </table>
                                            <br/><br/>
                                    <table className="aufltable">
                                    <tr>
                                        <th>S.NO</th>
                                        <th>Bank Details</th>
                                        <th>Sender email</th>
                                        <th>Sender Account Number</th>
                                        <th>Amount Transfer</th>
                                        <th>Payment Refer Number</th>
                                        <th>Transfer Date and Time</th>
                                    </tr>
                                        {
                                            pymt.map((val5, index) => (
                                                <>
                                               {
                                                gmal===val5.Sender_email?
                                                <>
                                                                <tr>
                                                                    <td>{index + 1}</td>
                                                                    <td>{val5.Bank_details}</td>
                                                                    <td>{val5.Sender_email}</td>
                                                                    <td>{val5.Sender_Acc_Number}</td>
                                                                    <td>{val5.Amount_Transfered}</td>
                                                                    <td>{val5.Payment_ref_number}</td>
                                                                    <td>{val5.Transaction_date}</td>
                                                                </tr>
                                                </>:<b></b>
                                               }
                                               </>
                                            ))
                                        }
                                    </table>
                                    </div>
                    </div>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
