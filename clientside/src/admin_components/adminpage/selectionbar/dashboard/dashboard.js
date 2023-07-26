import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    const [num,snum]=useState([]);
    const [curr,scurr]=useState([]);
    const [land,sland]=useState([]);
    const [cor,scor]=useState([]);
    const [vpp,svpp]=useState([]);
    const [pp,spp]=useState([]);
    const [prev,sprev]=useState([]);
    const [j,sj]=useState(0);
    const p=localStorage.p;
    const gmal=localStorage.gmail;
    const unit=localStorage.unit;
    const pendg=localStorage.pendg;
    const avil=localStorage.avil;
    const usd=localStorage.usd;
    const limit=localStorage.limit;
    const total=localStorage.total;

// Create currency
    const CC=async()=>
    {
        localStorage.total=limit;
        document.getElementById('cc').style.display='block';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='none';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='none';
        document.getElementById('prevlist').style.display="none";
    }
    const Vpp=()=>
    {
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='block';
        document.getElementById('app').style.display='none';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='none';
        document.getElementById('prevlist').style.display="none";
    }
    const App=async()=>
    {
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='block';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='none';
        document.getElementById('prevlist').style.display="none";
    }
    const Evb=async()=>
    {
        localStorage.p=0;
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='none';
        document.getElementById('prevlist').style.display="none";
        if(j==1)
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
        document.getElementById('prevlist').style.display="none";
        localStorage.avil=(usd-unit)
        if(parseInt(p)===0)
        {
            localStorage.limit=parseInt(usd)-(parseInt(pendg)+parseInt(unit))
            localStorage.p=p+1;
        }
    }
    const Save=async()=>
    {
        try
        {
            const res1=await axios.get("http://localhost:8000/getshowvalue/"+gmal)
            {
                if(res1.data)
                {
                    axios.post("http://localhost:8000/updateshow/"+gmal+"/"+usd+"/"+pendg+"/"+unit+"/"+avil+"/"+limit)?
                    alert("Saved"):alert("Try agian");
                }
                else
                {
                    axios.post("http://localhost:8000/showvalue/"+gmal+"/"+usd+"/"+pendg+"/"+unit+"/"+avil+"/"+limit)?
                    alert("Saved"):alert("Try agian");
                }
            }
        }
        catch(e)
        {
            console.log(e);
        }
    }
    const Eusd=async()=>
    {
        try
        {
            localStorage.usd=num;
            localStorage.limit=0;
            const responce1=await axios.get("http://localhost:8000/eviusdget/"+gmal)
            {
                if(responce1.data)
                {
                    const details=await axios.post("http://localhost:8000/uviusd/"+gmal+"/"+limit)
                    {
                        localStorage.limit=num;
                        details?alert(num+" USD units are there in your Bank account"):alert("Try again");
                        window.location.reload(5);
                    }
                }
                else
                {
                    const details=await axios.post("http://localhost:8000/eviusd/"+gmal+"/"+limit)
                    {
                        details?alert(num+" USD units are there in your Bank account"):alert("Try again");
                        window.location.reload(5);
                    }
                }
            }
        }
        catch(e)
        {
            console.log(e);
        }
    }
    const Land=async(e)=>
    {
        localStorage.p=0;
        if(land=="Land" && cor<=parseInt(total))
        {
            localStorage.pendg=parseInt(pendg)+parseInt(cor);
            scor(cor);
            try
            {
             const result=await axios.post("http://localhost:8000/crecur/"+gmal+"/"+cor)
             {
                 result?alert(cor+" Land instance has been created and sent for approval"):alert("Try again");
                 window.location.reload(5);
             }
            }
            catch(e)
            {
             console.log(e);
            }
        }
       else if(land=="USD" && cor<=parseInt(total))
        {
            localStorage.pendg=parseInt(pendg)+parseInt(cor);
            scor(cor);
           try
           {
            const result=await axios.post("http://localhost:8000/crecur/"+gmal+"/"+cor)
            {
                result?alert(cor+" eUSD instance has been created and sent for approval"):alert("Try again");
                window.location.reload(5);
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
            alert("units maximum "+ total +" And select units");
        }
    }
    const Clear=async()=>
    {
        localStorage.unit=0;
        localStorage.pendg=0;
        localStorage.avil=0;
        localStorage.usd=0;
        localStorage.limit=0;
       try
       {
        (await axios.post("http://localhost:8000/delecurr")&&
        await axios.post("http://localhost:8000/delepend"))?
        window.location.reload(5):alert("Try again")
       }
       catch(e)
       {
        console.log(e);
       }
    }
    const Prev=async()=>
    {
       try
       {
        const res=await axios.get("http://localhost:8000/getshowvalue/"+gmal)
        {
            if(res.data)
            {
                localStorage.limit=res.data.Limit;
                localStorage.pendg=res.data.Pending;
                localStorage.avil=res.data.Available;
                localStorage.unit=res.data.Created;
                localStorage.usd=res.data.USD;
            }
        }
       }
       catch(e)
       {
        console.log(e);
       }
    }
    const PreList=async()=>
    {
        document.getElementById('prevlist').style.display="block";
    }
    const Viewpp=async()=>
    {
        localStorage.p=0;
        try
        {
            localStorage.pendg=parseInt(pendg)-parseInt(vpp.Units);
            localStorage.unit=parseInt(unit)+parseInt(vpp.Units);
            localStorage.limit=0;
            const viewpp=await axios.post("http://localhost:8000/viewpp/"+vpp.Gmail+"/"+vpp.Units)
            {
                viewpp?alert("Approved"):alert("Try again");
                localStorage.limit=usd;
            }
            await axios.post("http://localhost:8000/sviewpp/"+vpp.Gmail+"/"+vpp.Units)
            const viewpp1=await axios.post("http://localhost:8000/delviewpp/"+vpp.Units)
            {
                viewpp1?window.location.reload(3):alert("Try again");
            }  
        }
        catch(e)
        {
            console.log(e)
        }
    }
    useEffect(() => {
       try
       {
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
        axios.get("http://localhost:8000/sviewdis")
        .then((result3)=>
        {
            sprev(result3.data);
        })
       }
       catch(e)
       {
        console.log(e);
       }
    }, [])
    return(
        <>
        <Navbar1/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>
                    <div className="dash">
                        <Link className="dashitem" onClick={Evb}>Enter Value of USD in Bank</Link>
                        <Link className="dashitem" onClick={CC}>Create Currency (Land/USD Units)</Link>
                        <Link className="dashitem" onClick={Vpp}>view Pending Purchases</Link>
                        <Link className="dashitem" onClick={App}>Approved Purchases</Link>
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

{/* Enter value in eUSD */}
                            <div className="editdis" style={{display:'none'}} id="evb">
                                <div style={{textAlign:'center',marginTop:'32%'}}>
                                    <label for='eusd'><b>Please enter value of USD in bank </b>
                                    <input type="number" id="eusd" onChange={(e)=>snum(e.target.value)}/>
                                    </label>
                                    <button type="submit" onClick={Eusd} style={{ margin: "2% 0% 5% 43%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }}>Submit</button>
                                </div>
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
                                                <label for={index}>{val.Gmail}</label>
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
                            <button onClick={PreList} style={{ margin: "2% 0% 5% 83%", width: '15%', height: '4vh',border:'none',borderRadius:'8px', backgroundColor:"royalblue", color: 'white' }}>Previous List</button>
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
                                        </tr>
                                        <br/>
                                       </>
                                    ))
                                   }
                                </table>
                            </div>



{/* Show value in eUSD */}
                            <div className="editdis" style={{display:'none'}} id="svb">
                            <div style={{display:'flex'}}>
                            <button onClick={Prev} style={{ margin: "5% 0% 0% 12%", width: '15%', height: '4vh', backgroundColor: 'orange', color: 'black' }}><b>Previous Values</b></button>
                            <button onClick={Clear} style={{ margin: "5% 0% 0% 55%", width: '10%', height: '4vh', backgroundColor: 'red', color: 'white' }}><b>Clear All</b></button>
                            </div>
                            <div style={{textAlign:'center',marginTop:'18%'}}>
                                {/* <div style={{display:'none'}}>{y=(parseInt(cor)-parseInt(usd))}</div> */}
                                    <label for='eusd'><b>The total value of USD in bank is : {usd}</b></label><br/>
                                    <label for="eusd"><b>Pending eUSD:{pendg}</b></label><br/>
                                    <label for='eusd'><b>the number of eUSD's created till now: {unit}</b></label><br/>
                                    {/* <label for='eusd'><b>Available USD in Bank: {avil}</b></label><br/><br/> */}
                                    <label for='eusd'><b>eUSD possible to be created:{limit}</b></label>
                                    {/* <button id={1} onClick={Limitdis}><b>Limit</b></button><div>{limit}</div> */}
                                </div>
                                <button onClick={Save} style={{ margin: "15% 0% 0% 78%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }}>Save</button>
                            </div>

                            <div className="editdis" style={{display:'none'}} id="prevlist">
                                <table className="pendtable" style={{marginTop:'5%'}}>
                                {
                                    prev.map((pre,index)=>
                                    (
                                       <>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>
                                            {pre.Units}
                                            </td>
                                            <td>
                                                <label for={index}>{pre.Gmail}</label>
                                            </td>
                                        </tr>
                                        <br/>
                                       </>
                                    ))
                                   }
                                </table>
                            </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
