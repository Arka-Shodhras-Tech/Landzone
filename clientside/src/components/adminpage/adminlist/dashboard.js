import React from "react";
import { useState } from "react";
import { Footer, Navbar } from "../../navfoot/navbar";
import { Comp } from "../../company/company";
import { Link } from "react-router-dom";
export const Dashboard=()=>
{
    const [uc,suc]=useState(0);
    const [pc,spc]=useState(0);
    const [uib,suib]=useState(0);
    const [eib,seib]=useState(0);
    const [ru,sru]=useState(0);
    const [tv,stv]=useState(0);
    const [ts,sts]=useState(0);
    const [pt,spt]=useState(0);
    // suc(0)
    // spc(0)
    // suib(0)
    // seib(0)
    // sru(0)
    // stv(0)
    // sts(0)
    // spt(0)
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>
                    <div className="dash">
                        <Link className="dashitem">Create Currency (Land/eUSD Units)</Link>
                        <Link className="dashitem">view Pending Purchases</Link>
                        <Link className="dashitem">Approve Pending Purchases</Link>
                        <Link className="dashitem">Enter Value of eUSD in Bank</Link>
                        <Link className="dashitem">Show Value of eUSD in Bank</Link>
                    </div>
                            <div>
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
                                        <td>Total Land Units</td>
                                        <td>{ru}</td>
                                    </tr>
                                    <tr>
                                        <td>Land Total Value</td>
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
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
