import axios from "axios";
import moment from 'moment';
import 'moment-timezone';
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar1 } from "../../../home/nav&foot&contact&about/navbar";
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
    const [sa,ssa]=useState([]);
    const [la,sla]=useState([]);
    const [ca,sca]=useState([]);
    const [pa,spa]=useState([]);
    const [ra,sra]=useState([]);
    const [csa,scsa]=useState([]);
    const [cla,scla]=useState([]);
    const [cca,scca]=useState([]);
    const [cpca,scpca]=useState([]);
    const [cra,scra]=useState([]);
    const [ctime,sctime]=useState("");
    const [sld,ssld]=useState([]);
    const [err1,serr1]=useState([]);
    const [err2,serr2]=useState([]);
    const [pdsc,spdsc]=useState([]);
    const [ecn,secn]=useState([]);
    const [ccn,sccn]=useState([]);
    const [search,ssearch]=useState([]);
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
        localStorage.q=0;
       try
       {
        const responce1=await axios.get("http://localhost:8000/entercheckdata/"+epn)
        {
            if(responce1.data)
            {
                serr1("Project name Existed please enter different project name")
            }
            else
            {
               const responce2= await axios.post("http://localhost:8000/enterdata/"+epn+"/"+epd+"/"+epv+"/"+ecn+"/"+sa+"/"+la+"/"+pa+"/"+ra+"/"+ca+"/"+etime)
               {
                responce2?serr1("Your project sucessfully saved"):serr1("Try agin")
                window.location.reload(5)
               }
            }
        }
       }
       catch(e)
       {
        console.log(e)
       }
    }
    

    // Change land project data
    const Updatedata=async()=>
    {
        localStorage.q=0;
        try
        {
            const responce1=await axios.get("http://localhost:8000/entercheckdata/"+cpn)
            {
                if(responce1.data)
                {
                    const responce2=await axios.post("http://localhost:8000/updatedata/"+cpn+"/"+cpd+"/"+cpv+"/"+ccn+"/"+csa+"/"+cla+"/"+cpca+"/"+cra+"/"+cca+"/"+etime)
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
        catch(e)
        {
            console.log(e);
        }
    }
    //Search data in change land project
    const Search=async()=>
    {
       try
       {
        const responce=await axios.get("http://localhost:8000/entercheckdata/"+cpn)
        if(responce.data)
        {
            spdsc(responce.data)
            scpd(responce.data.project_desc);
            scpv(responce.data.project_value)
            sccn(responce.data.project_cadaster)
            scsa(responce.data.project_address.Street)
            scla(responce.data.project_address.City)
            scpca(responce.data.project_address.Postal)
            scra(responce.data.project_address.State)
            scca(responce.data.project_address.Country)
            sctime(responce.data.project_takentime)
            document.getElementById('proname').style.display="none";
        }
       }
       catch(e)
       {
        console.log(e)
       }
    }
    const Proname=async()=>
    {
        document.getElementById('proname').style.display="block";
    }
    const Pronone=()=>
    {
        document.getElementById('proname').style.display="none";
    }

    // Show land project data
    useEffect(()=>
    {
        const etime = moment().format('YYYY-MM-DD HH:mm:ss Z');
        setime(etime);
        axios.get("http://localhost:8000/showdata")
        .then((result)=>
        {
            ssld(result.data);
        })
    },[])
    return(
        <>
        <Navbar1/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>
                    <div>
                    <div className="land">
                        <Link className="landitem" onClick={Elpd}>Add new Land project details</Link>
                        <Link className="landitem" onClick={Clpd}>Update existing Land project details</Link>
                        <Link className="landitem" onClick={Vled}>View existing Land project details</Link>
                        <Link className="landitem" onClick={Sltv}>View the total land value</Link>
                    </div>

{/* Enter land details */}
                    <div className="editdis" style={{ display: 'none' }} id='eld'>
                        <h1 style={{color:'red',textAlign:'center'}}>Enter Land Detilas</h1>
                        <div>
                        <table className="landtable">
                                <tr>
                                    <td><label className="landinput1" for="lpn"><b>Land Project Name </b></label></td>
                                    <td><input type="text" className="landinput" id="lpn" onChange={(e)=>sepn(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput1" for='lpd'><b>Land Project Description </b></label></td>
                                    <td><textarea type="paragraph" className="landinput" id="lpd" style={{width:'80%',height:'20vh'}} onChange={(e)=>sepd(e.target.value)}></textarea></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput1" for='elv'><b>Enter Land value in USD </b></label></td>
                                    <td><input type='number' className="landinput" id="elv" onChange={(e)=>sepv(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput1" for='ecn'><b>Enter Cadaster number </b></label></td>
                                    <td><input type='number' className="landinput" id="ecn" onChange={(e)=>secn(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                    <td className="landinput1" ><label><b>Address</b></label></td>
                                    <td className="landinput1">
                                        <tr  style={{width:'50%'}}>
                                            <td><label for="street">Street Address</label></td>
                                            <td> <textarea type="paragraph" className="landinput" id="street" onChange={(e)=>ssa(e.target.value)}></textarea></td>
                                        </tr>
                                        <tr>
                                            <td><label for="city">City or Loacality</label></td>
                                            <td><input type="text" id="city" className="landinput" onChange={(e)=>sla(e.target.value)}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label for="postal">Postal Code</label></td>
                                            <td><input type="number" id="postal" className="landinput" onChange={(e)=>spa(e.target.value)}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label for="state">State</label></td>
                                            <td><input type="text" id="state" className="landinput" onChange={(e)=>sra(e.target.value)}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label for="country">Country</label></td>
                                            <td><input type="text" id="country" className="landinput" onChange={(e)=>sca(e.target.value)}></input></td>
                                        </tr>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className="landinput1"><b>Date & Time</b></label></td>
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
                        <h1 onClick={Pronone} style={{color:'red',textAlign:'center'}}>Edit Land Detilas</h1>
                        <div>
                            <table className="landtable">
                            <tr>
                                {/* {data.fillter(project=>projectname.toLowerclass().include(search.toLowercase())).map(val1)} */}
                                    <td><label for='search' className="landinput1" ><b>Land Project Name</b></label></td>
                                    <td><input id='search' value={cpn}   type="text" className="landinput"  placeholder="Enter project name" onChange={(e)=>scpn(e.target.value)} onClick={Proname}></input><Link style={{padding:'2px',borderRadius:'4px',fontSize:'17px',backgroundColor:'green',textDecoration:'none',marginLeft:'1vh',color:'white'}} onClick={Search}>search</Link>
                                    <div className="projectname" style={{display:'none'}} id="proname">
                                    {
                                    sld.filter(project=>project.project_name.includes(cpn)).map((project)=>
                                    (
                                       
                                           <>
                                            <button className="probtn" onClick={(e)=>scpn(project.project_name)}><b>{project.project_name}</b></button>
                                            <br/>
                                           </>
                                    ))
                                    }
                                    </div>
                                    </td>
                                </tr>
                                <tr onClick={Pronone}>
                                    <td><label className="landinput1" for="clpd"><b>Land Project Description</b></label></td>
                                    <td><textarea type="paragraph" className="landinput" id="clpd" defaultValue={pdsc.project_desc} style={{width:'80%',height:'20vh'}} onChange={(e)=>scpd(e.target.value)}></textarea></td>
                                </tr>
                                <tr onClick={Pronone}>
                                    <td><label className="landinput1" for="celv"><b>Enter Land value in USD</b></label></td>
                                    <td><input type='number' className="landinput" id="celv" defaultValue={pdsc.project_value}  onChange={(e)=>scpv(e.target.value)}></input></td>
                                </tr>
                                <tr onClick={Pronone}>
                                    <td><label className="landinput1" for='cecn'><b>Enter Cadaster number</b></label></td>
                                    <td><input type='number' className="landinput" id="cecn" defaultValue={pdsc.project_cadaster}  onChange={(e)=>sccn(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                <td className="landinput1" ><label><b>Address</b></label></td>
                                    <td className="landinput1">
                                        <tr  style={{width:'50%'}}>
                                            <td><label for="cstreet">Street Address</label></td>
                                            <td> <textarea type="paragraph" className="landinput" id="cstreet" defaultValue={csa} onChange={(e)=>scsa(e.target.value)}></textarea></td>
                                        </tr>
                                        <tr>
                                            <td><label for="ccity">City or Loacality</label></td>
                                            <td><input type="text" id="ccity" className="landinput" defaultValue={cla} onChange={(e)=>scla(e.target.value)}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label for="cpostal">Postal Code</label></td>
                                            <td><input type="number" id="cpostal" className="landinput" defaultValue={cpca} onChange={(e)=>scpca(e.target.value)}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label for="cstate">State</label></td>
                                            <td><input type="text" id="cstate" className="landinput" defaultValue={cra} onChange={(e)=>scra(e.target.value)}></input></td>
                                        </tr>
                                        <tr>
                                            <td><label for="ccountry">Country</label></td>
                                            <td><input type="text" id="ccountry" className="landinput" defaultValue={cca} onChange={(e)=>scca(e.target.value)}></input></td>
                                        </tr>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className="landinput1"><b>Land Create Date</b></label></td>
                                    <td>{ctime}</td>
                                </tr>
                                <tr>
                                    <td><label className="landinput1"><b>Update Date & Time</b></label></td>
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
                                    <td><b>Land Project Create Date & Time</b></td>
                                    <td>{val1.project_takentime}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td style={{width:'50%'}}><b>Land Project Updated Date & Time</b></td>
                                    <td>{val1.project_changetime}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><b>Land Project Address</b></td>
                                    <td>
                                        <tr>
                                            <td><b>Street</b></td><td width='50px'><b>:</b></td><td>{val1.project_address.Street}</td>
                                        </tr>
                                        <tr>
                                            <td><b>City</b></td><td><b>:</b></td><td>{val1.project_address.City}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Postal</b></td><td><b>:</b></td><td>{val1.project_address.Postal}</td>
                                        </tr>
                                        <tr>
                                            <td><b>State</b></td><td><b>:</b></td><td>{val1.project_address.State}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Country</b></td><td><b>:</b></td><td>{val1.project_address.Country}</td>
                                        </tr>
                                    </td>
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
                                        <p style={{display:"none"}}>{x=x+(parseInt(val2.project_value))}
                                        {localStorage.totalland=x}</p>
                                            <tr>
                                                <td><b>{index+1}</b></td>
                                                <td><b>Land Project name</b></td>
                                                <td>{val2.project_name}</td>
                                                {console.log(localStorage.landlimit)}
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
                                    <td style={{fontSize:'28px', backgroundColor:"lightgreen",color:'black'}} colSpan={3}> Total value of Land in the bank is  <b style={{color:"#330033"}}>{x}</b> USD</td>
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