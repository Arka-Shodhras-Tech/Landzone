import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar1 } from "../../../home/nav&foot&contact&about/navbar";
import { Comp } from "../../asidebar/asidebar";
export const Adminusermanage=()=>
{
    const [disen,sdisen]=useState([]);
    const [disable,sdisable]=useState([]);
    const [approve,sapprove]=useState([]);
    const [disapprove,sdisapprove]=useState([]);
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
    const Approve=()=>
    {
        try
        {
            axios.post("http://localhost:8000/enableadmin/"+approve)?
            document.getElementById(approve.gmail).innerHTML="Approved As Admin":alert("Try again");
            axios.post("http://localhost:8000/deleteadmin/"+approve.gmail)
        }
        catch(e)
        {
            console.log(e);
        }
    }
    const Disapprove=()=>
    {

    }
    useEffect(()=>
    {
        axios.get("http://localhost:8000/disableshow")
        .then((result) => {
            sdisen(result.data)
        })
        axios.get("http://localhost:8000/adminlist")
        .then((result) => {
            sdisable(result.data)
        })
    },[]);
    return(
        <>
        <Navbar1/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section className="dash">
                    <div className="editdis">
                        <table className="aufltable">
                        <tr>
                            <th>S.no</th>
                            <th>Detilas</th>
                            <th>Select</th>
                        </tr>
                       {
                        disen.map((enable,index)=>
                        (
                            <tr>
                                <td><b>{index+1}</b></td>
                                <td style={{paddingLeft:'20%'}}>
                                    <tr>{enable.Name}</tr>
                                    <tr>{enable.Gmail}</tr>
                                    <tr>{enable.Phone_Number}</tr>
                                </td>
                                <td>
                                    <button id={enable.gmail} onClick={Approve} onClickCapture={(e)=>sapprove(enable)} style={{ margin: "2% 0% 0% 43%", width: '45%', height: '4vh', backgroundColor: 'blue', color: 'white',border:'none', borderRadius:'20px'}}>Enable As Admin</button>
                                </td>
                            </tr>
                        ))
                       }
                       <tr>
                       </tr>
                        </table>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}
