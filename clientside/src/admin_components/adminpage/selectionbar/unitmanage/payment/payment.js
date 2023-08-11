import React, { useRef, useState } from "react";
import axios from 'axios';
export const Payment=()=>
{
    const [bank,sbank]=useState([]);
    const [sendername,ssendername]=useState([]);
    const [senderacc,ssenderacc]=useState([]);
    const [amttrns,samttrns]=useState([]);
    const [pymt,spymt]=useState([]);
    const [transdate,stransdate]=useState([]);
    const form=useRef('');

    const Pymtdeti=async()=>
    {
        try
        {
            const responce=await axios.post("http://localhost:8000/payment/"+bank+"/"+sendername+"/"+senderacc+"/"+amttrns+"/"+pymt+"/"+transdate)
            {
                responce?alert("Successfully Entered"):alert("Please try again");
                window.location.reload(3);
            }
        }
        catch(error)
        {
            alert("Please enter all values");
        }
    }
    return(
        <>
        <table className="pymttable" id="form" >
            <tr>
                <th colSpan={2}><h2>Enter Payment details</h2></th>
            </tr>
            <tr>
                <td>
                    <label for='bank_details' ><b>Enter BankDetails/CardDetails/CryptowalletDetails</b></label>
                </td>
                <td><input id="bank_details" ref={form} type="text" placeholder="Enter details.." onChange={(e)=>sbank(e.target.value)}></input></td>
            </tr>
            <tr>
                <td>
                    <label for='sender_name'><b>Enter Sender Email</b></label>
                </td>
                <td>
                    <input id="sender_name" ref={form} type="email" placeholder="Enter sender mail.." onChange={(e)=>ssendername(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="Sender_account"><b>Enter Sender Account number</b></label>
                </td>
                <td>
                    <input id="semder_account" ref={form} type="text" placeholder="Enter acc number.." onChange={(e)=>ssenderacc(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="amount_transfer"><b>Enter Amount Transfer</b></label>
                </td>
                <td>
                    <input id="amount_transfer" ref={form} type="number" placeholder="Enter amount" onChange={(e)=>samttrns(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="payment_refernce"><b>Enter Payment reference number</b></label>
                </td>
                <td>
                    <input id="payment_refernce" ref={form} type="number" placeholder="Enter reference number.." onChange={(e)=>spymt(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="transcation_date"><b>Date</b></label>
                </td>
                <td>
                    <input id="transcation_date" ref={form} type="date" onChange={(e)=>stransdate(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                <button type="submit" style={{ margin: "2% 0% 5% 43%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }} onClick={Pymtdeti}>Submit</button>
                </td>
            </tr>
        </table>
        </>
    )
}