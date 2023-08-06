import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar1 } from "../../../home/nav&foot&contact&about/navbar";
import { Comp } from "../../asidebar/asidebar";
export const Adminusermanage=()=>
{
    const [disen,sdisen]=useState([]);
    const [approve,sapprove]=useState([]);
    const [check,scheck]=useState([]);
    const [adminlist,sadminlist]=useState([]);
    const [select,sselect]=useState([]);
    const Ea=()=>
    {
        document.getElementById('enableadmin').style.display="block";
        document.getElementById('disableadmin').style.display="none";
    }
    const Da=()=>
    {
        document.getElementById('enableadmin').style.display="none";
        document.getElementById('disableadmin').style.display="block";
    }

    // Enable user as admin
    const Approve=async()=>
    {
        try
        {
            const responce1=await axios.get("http://localhost:8000/admincheck/"+approve.Gmail)&& await axios.get("http://localhost:8000/admincheck/"+approve.Gmail)
            if(responce1.data)
            {
                alert("Admin Already Exist")
            }
            else
            {
                const responce=await axios.post("http://localhost:8000/enableadmin/"+approve.Name+"/"+approve.Gmail+"/"+approve.Password+"/"+approve.Cpassword+"/"+approve.Phone_Number)
                if(responce.data)
                {
                    alert("Sucessfully "+approve.Gmail+" Approved");
                    // document.getElementById(approve.Gmail).style.display="none";
                    window.location.reload(1);
                }
                else
                {
                    alert("Try again");
                }
            }
        }
        catch(e)
        {
            console.log(e);
        }
    }
    const Disapprove=async()=>
    {
        try
        {
            const responce=await axios.post("http://localhost:8000/disableadmin/"+approve.Gmail)
            if(responce.data)
            {
                alert("Successfully disabled "+approve.Gmail);
                window.location.reload(1);
            }
            else
            {
                alert("Try again");
            }
        }
        catch(e)
        {}
    }
    useEffect(()=>
    {
        try
        {
        axios.get("http://localhost:8000/disableshow")
        .then((result) => {
            sdisen(result.data)
        })
        // axios.get("http://localhost:8000/userlist")
        // .then((result) => {
        //     sdisable(result.data)
        // })
        axios.get("http://localhost:8000/saveadminlist")
        .then((result)=>
        {
            scheck(result.data)
        })
        axios.get("http://localhost:8000/adminlist")
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
        <Navbar1/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section className="dash">
                    <div>
                    <td><input id='search' value={select}   type="text" autoComplete="none" className="admincheck"  placeholder="Enter User mail or name" onChange={(e)=>sselect(e.target.value)}></input></td>
                    </div>
                    <div className="editdis">
                        <table className="aufltable">
                        <tr>
                            <th>S.no</th>
                            <th>User Detilas</th>
                            <th>Select</th>
                        </tr>
                       {
                        disen.filter(user=>(user.Gmail).includes(select)||(user.Name).includes(select)).map((enable,index)=>
                        (
                            <tr>
                                <td><b>{index+1}</b></td>
                                <td style={{paddingLeft:'20%'}}>
                                    <tr>{enable.Name}</tr>
                                    <tr>{enable.Gmail}</tr>
                                    <tr>{enable.Phone_Number}</tr>
                                </td>
                                <td>
                                    <button id={enable.Gmail+enable.Name} onClick={Approve} onClickCapture={(e)=>sapprove(enable)} style={{ margin: "2% 0% 0% 32%", width: '45%', height: '4vh', backgroundColor:'rgb(85, 236, 95)', color: 'white',border:'none', borderRadius:'20px'}}>Enable As Admin</button>
                                    <button id={enable.Gmail} onClick={Disapprove} onClickCapture={(e)=>sapprove(enable)} style={{ margin: "2% 0% 0% 43%", width: '45%', height: '4vh', backgroundColor: 'orangered', color: 'white',border:'none', borderRadius:'20px',display:'none'}}>Disable As Admin</button>
                                </td>
                            </tr>
                        ))
                       }
                       <tr>
                       </tr>
                        </table>
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
