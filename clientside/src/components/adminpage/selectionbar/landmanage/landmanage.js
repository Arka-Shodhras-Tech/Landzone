import axios from "axios";
import moment from 'moment';
import 'moment-timezone';
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../../navfoot/navbar";
import { Comp } from "../../asidebar/asidebar";
export const Landmanage=()=>
{
    const [epn,sepn]=useState([]);
    const [epd,sepd]=useState([]);
    const [epv,sepv]=useState([]);
    const [epa,sepa]=useState([]);
    const [etime,setime]=useState("");
    const [cpn,scpn]=useState([]);
    const [cpd,scpd]=useState([]);
    const [cpv,scpv]=useState([]);
    const [cpa,scpa]=useState([]);
    const [ctime,sctime]=useState("");
    const [sld,ssld]=useState([]);
    const [err1,serr1]=useState([]);
    const [err2,serr2]=useState([]);
    const [pdsc,spdsc]=useState([]);
    const table=useRef();
    let x=0;
    const Elpd=async()=>
    {
        document.getElementById('eld').style.display="block";
        document.getElementById('cld').style.display="none";
        document.getElementById('sld').style.display="none";
        document.getElementById('slv').style.display="none";
    }
    const Clpd=async()=>
    {
        document.getElementById('cld').style.display="block";
        document.getElementById('sld').style.display="none";
        document.getElementById('slv').style.display="none";
        document.getElementById('eld').style.display="none";
    }
    const Vled=async()=>
    {
        document.getElementById('sld').style.display="block";
        document.getElementById('eld').style.display="none";
        document.getElementById('slv').style.display="none";
        document.getElementById('cld').style.display="none";
    }
    const Sltv=async()=>
    {
        document.getElementById('slv').style.display="block";
        document.getElementById('eld').style.display="none";
        document.getElementById('cld').style.display="none";
        document.getElementById('sld').style.display="none";
    }

    // Enter land project data
    const Enterdata=async()=>
    {
        const responce1=await axios.get("http://localhost:8000/entercheckdata/"+epn)
        {
            if(responce1.data)
            {
                serr1("Project name Existed please enter different project name")
            }
            else
            {
               const responce2= await axios.post("http://localhost:8000/enterdata/"+epn+"/"+epd+"/"+epv+"/"+epa+"/"+etime)
               {
                responce2?serr1("Your project sucessfully saved"):serr1("Try agin")
                window.location.reload(5)
               }
            }
        }
    }
    

    // Change land project data
    const Updatedata=async()=>
    {
        
        const responce1=await axios.get("http://localhost:8000/entercheckdata/"+cpn)
        {
            if(responce1.data)
            {
                const responce2=await axios.post("http://localhost:8000/updatedata/"+cpn+"/"+cpd+"/"+cpv+"/"+cpa+"/"+etime)
                if(responce2.data)
                {
                    serr2("Project details updateded sucessfully")
                     window.location.reload(3)
                }
                else
                {
                    serr2("Try again")
                }
            }
            else
            {
                serr2('Project name not found')
            }
        }
    }

    //Search data in change land project
    const Search=async()=>
    {
        const responce=await axios.get("http://localhost:8000/entercheckdata/"+cpn)
        if(responce.data)
        {
            spdsc(responce.data)
            scpd(responce.data.project_desc);
            scpv(responce.data.project_value)
            scpa(responce.data.project_address)
            sctime(responce.data.project_takentime)
        }
    }

// date function
    useEffect(() => {
        const etime = moment().format('YYYY-MM-DD HH:mm:ss Z');
        setime(etime);
    }, []);

    // Show land project data
    useEffect(()=>
    {
        axios.get("http://localhost:8000/showdata")
        .then((result)=>
        {
            ssld(result.data);
        })
    },[])
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>
                    <div>
                    <div className="land">
                        <Link className="landitem" onClick={Elpd}>Enter Land project data</Link>
                        <Link className="landitem" onClick={Clpd}>change Land project data</Link>
                        <Link className="landitem" onClick={Vled}>view/show Land entered data</Link>
                        <Link className="landitem" onClick={Sltv}>show Land total value</Link>
                    </div>

{/* Enter land details */}
                    <div className="editdis" style={{ display: 'none' }} id='eld'>
                        <h1 style={{color:'red',textAlign:'center'}}>Enter Land Detilas</h1>
                        <div>
                        <table className="landtable">
                                <tr>
                                    <td><label className="landinput"><b>Land Project Name </b></label></td>
                                    <td><input type="text" className="landinput" onChange={(e)=>sepn(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput"><b>Land Project Description </b></label></td>
                                    <td><textarea type="paragraph" className="landinput" style={{width:'80%',height:'20vh'}} onChange={(e)=>sepd(e.target.value)}></textarea></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput"><b>Enter Land value in USD </b></label></td>
                                    <td><input type='number' className="landinput" onChange={(e)=>sepv(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput"><b>Land Address</b></label></td>
                                    <td><textarea type="paragraph" className="landinput" style={{width:'80%',height:'10vh'}} onChange={(e)=>sepa(e.target.value)}></textarea></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput"><b>Date & Time</b></label></td>
                                    <td>{etime}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} style={{ textAlign:'center', width: '20%', height: '4vh', color: 'red' }}><b>{err1}</b></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}><button type="submit" style={{ margin: "2% 0% 0% 43%", width: '20%', height: '4vh', backgroundColor: 'blue', color: 'white' }} onClick={Enterdata}> Submit</button></td>
                                </tr>
                            </table>
                            </div>
                    </div>

{/* Change land details */}
                     <div className="editdis" style={{display:'none'}} id="cld">
                        <h1 style={{color:'red',textAlign:'center'}}>Edit Land Detilas</h1>
                        <div>
                            <table className="landtable">
                            <tr>
                                    <td><label for='search' className="landinput"><b>Land Project Name</b></label></td>
                                    <td><input id='search' type="text" className="landinput"  placeholder="Enter project name" onChange={(e)=>scpn(e.target.value)}></input>
                                    <Link style={{padding:'2px',borderRadius:'8px',backgroundColor:'green',textDecoration:'none',marginLeft:'1vh',color:'white'}} onClick={Search}>search</Link></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput"><b>Land Project Description</b></label></td>
                                    <td><textarea type="paragraph" className="landinput" defaultValue={pdsc.project_desc} style={{width:'80%',height:'20vh'}} onChange={(e)=>scpd(e.target.value)}></textarea></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput"><b>Enter Land value in USD</b></label></td>
                                    <td><input type='number' className="landinput" defaultValue={pdsc.project_value}  onChange={(e)=>scpv(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput"><b>Land Address</b></label></td>
                                    <td><textarea type="paragraph" className="landinput" defaultValue={pdsc.project_address} style={{width:'80%',height:'10vh'}} onChange={(e)=>scpa(e.target.value)}></textarea></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput"><b>Land Create Date</b></label></td>
                                    <td>{ctime}</td>
                                </tr>
                                <tr>
                                    <td><label className="landinput"><b>Update Date & Time</b></label></td>
                                    <td>{etime}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} style={{ textAlign:'center', width: '20%', height: '4vh', color: 'red' }}><b>{err2}</b></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}><button type="submit" style={{ margin: "2% 0% 0% 43%", width: '20%', height: '4vh', backgroundColor: 'blue', color: 'white' }} onClick={Updatedata}>Update</button></td>
                                </tr>
                            </table>
                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                        </div>
                    </div>

{/* Show land details */}
                     <div className="editdis" style={{display:'none'}} id="sld">
                        <h1 style={{color:'red',textAlign:'center'}}>Land Detilas</h1>
                        <div>
                           <table className="landtable">
                            {
                                sld.map((val1,index)=>
                                (
                                    <>
                                    <tr>
                                    <td style={{color:'darkblue'}}><b>{index+1}</b></td>
                                    <td><b>Land Project</b></td>
                                    <td>{val1.project_name}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td ><b>Land Project description</b></td>
                                    <td>{val1.project_desc}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><b>Land project Value</b></td>
                                    <td>{val1.project_value}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><b>Land Project Address</b></td>
                                    <td>{val1.project_address}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><b>Land Project Create Date & Time</b></td>
                                    <td>{val1.project_takentime}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td style={{width:'40%'}}><b>Land Project Updated Date & Time</b></td>
                                    <td>{val1.project_changetime}</td>
                                </tr>
                                <br/><br/>
                                </>
                                ))
                            }
                           </table>
                        </div>
                    </div>


{/* Show land vale */}
                     <div className="editdis" style={{display:'none'}} id="slv">
                        <h1 style={{color:'red',textAlign:'center'}}>Land Value</h1>
                        <div>
                            <table className="landtable">
                                {
                                    sld.map((val2,index)=>
                                    (
                                        <>
                                        <p style={{display:"none"}}>{x=x+(parseInt(val2.project_value))}</p>
                                            <tr>
                                                <td><b>{index+1}</b></td>
                                                <td><b>Land Project name</b></td>
                                                <td>{val2.project_name}</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td><b>Land value in USD</b></td>
                                                <td>{val2.project_value}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3} ><hr color="green"/></td>
                                            </tr>
                                             <br></br>
                                         </>
                                    ))
                                }
                                <tr>
                                    <td style={{fontSize:'28px', backgroundColor:"lightgreen",color:'black'}} colSpan={3}>The Land total value of all projects is <b style={{color:"#330033"}}>{x}</b> USD</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
// style={{margin:'10% 0% 0% 5%'}}