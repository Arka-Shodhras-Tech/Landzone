import { formToJSON } from "axios";
import React from "react";
import { useState } from "react";
export const Dashboard=()=>
{
    const [uc,suc]=useState(0);
    const [pc,spc]=useState(0);
    const [uib,ssib]=useState(0);
    const [eib,seib]=useState(0);
    const [ru,sru]=useState(0);
    const [tv,stv]=useState(0);
    const [ts,sts]=useState(0);
    const [pt,spt]=useState(0);
    return(
        <>
        <div className="dash">
        <table className="dashtable">
            <tr>
                <th>Dashboard content</th>
                <th>Total count</th>
            </tr>
            <tr>
                <td>Total User's Count</td>
                <td>{uc}</td>
            </tr>
            <tr>
                <td>Total Project Count</td>
                <td>{pc}</td>
            </tr>
            <tr>
                <td>Total USD in bank</td>
                <td>{uib}</td>
            </tr>
            <tr>
                <td>Total eUSD in bank</td>
                <td>{eib}</td>
            </tr>
            <tr>
                <td>Total ReMoneta Units</td>
                <td>{ru}</td>
            </tr>
            <tr>
                <td>Real Estate Total Value</td>
                <td>{tv}</td>
            </tr>
            <tr>
                <td>Recent Transactions (upto 10)</td>
                <td>{ts}</td>
            </tr>
            <tr>
                <td>Approval Pending Transactions(upto 10)</td>
                <td>{pt}</td>
            </tr>
        </table>
        </div>
        </>
    )
}