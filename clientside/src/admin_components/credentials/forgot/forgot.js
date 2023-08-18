import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../home/nav&foot&contact&about/navbar";
export const Adminupdate=()=>{
    const nav=useNavigate();
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [cpassword,scpassword]=useState("");
    const [err,serr]=useState("");
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Updtshow=async()=>{
        if(emailtest.test(gmail))
        {
            const responce1=await axios.get("https://landzone-server.onrender.com/check/"+gmail);
        if(responce1.data)
        {
            if((password.length)>7)
               {
                if(password===cpassword)
                {
                    const responce=await axios.post("https://landzone-server.onrender.com/update/"+gmail+"/"+password+"/"+cpassword)
                    if(responce.data)
                        {
                             nav('/adminlogin');  
                        }
                    else
                        {
                            serr("Again change")
                        }
                }
                else
                {
                    serr("passwords not match")
                }
               }
               else
               {
                serr("Pasword length must be >=8")
               }
        }
        else
        {
            serr("Mail not found");
        }
        }
        else
        {
            serr("Enter in mail formate")
        }
    }
    return(
        <>
        <Navbar/>
        <div className="home">
        <table className='tabledata'>
            <tr>
                <td className="input">
                    <label for="mail"><b>Gmail:: </b></label>
                </td>
                <td className="input">
                <input type='mail' name='mail' placeholder='Enter email' onChange={(e)=>sgmail(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                <label for="password"><b>Password:: </b></label>
                </td>
                <td className="input">
                <input type='password' name='password' placeholder='Enter password' onChange={(e)=>spassword(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                <label for="cpassword"><b>Confirm Password::</b></label>
                </td>
                <td className="input">
                <input type='password' name='cpassword' placeholder='Enter your password' onChange={(e)=>scpassword(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td colSpan={2} style={{color:"red",paddingTop:'2vh'}} align="center"><b>{err}</b></td>
            </tr>
            <tr>
                <td className="input" style={{paddingBottom:'5vh'}} colSpan={2}>
                <button style={{backgroundColor:'greenyellow'}} onClick={Updtshow}><b>Update</b></button>
                </td>
            </tr>
        </table>
        </div>
        <Footer/> 
        </>
    )
}

