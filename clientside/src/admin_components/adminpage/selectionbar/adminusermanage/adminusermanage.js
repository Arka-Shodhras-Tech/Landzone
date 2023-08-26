import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../../home/nav&foot&contact&about/navbar";
import { Comp } from "../../asidebar/asidebar";
export const Adminusermanage=()=>
{
    const [disen,sdisen]=useState([]);
    const [approve,sapprove]=useState([]);
    const [check,scheck]=useState([]);
    const [adminlist,sadminlist]=useState([]);
    const [select,sselect]=useState([]);

    //************************************ Enable user as admin *************************************************//
    const Approve=async()=>
    {
        try
        {
            const res=await axios.get("https://landzone-server.onrender.com/admincheck/"+approve.Gmail)
            {
                if(res.data.__v==2)
                {
                    alert("Admin Already Exist")
                }
                else
                {
                    await axios.post("https://landzone-server.onrender.com/approveadmin/"+approve.Gmail)?alert("Sucessfully "+approve.Gmail+" Approved"):alert("Try again");
                    window.location.reload(1);
                }
            }
        }
        catch(e)
        {
            console.log(e);
        }
    }


    // ************************************* Disable admin ********************************************************//
    const Disapprove=async()=>
    {
        try
        {
            await axios.post("https://landzone-server.onrender.com/disableadmin/"+approve.Gmail)?
            alert("Successfully disabled "+approve.Gmail):
            alert("Try again");
            window.location.reload(1);
        }
        catch(e)
        {
            console.log(e);
        }
    }
    // ************************************** Main Admin *******************************************//
    const Addadmin=async()=>
    {
        document.getElementById("admin").style.display="block";
        const responce=await axios.get("https://landzone-server.onrender.com/levelsdata")
        if(responce.data)
        {
            try
            {
                document.getElementById(responce.data.Gmail+1).innerHTML="Selected";
            }
            catch
            {
                alert("Refresh Page");
            }
        }
    }
    const Disadmin=()=>
    {
        document.getElementById("admin").style.display="none";
    }
    const Mainadmin=async()=>
    {
       try
       {
        const responce=await axios.post("https://landzone-server.onrender.com/mainadmin/"+approve.Gmail)
        if(responce.data)
        {
            alert("Sucessfully Admited");
            document.getElementById(responce.data.Gmail).style.display="none";
        }
       }
       catch(e)
       {
         console.log(e);
       }
    }
    useEffect(()=>
    {
        try
        {
        axios.get("https://landzone-server.onrender.com/levelsdata")
        .then((result) => {
            sdisen(result.data)
        })
        axios.get("https://landzone-server.onrender.com/adminlist")
        .then((result)=>
        {
            sadminlist(result.data)
        })
        }
        catch(e)
        {
            console.log(e);
        }
    },[]);
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section className="dash">
                <button  onClick={Addadmin}style={{ margin: "15% 0% 0% 5%", width: '15%', height: '4vh', backgroundColor:'blueviolet', color: 'white',border:'none', borderRadius:'20px'}}>Enable As Main Admin</button>
                    <div>
                    <td><input id='search' value={select}   type="text" autoComplete="none" className="admincheck"  placeholder="Enter User mail or name" onChange={(e)=>sselect(e.target.value)}></input></td>
                    </div>
                    <div className="editdis" onClick={Disadmin}>
                        <table className="aufltable">
                        <tr>
                            <th>S.no</th>
                            <th>User Detilas</th>
                        </tr>
                       {
                        disen.filter(user=>(user.Gmail).includes(select)||(user.Name).includes(select)).map((enable,index)=>
                        (
                            enable.__v===1?
                            <tr>
                                <td><b>{index+1}</b></td>
                                <td style={{paddingLeft:'15%',width:"80%"}}>
                                   <td>
                                   <tr>{enable.Name}</tr>
                                    <tr>{enable.Gmail}</tr>
                                    <tr>{enable.Phone_Number}</tr>
                                   </td>
                                   <td>
                                    <button id={enable.Gmail+enable.Name}  onClick={Approve} onClickCapture={(e)=>sapprove(enable)} style={{ margin: "2% 0% 0% 100%", width: '100%', height: '4vh', backgroundColor:'rgb(85, 236, 95)', color: 'white',border:'none', borderRadius:'20px'}}>Enable As Admin</button>
                                    <button id={enable.Gmail} onClick={Disapprove} onClickCapture={(e)=>sapprove(enable)} style={{ margin: "2% 0% 0% 100%", width: '100%', height: '4vh', backgroundColor: 'orangered', color: 'white',border:'none', borderRadius:'20px',display:'none'}}>Disable As Admin</button>
                                   </td>
                                </td>
                            </tr>:<b></b>
                        ))
                       }
                       <tr>
                       </tr>
                        </table>
                    </div>
                    <div className="editdis1" style={{display:'none'}} id="admin">
                        <tr>
                            <th>S.no</th>
                            <th>User Mail</th>
                            <th>Select admin</th>
                        </tr>
                        {
                            disen.map((admin,index)=>
                            (
                                admin.__v===2?
                                <tr style={{color:'green'}}>
                                    <td>{index+1}</td>
                                    <td>{admin.Gmail}</td>
                                    <td>
                                    <button id={admin.Gmail+1} onClick={Mainadmin} onClickCapture={(e)=>sapprove(admin)} style={{width: '100%', height: '4vh', backgroundColor: 'yellow', color: 'green',border:'none', borderRadius:'20px'}}><b>Select</b></button>
                                    </td>
                                </tr>:<b></b>
                            ))
                        }
                    </div>
                    {
                        check.map((x)=>
                        {
                            adminlist.map((y)=>
                            {
                                if(x.Gmail===y.Gmail)
                                {
                                    try
                                    {
                                        document.getElementById(x.Gmail).style.display="block";
                                        document.getElementById(x.Gmail+x.Name).style.display="none";
                                    }
                                    catch(e)
                                    {
                                        console.log(e);
                                    }
                                }
                            })
                        })
                    } 
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
