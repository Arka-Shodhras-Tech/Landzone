import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useActionData } from "react-router-dom";
import { Footer, Navbar1 } from "../../../home/nav&foot&contact&about/navbar";
import { Comp } from "../../asidebar/asidebar";
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
    const [usd,susd]=useState([]);
    const [lan,slan]=useState([]);
    const [curr,scurr]=useState([]);
    const [land,sland]=useState([]);
    const [cor,scor]=useState([]);
    const gmal=localStorage.gmail;
    const [x,sx]=useState([]);
    const [vpp,svpp]=useState([]);
    const [pp,spp]=useState([]);
    const [i,si]=useState(0);
    const [j,sj]=useState(0);
    const [a,sa]=useState([]);
    const [b,sb]=useState([]);
    const [c,sc]=useState([]);
    const [d,sd]=useState([]);
    const [appdis,sappdis]=useState([]);
    // Create currency
    const CC=async()=>
    {
        if(i==1)
        {
            document.getElementById('cc').style.display='none';
        }
        else
        {
            document.getElementById('cc').style.display='block';
        }
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='none';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='none';
        const responce1=await axios.get("http://localhost:8000/eviusdget/"+gmal)
        {
            if(responce1.data)
            {
                sd(responce1.data.Limit_bal)
            }
        }
    }
    const Vpp=()=>
    {
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='block';
        document.getElementById('app').style.display='none';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='none';
    }
    const App=async()=>
    {
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='block';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='none';
        const responce1=await axios.get("http://localhost:8000/appdis/"+gmal)
        {
            if(responce1.data)
            {
                sappdis(responce1.data.Units)
            }
        }
    }
    console.log(appdis)
    const Evb=()=>
    {
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='none';
        if(j==10)
        {
            document.getElementById('evb').style.display='none';
        }
        else
        {
            document.getElementById('evb').style.display='block';
        }
        document.getElementById('svb').style.display='none';
        sj(1);
    }
    const Svb=async()=>
    {
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='none';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='block';
        const responce1=await axios.get("http://localhost:8000/eviusdget/"+gmal)
        {
            if(responce1.data)
            {
                sa(responce1.data.create_currvalue);
                sb(responce1.data.USD_Values);
                sc(responce1.data.avl_bal);
                sd(responce1.data.Limit_bal)
            }
        }
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
    
    const Eusd=async()=>
    {
        scor(cor);
        snum(num);
        sx((parseInt(num)-parseInt(cor)));
        slan((500-parseInt(appdis)))
        console.log(lan);
        try
        {
            const responce1=await axios.get("http://localhost:8000/eviusdget/"+gmal)
            {
                if(responce1.data)
                {
                    susd(num);
                    const responce=await axios.post("http://localhost:8000/uviusd/"+gmal+"/"+num+"/"+cor+"/"+x+"/"+lan)
                    {
                        responce?alert(num+" LAND units created successfully"):alert("Enter again")
                        sj(1);
                    }
                }
                else
                {
                    const responce2=await axios.post("http://localhost:8000/eviusd/"+gmal+"/"+num+"/"+cor+"/"+x+"/"+lan)
                    {
                        responce2?alert(num+" LAND units created successfully"):alert("Enter again");
                        susd(responce2.data.USD_Values)
                        sj(1);
                    }
                }
                
            }
        }
        catch(err)
        {
            console.log("Server Bussy");
        }
    }

    const Land=async(e)=>
    {
        if(land=="Land" && cor<=d)
        {
            scor(cor);
            try
            {
             const result=await axios.post("http://localhost:8000/crecur/"+gmal+"/"+cor)
             {
                 result?alert(cor+" Land instance has been created and sent for approval"):alert("Try again");
                 si(1);
             }
            }
            catch(e)
            {
             console.log(e);
            }

        }
       else if(land=="USD" && cor<=d)
        {
            scor(cor);
           try
           {
            const result=await axios.post("http://localhost:8000/crecur/"+gmal+"/"+cor)
            {
                result?alert(cor+" eUSD instance has been created and sent for approval"):alert("Try again");
                si(1);
            }
           }
           catch(e)
           {
            console.log(e);
           }
        }
        else
        {
            scor();
            alert("units maximum "+ d +" And select units");
        }
    }
    const Usd=()=>
    {
        console.log("Usd");
    }
    const Viewpp=async()=>
    {
        try
        {
            const viewpp=await axios.post("http://localhost:8000/viewpp/"+vpp.Gmail+"/"+vpp.Units)
            {
                viewpp?alert("Approved"):alert("Not approved");
            }
            const viewpp1=await axios.post("http://localhost:8000/delviewpp/"+vpp.Gmail)
        }
        catch(e)
        {
            console.log(e)
        }
    }
    useEffect(() => {
        axios.get("http://localhost:8000/aufl")
            .then((result) => {
                sdat(result.data)
            })
        axios.get("http://localhost:8000/crecurdis")
            .then((result1)=>
            {
                scurr(result1.data);
            })
        axios.get("http://localhost:8000/viewappdis")
            .then((result2)=>
            {
                spp(result2.data);
            })
    }, [])
    return(
        <>
        <Navbar1/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>
                    <div className="dash">
                        <Link className="dashitem" onClick={CC}>Create Currency (Land/USD Units)</Link>
                        <Link className="dashitem" onClick={Vpp}>view Pending Purchases</Link>
                        <Link className="dashitem" onClick={App}>Approved Purchases</Link>
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
                                <label for='land' name="currency"><b>Enter the number of Units: </b><input type="number" name="currency" onChange={(e)=>scor(e.target.value)}></input>
                                <select id="land" name="currency" value={land} onChange={(e)=>sland(e.target.value)}>
                                    <option> Choose Currency</option>
                                    <option value="Land">Land</option>
                                    <option value="USD">eUSD</option>
                                </select>
                                </label>
                                <button onClick={Land} style={{ margin: "2% 0% 5% 43%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }}>Create</button>
                               </div>
                            </div>

{/* View pending purchases */}
                            <div className="editdis" style={{display:'none'}} id="vpp">
                                <table className="pendtable">
                                   {
                                    curr.map((val,index)=>
                                    (
                                       <>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>
                                                {val.Units}
                                            </td>
                                            <td>
                                                {val.Gmail}
                                            </td>
                                            <td>
                                                <input type="radio" id={index} name="same" onChange={(e)=>svpp(val)}/>
                                            </td>
                                        </tr>
                                        <tr></tr>
                                        <br/>
                                       </>
                                    ))
                                   }
                                   <tr style={{backgroundColor:'aliceblue'}}>
                                    <td colSpan={4}>
                                    <button onClick={Viewpp} style={{ margin: "2% 0% 5% 0%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }}>Approve</button>
                                    </td>
                                   </tr>
                                </table>
                            </div>

{/* Approved purchases */}
                            <div className="editdis" style={{display:'none'}} id="app">
                            <table className="pendtable">
                                   {
                                    pp.map((val1,index)=>
                                    (
                                       <>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>
                                            {val1.Units}
                                            </td>
                                            <td>
                                                <label for={index}>{val1.Gmail}</label>
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
                                    <label for='eusd'><b>Please enter value of USD in bank </b>
                                    <input type="number" id="eusd" onChange={(e)=>snum(e.target.value)}/>
                                    <select id="land" name="currency" value={land} onChange={(e)=>slan(e.target.value)}>
                                    <option> Choose Currency</option>
                                    <option value="Land">Land</option>
                                    <option value="USD">eUSD</option>
                                </select>
                                    </label>
                                    <button type="submit" onClick={Eusd} style={{ margin: "2% 0% 5% 43%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }}>Submit</button>
                                </div>
                            </div>

{/* Show value in eUSD */}
                            <div className="editdis" style={{display:'none'}} id="svb">
                            <div style={{textAlign:'center',marginTop:'22%'}}>
                                {/* <div style={{display:'none'}}>{y=(parseInt(cor)-parseInt(usd))}</div> */}
                                    <label for='eusd'><b>The total value of USD in bank is : {cor}</b></label><br/>
                                    <label for='eusd'><b>the number of eUSD's created till now: {usd}</b></label><br/>
                                    <label for='eusd'><b>Available USD in Bank: {x}</b></label><br/><br/>
                                    <label for='eusd'><b>Limit is:</b></label>
                                </div>
                            </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
