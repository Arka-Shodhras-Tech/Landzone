import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../../home/nav&foot&contact&about/navbar";
import { Comp } from "../../asidebar/asidebar";
export const Dashboard=()=>
{
    const p=localStorage.p;
    const q=localStorage.q;
    const gmal=localStorage.adminmail;
    const unit=localStorage.unit;
    const pendg=localStorage.pendg;
    // const avil=localStorage.avil;
    const usd=localStorage.usd;
    const limit=localStorage.limit;
    const total=localStorage.total;
    const totalland=localStorage.totalland;
    const landpend=localStorage.landpend;
    const landunit=localStorage.landunit;
    const landlimit=localStorage.landlimit;
    const currentland=localStorage.currentland;
    const token=localStorage.token;
    const uc=localStorage.usercount;
    const pc=localStorage.procount;
    const uib=usd;
    const eib=unit;
    const ru=landunit;
    const tv=totalland;
    const ts=localStorage.transcount;
    const [num,snum]=useState([]);
    const [curr,scurr]=useState([]);
    const [land,sland]=useState([]);
    const [cor,scor]=useState([]);
    const [vpp,svpp]=useState([]);
    const [prev,sprev]=useState([]);
    const usdval=localStorage.usdval;
    const val=usdval;
    const [j,sj]=useState(0);
    const date=new Date();
    let value;
    const name="Quntam";


//****************************************Create currency Button******************************************//
    const CC=async()=>
    {
    try
   {
    const responce=await axios.get("https://landzone-server.onrender.com/currentland/"+name)
    localStorage.currentland=responce.data.Value;
    if (responce.data.Dates !== date.toDateString())
    {
        value = parseFloat(responce.data.Value)+0.000205;
        axios.post("https://landzone-server.onrender.com/insertcurland/"+name+"/"+date.toDateString()+"/"+value)
    }
   }
   catch(e)
   {
    console.log(e);
   }
        localStorage.total=limit;
        document.getElementById('cc').style.display='block';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='none';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='none';
        document.getElementById('conv').style.display='none';
        document.getElementById('prevlist').style.display="none";
    }


    // ****************************************View Pending Purchases Button****************************************//
    const Vpp=()=>
    {
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='block';
        document.getElementById('app').style.display='none';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='none';
        document.getElementById('conv').style.display='none';
        document.getElementById('prevlist').style.display="none";
    }


    // *****************************************Approve Pending Purchase******************************************//
    const App=async()=>
    {
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='block';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='none';
        document.getElementById('conv').style.display='none';
        document.getElementById('prevlist').style.display="none";
    }


    // ***************************************Enter Value in Bank Button******************************************//
    const Evb=async()=>
    {
        localStorage.p=0;
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='none';
        document.getElementById('prevlist').style.display="none";
        document.getElementById('conv').style.display='none';
        if(j===1)
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


    //***************************************Show value in Bank Butoon************************************** */
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
            localStorage.landlimit=parseFloat(totalland/currentland)-(parseInt(landpend)+parseFloat(landunit)*val)
            localStorage.q=q+1;   
        }
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='none';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='block';
        document.getElementById('conv').style.display='none';
        document.getElementById('prevlist').style.display="none";
    }


    // ******************************************Enter USD in Bank***************************************//
    const Eusd=async()=>
    {
        try
        {
            localStorage.usd=num;
            const responce=await axios.get("https://landzone-server.onrender.com/eviusdget/"+gmal)
            {
                if(responce.data)
                {
                    const details=await axios.post("https://landzone-server.onrender.com/uviusd/"+gmal+"/"+num)
                    {
                        localStorage.limit=num;
                        details?alert(num+" USD units are there in your Bank account"):alert("Try again");
                        window.location.reload(5);
                    }
                }
                else
                {
                    const responce1=await axios.post("https://landzone-server.onrender.com/eviusd/"+gmal+"/"+num)
                    {
                        if(responce1.data)
                        {
                            alert(num+" USD units are Update in your Bank account");
                            window.location.reload(5);
                        }
                        else
                        {
                            alert("Try again");
                        }
                    }
                }
            }
        }
        catch(e)
        {
            console.log(e);
        }
    }


    // ***************************************************convert**************************************************//
    const Conv=()=>
    {
        document.getElementById('cc').style.display='none';
        document.getElementById('vpp').style.display='none';
        document.getElementById('app').style.display='none';
        document.getElementById('evb').style.display='none';
        document.getElementById('svb').style.display='none';
        document.getElementById('conv').style.display='block';
        document.getElementById('prevlist').style.display="none";
    }
    const Convert=()=>
    {
        if(land==="Land")
        {
            localStorage.token=num;
            localStorage.landunit=landunit-num*currentland;
            const res=axios.post("https://landzone-server.onrender.com/token/"+localStorage.adminmail+"/"+landunit+"/"+land)
            {
                res.data? alert(token+"sucessfully Convert in LAND"):<b></b>
                window.location.reload(4);
            }
        }
        else
        {
            localStorage.token=num;
            localStorage.unit=unit-num;
            const res=axios.post("https://landzone-server.onrender.com/token/"+localStorage.adminmail+"/"+unit+"/"+land)
            {
                res.data?alert(token+"sucessfully Convert in USD"):<b></b>
            }
            window.location.reload(4);
        }
    }


// ******************************************************create currency***************************************************//
    const Land=async(e)=>
    {
        localStorage.p=0;
        localStorage.q=0;
        if(cor<=parseInt(total))
        {
            if(land==="Land")
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
             const result=await axios.post("https://landzone-server.onrender.com/crecur/"+gmal+"/"+cor+"/"+land)
             {
                console.log(result)
                 result?alert(cor+" "+land +" instance has been created and sent for approval"):alert("Try again");
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
            alert("Only "+total+" Available");
        }
    }


    // *************************************************Clear All Values*********************************************//
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
        await axios.post("https://landzone-server.onrender.com/delecurr/"+gmal)?
        window.location.reload(5):alert("Try again")
       }
       catch(e)
       {
        console.log(e);
       }
    }


    // ***********************************************Previous Values***************************************//
    const Prev=async()=>
    {
        try
        {
         const res=await axios.get("https://landzone-server.onrender.com/eviusdget/"+gmal)
         {
             if(res.data)
             {
                 localStorage.limit=res.data.AvailableIneUSD;
                 localStorage.pendg=res.data.PendingIneUSD;
                 localStorage.avil=res.data.AvailableIneUSD;
                 localStorage.unit=res.data.CreatedIneUSD;
                 localStorage.usd=res.data.TotalValueIneUSD;
                //  localStorage.totalland=res.data.TotalValueInLand;
                 localStorage.landpend=res.data.PendingInLand;
                 localStorage.landunit=res.data.CreatedInLand;
                 localStorage.landlimit=res.data.AvailableInLand;
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
    // *************************************************Save Values*********************************************//
    const Save=async()=>
    {
        try
        {
            const res=await axios.get("https://landzone-server.onrender.com/getshowvalue/"+gmal)
            {
                if(res)
                {
                    const res1=axios.post("https://landzone-server.onrender.com/updateshowvalues/"+gmal+"/"+usd+"/"+pendg+"/"+unit+"/"+limit+"/"+totalland+"/"+landpend+"/"+landunit+"/"+landlimit)
                    {
                        if(res1)
                        {
                            alert("Sucessfully saved")
                        }
                        else
                        {
                            alert("Try again");
                        }
                    }
                }
                else
                {
                   alert("Data Not Found");
                }
            }
        }
        catch(e)
        {
            console.log(e);
        }
    }

// ***********************************************view pending approval*****************************************//
    const Viewpp=async()=>
    {
        localStorage.p=0;
        localStorage.q=0;
        try
        {
            if(vpp.In==="Land")
            {
                localStorage.landpend=parseInt(landpend)-parseInt(vpp.Value);
                localStorage.landunit=parseInt(landunit*currentland)+parseInt(vpp.Value);
            }
            else
            {
                localStorage.pendg=parseInt(pendg)-parseInt(vpp.Value);
                localStorage.unit=parseInt(unit)+parseInt(vpp.Value);
            }
            localStorage.limit=0;
            const viewpp=await axios.post("https://landzone-server.onrender.com/viewpp/"+vpp.Gmail+"/"+vpp.Value+"/"+vpp.In)
            {
                localStorage.limit=usd;
                if(viewpp.data)
                {
                    alert("Approved")
                    window.location.reload(3)
                }
                else
                {
                    alert("Try again");
                }
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
        axios.get("https://landzone-server.onrender.com/purchases")
        .then((result1)=>
        {
            scurr(result1.data);
        })
        axios.get("https://landzone-server.onrender.com/trailpurchase")
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
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>
                    <div className="dash">
                        <Link className="dashitem" onClick={Evb}>Enter Value of USD in Bank</Link>
                        <Link className="dashitem" onClick={CC}>Create Currency (Land/USD Units)</Link>
                        <Link className="dashitem" onClick={Vpp}>view Pending Purchases</Link>
                        <Link className="dashitem" onClick={App}>Approved Purchases</Link>
                        <Link className="dashitem" onClick={Svb}>Show Value of Land/USD in Bank</Link>
                        <Link className="dashitem" onClick={Conv}>Convert</Link>
                    </div>
                            <div>
                                <table className="dashtable">
                                    <tr>
                                        <th>Dashboard content</th>
                                        <th>Total count</th>
                                    </tr>
                                    <tr>
                                        <td>Total Approved User's Count</td>
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
                                        <td>Total eUSD Created till now</td>
                                        <td>{eib}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Land Units created till now</td>
                                        <td>{ru}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Value of Land</td>
                                        <td>{tv}</td>
                                    </tr>
                                    <tr>
                                        <td>Recent Transactions</td>
                                        <td>{ts}</td>
                                    </tr>
                                </table>
                            </div>


{/* **********************************************Enter value in eUSD********************************************* */}
                            <div className="editdis" style={{display:'none'}} id="evb">
                                <div style={{textAlign:'center',marginTop:'32%'}}>
                                    <label for='eusd'><b>Please enter value of USD in bank </b>
                                    <input type="number" id="eusd" onChange={(e)=>snum(e.target.value)}/>
                                    </label>
                                    <button type="submit" onClick={Eusd} style={{ margin: "2% 0% 5% 43%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }}>Submit</button>
                                </div>
                            </div>


{/* ***********************************************Create currency********************************************** */}
                            <div className="editdis" style={{display:'none'}} id="cc">
                               <div className="ccdisplay">
                               <b>Current Land Value::{currentland}</b>
                               <br/>Current 1.207909
                               <br/>
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


{/* **********************************************View pending purchases**************************************** */}
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
                                        val.__L===0?
                                       <>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>
                                                {val.Value}
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
                                       </>:<b></b>
                                    ))
                                   }
                                   <tr style={{backgroundColor:'aliceblue'}}>
                                    <td colSpan={4}>
                                    <button onClick={Viewpp} style={{ margin: "2% 0% 5% 0%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }}>Approve</button>
                                    </td>
                                   </tr>
                                </table>
                            </div>


{/* ***************************************************Approved purchases********************************************* */}
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
                                    prev.map((val1,index)=>
                                    (
                                        val1.__L===1?
                                       <>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>
                                            {val1.Value}
                                            </td>
                                            <td>
                                                {val1.In}
                                            </td>
                                            <td>
                                                <label>{val1.Gmail}</label>
                                            </td>
                                        </tr>
                                        <br/>
                                       </>:<b></b>
                                    ))
                                   }
                                </table>
                            </div>


{/* *************************************************Show value in eUSD****************************************************** */}
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
                                    <br/>
                                    <br/>
                                    <tr>
                                        <td>
                                        Please save your statical values and try trail methods
                                        </td>
                                        <td style={{width:'30%'}}>
                                        <button onClick={Save} style={{ margin: "5% 0% 0% 55%", width: '50%', height: '4vh', backgroundColor: 'green', color: 'white' }}><b>Save</b></button>
                                        </td>
                                    </tr>
                            </div>
                            </div>


{/* ***************************************************Previous List******************************************************* */}
                            <div className="editdis" style={{display:'none'}} id="prevlist">
                                <table className="pendtable" style={{marginTop:'5%'}}>
                                {
                                    curr.map((pre,index)=>
                                    (
                                        pre.__L===1?
                                       <>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>
                                            {pre.Value}
                                            </td>
                                            <td>{pre.In}</td>
                                            <td>
                                                <label for={index}>{pre.Gmail}</label>
                                            </td>
                                        </tr>
                                        <br/>
                                       </>:<b></b>
                                    ))
                                   }
                                </table>
                            </div>


{/* *****************************************Convert Tockens************************************************* */}
                            <div className="editdis" style={{display:'none'}} id="conv">
                                <tr>
                                    <td><b>Enter the number of Tokens Create::</b></td>
                                    <td>
                                    <label>
                                        <input type="number" onChange={(e) => { snum(e.target.value) }} />
                                        <select id="land" name="currency" value={land} onChange={(e) => sland(e.target.value)}>
                                            <option> Choose Currency</option>
                                            <option value="Land">Land</option>
                                            <option value="eUSD">eUSD</option>
                                        </select>
                                    </label>
                                    </td>
                                </tr>
                                <tr>
                                <button onClick={Convert} style={{ margin: "2% 0% 5% 83%", width: '25%', height: '4vh',border:'none',borderRadius:'8px', backgroundColor:"royalblue", color: 'white' }}>Convert</button>
                                </tr>
                                <br/>
                                <br/>
                                <tr>
                                    <td><b>Currency In Tokens::</b>{token} 1 token value = 1 land and usd value</td>
                                    <td></td>
                                </tr>
                            </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
