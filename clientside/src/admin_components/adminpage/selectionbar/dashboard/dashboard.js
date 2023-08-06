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
    const usdval=localStorage.usdval;
    const [val, sval] = useState(usdval);
    const predate=localStorage.predate;
    const [prevdate, sprevdate] = useState(predate);
    const [j,sj]=useState(0);
    const p=localStorage.p;
    const q=localStorage.q;
    const gmal=localStorage.gmail;
    const unit=localStorage.unit;
    const pendg=localStorage.pendg;
    const avil=localStorage.avil;
    const usd=localStorage.usd;
    const limit=localStorage.limit;
    const total=localStorage.total;
    const totalland=localStorage.totalland;
    const landpend=localStorage.landpend;
    const landunit=localStorage.landunit;
    const landlimit=localStorage.landlimit;

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
        localStorage.avil=(usd-unit)
        if(parseInt(p)===0)
        {
            localStorage.limit=parseInt(usd)-(parseInt(pendg)+parseInt(unit))
            localStorage.landlimit=parseInt(totalland)-(parseInt(landpend)+parseInt(landunit))
            localStorage.p=p+1;
        }
        if(parseInt(q)===0)
        {
            localStorage.landlimit=parseInt(totalland)-(parseInt(landpend)+parseInt(landunit))
            localStorage.q=q+1;   
        }
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='none';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='block';
        document.getElementById('prevlist').style.display="none";
    }
    const Save=async()=>
    {
        try
        {
            const res1=await axios.get("http://localhost:8000/getshowvalue/"+gmal)
            {
                if(res1.data)
                {
                    axios.post("http://localhost:8000/updateshow/"+gmal+"/"+usd+"/"+pendg+"/"+unit+"/"+avil+"/"+limit+"/"+totalland+"/"+landpend+"/"+landunit+"/"+landlimit)?
                    alert("Saved"):alert("Try agian");
                }
                else
                {
                    axios.post("http://localhost:8000/showvalue/"+gmal+"/"+usd+"/"+pendg+"/"+unit+"/"+avil+"/"+limit+"/"+totalland+"/"+landpend+"/"+landunit+"/"+landlimit)?
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
            // localStorage.limit=0;
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

// create currency
    const Land=async(e)=>
    {
        localStorage.p=0;
        localStorage.q=0;
        if(cor<=parseInt(total))
        {
            if(land=="Land")
            {
                localStorage.landpend=parseInt(landpend)+parseInt(cor);
                scor(cor);
            }
            else
            {
                localStorage.pendg=parseInt(pendg)+parseInt(cor);
                scor(cor);
            }
            try
            {
             const result=await axios.post("http://localhost:8000/crecur/"+gmal+"/"+cor+"/"+land)
             {
                 result?alert(cor+" "+land +" instance has been created and sent for approval"):alert("Try again");
                 window.location.reload(5);
             }
            }
            catch(e)
            {
             console.log(e);
            }
        }
    }
    const Clear=async()=>
    {
        localStorage.unit=0;
        localStorage.pendg=0;
        localStorage.avil=0;
        localStorage.usd=0;
        localStorage.limit=0;
        localStorage.landpend=0;
        localStorage.landunit=0;
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
                localStorage.limit=res.data.USD_Values.USD_Limit;
                localStorage.pendg=res.data.USD_Values.USD_Pending;
                localStorage.avil=res.data.USD_Values.USD_Available;
                localStorage.unit=res.data.USD_Values.USD_Created;
                localStorage.usd=res.data.USD_Values.Total_USD;
                localStorage.totalland=res.data.Land_values.Total_Land;
                localStorage.landpend=res.data.Land_values.Land_Pending;
                localStorage.landunit=res.data.Land_values.Land_Created;
                localStorage.landlimit=res.data.Land_values.Land_Available;
                window.location.reload(5);
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

// view pending approval
    const Viewpp=async()=>
    {
        localStorage.p=0;
        localStorage.q=0;
        try
        {
            if(vpp.In=="Land")
            {
                localStorage.landpend=parseInt(landpend)-parseInt(vpp.Units);
                localStorage.landunit=parseInt(landunit)+parseInt(vpp.Units);
            }
            else
            {
                localStorage.pendg=parseInt(pendg)-parseInt(vpp.Units);
                localStorage.unit=parseInt(unit)+parseInt(vpp.Units);
            }
            localStorage.limit=0;
            const viewpp=await axios.post("http://localhost:8000/viewpp/"+vpp.Gmail+"/"+vpp.Units+"/"+vpp.In)
            {
                viewpp?alert("Approved"):alert("Try again");
                localStorage.limit=usd;
            }
            await axios.post("http://localhost:8000/sviewpp/"+vpp.Gmail+"/"+vpp.Units+"/"+vpp.In)
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
       const currentDate = new Date();
       if (currentDate.getDate() !== prevdate)
        {
         sval(parseFloat(val)+0.000205);
         localStorage.usdval=val;
         sprevdate(currentDate);
         localStorage.predate=prevdate;
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
                        {/* <Link className="dashitem" onClick={Svlb}>Show Value of Land in Bank</Link> */}
                        <Link className="dashitem" onClick={Svb}>Show Value of Land/USD in Bank</Link>
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
                                    <option value="eUSD">eUSD</option>
                                </select>
                                </label>
                                <button onClick={Land} style={{ margin: "2% 0% 5% 43%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }}>Create</button>
                               </div>
                            </div>


{/* View pending purchases */}
                            <div className="editdis" style={{display:'none'}} id="vpp">
                                <table className="pendtable">
                                    <tr>
                                        <td><b>S.No</b></td>
                                        <td><b>Amount</b></td>
                                        <td><b>Currency</b></td>
                                        <td><b>User</b></td>
                                        <td><b>Select</b></td>
                                    </tr>
                                    <br/>
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
                                                {val.In}
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
                                    <tr>
                                        <td><b>S.No</b></td>
                                        <td><b>Amount</b></td>
                                        <td><b>Currency</b></td>
                                        <td><b>User</b></td>
                                    </tr>
                                    <br/>
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
                                                {val1.In}
                                            </td>
                                            <td>
                                                <label>{val1.Gmail}</label>
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
                                    <table>
                                        <tr>
                                        <th>Currency</th>
                                        <th>The total value of Land/USD Bank</th>
                                        <th>Number of Units Created</th>
                                        <th>Units Pending approval</th>
                                        <th>Units available to be created</th>
                                        </tr>
                                        <tr style={{color:'navy'}}>
                                            <td style={{height:'12vh',color:'blue'}}><b>Land</b></td>
                                            <td>{totalland}</td>
                                            <td>{landunit}</td>
                                            <td>{landpend}</td>
                                            <td>{landlimit}</td>
                                        </tr>
                                        <tr style={{color:'green'}}>
                                            <td style={{color:'blue'}}><b>eUSD</b></td>
                                            <td>{usd}</td>
                                            <td>{unit}</td>
                                            <td>{pendg}</td>
                                            <td>{limit}</td>
                                        </tr>
                                    </table>
                            </div>
                                <button onClick={Save} style={{ margin: "15% 0% 0% 78%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }}>Save</button>
                            </div>
{/* Previous List */}
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
                                            <td>{pre.In}</td>
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
