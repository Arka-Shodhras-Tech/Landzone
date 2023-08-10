import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../home/nav&foot&contact&about/navbar";
export const Adminlogin=()=>
{
    const nav=useNavigate();
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [error,serror]=useState("");
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Show=async(e)=>{
        try
        {
            if(emailtest.test(gmail))
        {
            const responce1=await axios.get("http://localhost:8000/mainadmin1/"+gmail)
            if(responce1.data)
            {
                localStorage.adminmail=responce1.data.Gmail;
            }
            else
            {
                localStorage.adminmail=null;
            }
            const responce=await axios.get("http://localhost:8000/adminlogin/"+gmail+"/"+password);
            if(responce.data)
        {
                localStorage.name = responce.data.Name;
                localStorage.gmail = responce.data.Gmail;
                nav('/adminpage');
        }
        else{
            serror("password or mail incorrect")
        }
        }
        else
        {
            serror("Enter in email formate")
        }
        }
        catch(e)
        {
            console.log(e.data);
        }

    }
    // const Regi=async()=>{
    //     nav("/adminregister")
    // }
    const Upadate=async()=>{
        nav("/adminupdate")
    }
    return(
        <>
        <Navbar/>
        <div className="home">
       <table className='tabledata'>
            <tr>
            <td className="input">
                <label for="gmail"><b>Gmail:: </b></label>
            </td>
                <td className="input">
                <input type='mail' name='gmail' autoComplete='none' placeholder='Enter your mail' onChange={(e)=>sgmail(e.target.value)}></input>
                </td>
            </tr>
            <tr>
            <td className="input">
                <label for="password"><b>Password:: </b></label>
            </td>
                <td className="input">
                <input type='password' name='password' placeholder='Enter your password' onChange={(e)=>spassword(e.target.value)}></input>
                </td>
            </tr>
            <td style={{color:'orangered'}} colSpan={2} align="center"><b>{error}</b></td>
            <tr>
                <td colSpan={2}>
                <button onClick={Show}><b>Login</b></button>
                </td>
            </tr>
            <tr >
                {/* <td >
                    <button style={{width:'20vh'}} onClick={Regi}><b>New account</b></button>
                </td> */}
                <td>
                    <button onClick={Upadate}><b>Forgot password</b></button>
                </td>
            </tr>
        </table>        
        </div>
        <Footer/>
        </>
    )
}
