import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../../navfoot/navbar";
import { Comp } from "../../company/company";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export const Usermanage=()=>
{
    const [dat,sdat]=useState([]);
    const [crt,scrt]=useState('');
    // const nav=useNavigate();
    const Aprove=async()=>
    {
        document.getElementById('approvedisplay').style.display="block";
        document.getElementById('disenadisplay').style.display="none";
        document.getElementById('editdisplay').style.display="none";
        document.getElementById('reasondisplay').style.display='none'
    }
    const Edit=async()=>
    {
        document.getElementById('approvedisplay').style.display="none";
        document.getElementById('editdisplay').style.display="block";
        document.getElementById('disenadisplay').style.display="none";
        document.getElementById('reasondisplay').style.display='none'
    }
    const Disena=async()=>
    {
        document.getElementById('approvedisplay').style.display="none";
        document.getElementById('disenadisplay').style.display="block";
        document.getElementById('editdisplay').style.display="none";
    }
    const View=async()=>
    {
        console.log(crt)
        document.getElementById('disenadisplay').style.display="none";
        document.getElementById('personinfo').style.display='block';
    }

    const Disable=async()=>
    {
        document.getElementById('reasondisplay').style.display='block'
    }
    const Enable=async()=>
    {
        document.getElementById('enable').style.display='none';
        document.getElementById('confirm').style.display='block';
        document.getElementById('reasondisplay').style.display='none';
    }
    const Disconfirm=async()=>
    {
        document.getElementById('reasondisplay').style.display='none'
    }
    // const Enconfirm=async()=>
    // {
    //     document.getElementById('confirm').style.display='none';
    // }
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

                    {/* user management list */}
                   <div style={{display:'flex'}}>
                   <div className="usrmng">
                           <Link className="usrmngitem" onClick={Aprove}>Approve Users From List</Link> 
                           <Link className="usrmngitem" onClick={Edit}>Eidt User</Link>
                           <Link className="usrmngitem" onClick={Disena}>Disable/Enable Users</Link>
                    </div>


                    {/* Approve users from list */}
                    <div>
                                <div className="editdis" style={{ display: 'none' }} id="approvedisplay">
                                    <div>
                                        <table className="aufltable">
                                            <tr>
                                                <th>S.No</th>
                                                <th>Name</th>
                                                <th>G-mail</th>
                                                <th>Select</th>
                                            </tr>
                                            {
                                                dat.map((teja, index) => (
                                                    <tr>
                                                        <td><b>{index + 1}</b></td>
                                                        <td><b>{teja.name}</b></td>
                                                        <td><b>{teja.gmail}</b></td>
                                                        <td>
                                                            <input id={index} name="same" type="radio"></input>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </table>
                                        <button type="submit" style={{ margin: "2% 0% 0% 43%", width: '10%', height: '4vh', backgroundColor: 'blue', color: 'white' }}> Submit</button>
                                    </div>
                    </div>


                {/* Edit user */}
                    <div className="editdis" style={{display:'none'}} id="editdisplay">
                        <div>
                        <div>
                                        <table className="aufltable">
                                            <tr>
                                                <th>S.No</th>
                                                <th>Name</th>
                                                <th>G-mail</th>
                                                <th>Modify</th>
                                            </tr>
                                            {
                                                dat.map((teja, index) => (
                                                    <tr>
                                                        <td><b>{index + 1}</b></td>
                                                        <td><b>{teja.name}</b></td>
                                                        <td><b>{teja.gmail}</b></td>
                                                        <td>
                                                            <Link to='/updateprofile' style={{textDecoration:'none'}}>Edit</Link>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </table>
                                    </div>
                        </div>
                    </div>


                    {/* Enable and Disable user */}
                    <div className="editdis" style={{display:'none'}} id="disenadisplay">
                        <div>
                        <div>
                            <table className="aufltable">
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>G-mail</th>
                                    <th>Select for en/dis</th>
                                </tr>
                                {
                                    dat.map((val, index) => (
                                        <tr>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{val.name}</b></td>
                                            <td><b>{val.gmail}</b></td>
                                            <td>
                                                <input id={index} style={{width:'50px'}} name="same" type="radio" onChange={(e)=>scrt(val.gmail)}></input>
                                            </td>
                                        </tr>
                                    ))
                                }
                                        </table>
                                        <button style={{ margin: "2% 0% 0% 43%", width: '20%', height: '4vh', backgroundColor: 'green', color: 'white' }} onClick={View}><b>Submit</b></button>
                                    </div>
                        </div>
                    </div>



                    {/* after view on enable disable user form... displays selected person data */}
                    <div className="editdis" style={{display:'none'}} id="personinfo">
                        <table>
                        {
                             dat.map((val1) => (
                                 <tr>
                                    {
                                        val1.gmail===crt?
                                        <>
                                        <td><b>{val1.name}</b></td>
                                        <td><b>{val1.gmail}</b></td>
                                        </>:{id="disply"}
                                    }
                                 </tr>
                             ))
                        }
                            <tr>
                                <td><Link onClick={Disable}>Disable User</Link></td>
                                <td><Link  onClick={Enable}>Enable User</Link></td>
                            </tr>
                        </table>
                    </div>
                    {/* <div className="disenadis" style={{display:'none'}} id="disenadisplay">
                        <Link className="disenadisbtn" onClick={Disable}>Disable User</Link>
                        <Link className="disenadisbtn" onClick={Enable}>Enable User</Link>
                    </div> */}



                    {/* Reason and confirm detilas of disable enable users */}
                    <div>
                    <div className="disenareason" style={{display:'none'}} id="reasondisplay">
                        <input type="text" placeholder="Reason..." style={{width:'80vh',height:'10vh',fontSize:'15px'}}></input>
                        <button type="submit" style={{ margin: "2% 0% 0% 43%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }} onClick={Disconfirm}>Confirm</button>
                       </div>
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
