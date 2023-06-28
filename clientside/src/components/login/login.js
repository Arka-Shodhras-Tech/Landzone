import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../navfoot/navbar";
export const Adminlogin=()=>
{
    const nav=useNavigate();
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [error,serror]=useState("");
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const Show=async()=>{
        if(emailtest.test(gmail))
        {
            const responce=await axios.get("http://localhost:8000/adminlogin/"+gmail+"/"+password);
            if(responce.data)
        {
            localStorage.name=responce.data.name;
            localStorage.gmail=responce.data.gmail;
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
    const Regi=async()=>{
        nav("/adminregister")
    }
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
                <input type='mail' name='gmail' placeholder='Enter your mail' onChange={(e)=>sgmail(e.target.value)}></input>
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
                <td style={{paddingTop:"4vh",paddingBottom:'5vh',textAlign:"center"}} colSpan={2}>
                <button style={{background:"none",color:'Blue', border:'none'}} onClick={Show}><b>Login</b></button>
                </td>
            </tr>
            <tr>
                <td>
                    <button  style={{background:'none',border:'none',marginBottom:'5vh',color:'blue'}} onClick={Regi}><b>New account</b></button>
                </td>
                <td  align="right">
                    <button style={{background:'none',border:'none',marginBottom:'5vh',color:"blueviolet"}} onClick={Upadate}><b>Forgot password</b></button>
                </td>
            </tr>
        </table>        
        </div>
        <Footer/>
        </>
    )
}
export const Userlogin=()=>
{
    const nav=useNavigate();
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [error,serror]=useState("");
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const Show=async()=>{
        if(emailtest.test(gmail))
        {
            const responce=await axios.get("http://localhost:8000/login/"+gmail+"/"+password);
            if(responce.data)
        {
            localStorage.name=responce.data.name;
            localStorage.gmail=responce.data.gmail;
            (nav("/gamep"))
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
    const Regi=async()=>{
        nav("/userregister")
    }
    const Upadate=async()=>{
        nav("/userupdate")
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
                <input type='mail' name='gmail' placeholder='Enter your mail' onChange={(e)=>sgmail(e.target.value)}></input>
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
                <td style={{paddingTop:"4vh",paddingBottom:'5vh',textAlign:"center"}} colSpan={2}>
                <button style={{background:"none",color:'blue', border:'none'}} onClick={Show}><b>Login</b></button>
                </td>
            </tr>
            <tr>
                <td>
                    <button  style={{background:'none',border:'none',marginBottom:'5vh',color:'blue'}} onClick={Regi}><b>New account</b></button>
                </td>
                <td  align="right">
                    <button style={{background:'none',border:'none',marginBottom:'5vh',color:"blueviolet"}} onClick={Upadate}><b>Forgot password</b></button>
                </td>
            </tr>
        </table>        
        </div>
        </>
        )
}