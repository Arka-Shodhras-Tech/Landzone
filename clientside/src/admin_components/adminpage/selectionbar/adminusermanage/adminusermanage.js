import axios from "axios";
import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../../../home/nav&foot&contact&about/navbar";
import { Comp } from "../../asidebar/asidebar";
import { useNavigate } from "react-router-dom";
export const Adminusermanage=()=>
{
    const nav=useNavigate();
    const [disen,sdisen]=useState([]);
    const [approve,sapprove]=useState([]);
    const [adminlist,sadminlist]=useState([]);
    const [select,sselect]=useState([]);

    //************************************ Enable user as admin *************************************************//
    const Approve=async()=>
    {
        try
        {
            await axios.post("https://landzone-server.onrender.com/approveadmin/"+approve.Gmail)?alert("Sucessfully "+approve.Gmail+" Approved"):alert("Try again");
            window.location.reload(1);
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
            await axios.post("https://landzone-server.onrender.com/approveuser/"+approve.Gmail)?
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
    }
    const Disadmin=()=>
    {
        document.getElementById("admin").style.display="none";
    }
    const Mainadmin=async()=>
    {
       try
       {
        let confirm=prompt("Enter your email id");
        if(confirm===localStorage.mainadmin)
        {
            const responce=await axios.post("https://landzone-server.onrender.com/approvesuperadmin/"+approve.Gmail)&&
        await axios.post("https://landzone-server.onrender.com/approveadmin/"+localStorage.mainadmin)
        if(responce)
        {
            alert("Sucessfully Admited");
            nav('/');
        }
        else
        {
            alert("Enter correct super admin mail");
        }
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
                    <td><input id='search' value={select} type="text" autoComplete="none" className="admincheck"  placeholder="Enter User mail or name" onChange={(e)=>sselect(e.target.value)}></input></td>
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
                            enable.isApproved===true&&enable.isSuperAdmin===false || enable.isAdmin===true?
                            <tr>
                                <td><b>{index+1}</b></td>
                                <td style={{paddingLeft:'15%',width:"80%"}}>
                                   <td>
                                   <tr>{enable.Name}</tr>
                                    <tr>{enable.Gmail}</tr>
                                    <tr>{enable.Phone_Number}</tr>
                                   </td>
                                   <td>
                                    {
                                        enable.__v===2?<button onClick={Disapprove} onClickCapture={(e)=>sapprove(enable)} style={{ margin: "2% 0% 0% 100%", width: '100%', height: '4vh', backgroundColor: 'orangered', color: 'white',border:'none', borderRadius:'20px'}}>Disable As Admin</button>:
                                        <button  onClick={Approve} onClickCapture={(e)=>sapprove(enable)} style={{ margin: "2% 0% 0% 100%", width: '100%', height: '4vh', backgroundColor:'rgb(85, 236, 95)', color: 'white',border:'none', borderRadius:'20px'}}>Enable As Admin</button>
                                    }
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
                                admin.isAdmin===true || admin.isSuperAdmin===true?
                                <tr style={{color:'green'}}>
                                    <td>{index+1}</td>
                                    <td>{admin.Gmail}</td>
                                    <td>
                                    {
                                        admin.__v===3?<button onClickCapture={(e)=>sapprove(admin)} style={{width: '100%', height: '4vh', backgroundColor: 'yellow', color: 'green',border:'none', borderRadius:'20px'}}><b>Selected</b></button>:
                                        <button onClick={Mainadmin} onClickCapture={(e)=>sapprove(admin)} style={{width: '100%', height: '4vh', backgroundColor: 'yellow', color: 'green',border:'none', borderRadius:'20px'}}><b>Select</b></button>
                                    }
                                    </td>
                                </tr>:<b></b>
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
