import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Comp } from "../../company/company";
import { Footer, Navbar } from "../../navfoot/navbar";
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
    const [dat,sdat]=useState([]);
    const [num,snum]=useState([]);

    // Create currency
    const CC=()=>
    {
        document.getElementById('cc').style.display='block';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='none';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='none';
    }
    const Vpp=()=>
    {
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='block';
        document.getElementById('app').style.display='none';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='none';
    }
    const App=()=>
    {
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='block';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='none';
    }
    const Evb=()=>
    {
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='none';
        document.getElementById('evb').style.display='block';
        document.getElementById('svb').style.display='none';
    }
    const Svb=()=>
    {
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='none';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='block';
    }
// Land display in create currency
    const Landdis=()=>
    {
        document.getElementById('landis').style.display='block';
        document.getElementById('usdis').style.display='none';
    }
// USD display in create currency
    const Usddis=()=>
    {
        document.getElementById('usdis').style.display='block';
        document.getElementById('landis').style.display='none';
    }
    useEffect(()=>
    {
    axios.get("http://localhost:8000/aufl")
    .then((result)=>
    {
        sdat(result.data)
    })
    },[])
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>
                    <div className="dash">
                        <Link className="dashitem" onClick={CC}>Create Currency (Land/USD Units)</Link>
                        <Link className="dashitem" onClick={Vpp}>view Pending Purchases</Link>
                        <Link className="dashitem" onClick={App}>Approve Pending Purchases</Link>
                        <Link className="dashitem" onClick={Evb}>Enter Value of USD in Bank</Link>
                        <Link className="dashitem" onClick={Svb}>Show Value of USD in Bank</Link>
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

{/* Create currency */}
                            <div className="editdis" style={{display:'none'}} id="cc">
                               <div className="ccdisplay">
                                <label for='land' name="currency"><b>Enter the number of Units: </b><input type="number" name="currency"></input>
                                <select id="land" name="currency">
                                    <option> Choose Currency</option>
                                    <option value="Land">Land</option>
                                    <option value="USD">USD</option>
                                </select>
                                </label>
                                <button type="submit" style={{ margin: "2% 0% 5% 43%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }}>Convert</button>
                               </div>
                            </div>

{/* View pending purchases */}
                            <div className="editdis" style={{display:'none'}} id="vpp">
                                <table className="pendtable">
                                   {
                                    dat.map((val,index)=>
                                    (
                                       <>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>
                                                <img src="leaf.png" alt="leaf" width={'150px'}/>
                                            </td>
                                            <td>
                                                {val.name}
                                            </td>
                                        </tr>
                                        <br/>
                                       </>
                                    ))
                                   }
                                </table>
                            </div>


{/* Approve pending purchases */}
                            <div className="editdis" style={{display:'none'}} id="app">
                            <table className="pendtable">
                                   {
                                    dat.map((val,index)=>
                                    (
                                       <>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>
                                                <label for={index}><img src="leaf.png" alt="leaf" width={'150px'}/></label>
                                            </td>
                                            <td>
                                                <label for={index}>{val.name}</label>
                                            </td>
                                            <td>
                                                <input type="radio" name="same" id={index}/>
                                            </td>
                                        </tr>
                                        <br/>
                                       </>
                                    ))
                                   }
                                </table>
                                <button type="submit" style={{ margin: "2% 0% 5% 43%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }}>Approve</button>
                            </div>

{/* Enter value in eUSD */}
                            <div className="editdis" style={{display:'none'}} id="evb">
                                <div style={{textAlign:'center',marginTop:'32%'}}>
                                    <label for='eusd'><b>Please enter value of eUSD in bank </b></label>
                                    <input type="number" id="eusd" onChange={(e)=>snum(e.target.value)}></input>
                                    <button type="submit" style={{ margin: "2% 0% 5% 43%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }}>Submit</button>
                                </div>
                            </div>

{/* Show value in eUSD */}
                            <div className="editdis" style={{display:'none'}} id="svb">
                            <div style={{textAlign:'center',marginTop:'32%'}}>
                                    <label for='eusd'><b>The value of eUSD in bank is {num}</b></label>
                                </div>
                            </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
