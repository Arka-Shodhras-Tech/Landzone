import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../../home/nav&foot&contact&about/navbar";
import { Comp } from "../../asidebar/asidebar";
import { Payment } from "./payment/payment";
export const Unitmanage=()=>
{
    // const [pymt,spymt]=useState([]);
    const [apdata,sapdata]=useState([]);
    const [crt,scrt]=useState([]);
    const gmal=localStorage.gmail;
    const Orderlist=async()=>
    {
        document.getElementById('tansdetail').style.display="block";
    }
    const Approve=async()=>
    {
        const responce=await axios.get("https://landzone-server.onrender.com/ordercheck/"+apdata.id.$sid)
        {
            if(responce.data)
            {
                alert("Already Approved with this id");
            }
            else
            {
                const res = await axios.post("https://landzone-server.onrender.com/orderApprove/" + apdata.id.$sid)
                if (res) {
                    alert("Approve");
                }
            }
        }
    }
    useEffect(() => {
        axios.get("https://landzone-server.onrender.com/orderlist")
        .then((result2) => {
            scrt(result2.data)
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
                        <Link className="unitreqitem" onClick={Orderlist}>OrderList</Link>
                    </div>
                    <div>
                    <div className="editdis" style={{display:'none'}} id="tansdetail">
                        <table className="aufltable">
                            <tr>
                                <th>SNO</th>
                                <th>Methods</th>
                                <th>Values</th>
                            </tr>
                           {
                            crt.map((val,index)=>
                            (
                                <>
                                <tr>
                                <td style={{color:'red'}}><b>{index}</b></td>
                                </tr>
                                 <tr>
                                <td><b>orderId</b></td>
                                <td>{val.orderId}</td>
                            </tr>
                            <tr>
                                <td><b>NumberOfUnits</b></td>
                                <td>{val.numberOfUnits}</td>
                            </tr>
                            <tr>
                                <td><b>SubTotal</b></td>
                                <td>{val.subTotal}</td>
                            </tr>
                            <tr>
                                <td><b>TransactionFee</b></td>
                                <td>{val.transactionFee}</td>
                            </tr>
                            <tr>
                                <td><b>TotalAmount</b></td>
                                <td>{val.totalAmount}</td>
                            </tr>
                            <tr>
                                <td><b>PaymentMethod</b></td>
                                <td>{val.paymentMethod}</td>
                            </tr>
                            <tr>
                                <td><b>Currency</b></td>
                                <td>{val.currency}</td>
                            </tr>
                            <tr>
                                <td><b>OrderStatus</b></td>
                                <td>{val.orderStatus}</td>
                            </tr>
                            <tr>
                                <td><b>OrderCreatedDate</b></td>
                                <td>{val.orderCreatedDate.$date}</td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={Approve} onClickCapture={(e)=>{sapdata(val)}}>Approve</button>
                                </td>
                            </tr>
                            <td colSpan={4}>
                                <hr></hr>
                            </td>
                                </>
                            ))
                           }
                        </table>
                    </div>
                    {/* <div className="editdis" style={{display:'none'}} id="userdetail">
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
                    </div> */}
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
