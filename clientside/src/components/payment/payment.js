import React, { useState } from "react";
export const Payment=()=>
{
    const [bank,sbank]=useState([]);
    const [sendername,ssendername]=useState([]);
    const [senderacc,ssenderacc]=useState([]);
    const [amttrns,samttrns]=useState([]);
    const [deti,sdeti]=useState([]);
    const [pymt,spymt]=useState([]);
    const [transc,stransc]=useState([]);
    return(
        <>
        <table>
            <tr>
                <td colSpan={2}><b>Enter Payment details</b></td>
            </tr>
            <tr>
                <td>
                    <label for='bank_details' onChange={(e)=>sbank(e.target.value)}><b>Enter BankDetails/CardDetails/CryptowalletDetails</b></label>
                </td>
                <td><input id="bank_details" type="text" placeholder="Enter details.."></input></td>
            </tr>
            <tr>
                <td>
                    <label for='sender_name'><b>Enter Sender Name</b></label>
                </td>
                <td>
                    <input id="sender_name" type="text" placeholder="Enter sender name.."></input>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="Sender_account"><b>Enter Sender Account number</b></label>
                </td>
                <td>
                    <input id="semder_account" type="text" placeholder="Enter acc number.."></input>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="amount_transfer"><b>Enter Amount Transfer</b></label>
                </td>
                <td>
                    <input id="amount_transfer" type="number" placeholder="Enter amount"></input>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="payment_refernce"><b>Enter Payment reference number</b></label>
                </td>
                <td>
                    <input id="payment_refernce" type="number" placeholder="Enter reference number.."></input>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="transcation_date"><b>Enter Payment reference number</b></label>
                </td>
                <td>
                    <input id="transcation_date" type="date"></input>
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                <button type="submit" style={{ margin: "2% 0% 5% 43%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }}>Submit</button>
                </td>
            </tr>
        </table>
        </>
    )
}