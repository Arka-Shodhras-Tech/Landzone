import axios from "axios";
import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../home/nav&foot&contact&about/navbar";
export const Adminregister=()=>
{
    const nav=useNavigate();
    const [name,sname]=useState("");
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [cpassword,scpassword]=useState("");
    const [err,serr]=useState("");
    const [phonenumber,sphonenumber]=useState("");
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Show=async()=>{
        if(emailtest.test(gmail))
        {
            const responce1=await axios.get("https://landzone-server.onrender.com/admincheck/"+gmail)
            if(responce1.data)
            {
                serr("Mail already Exist")
            }
            else
            {
               if(password.length>7)
               {
                if(password === cpassword)
                {
                    try
                    {
                     const responce=await axios.post("https://landzone-server.onrender.com/adminregister/"+name+"/"+gmail+"/"+password+"/"+cpassword+"/"+phonenumber)
                     responce.data? nav("/adminlogin"):serr("Error")
                    }
                    catch(error)
                    {
                     alert("Required all fields or Server bussy");
                    }
                }
                else
                {
                    serr("Passwords Not Match")
                }
               }
               else
               {
                serr("password length must be >=8")
               }
            }
        }
        else
        {
            serr("Mail must be Email format")
        }
    }
    const sign=()=>
    {
        nav("/adminlogin")
    }
    const Phone=(value)=>
    {
        sphonenumber(value)
    }
    return(
        <>
        <Navbar/>
        <div className="home">
        <table className='tabledata' style={{marginTop:'9%'}}>
            <tr>
                <td className="input">
                    <label for="name"><b>Name </b></label>
                </td>
                <td className="input">
                <input type='text' name='name' id="name" autoComplete="none" placeholder='Enter your full name' onChange={(e)=>sname(e.target.value.charAt(0).toLocaleUpperCase()+e.target.value.slice(1))}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                <label for="gmail"><b>Gmail </b></label>
                </td>
                <td className="input">
                <input type='mail' name='gmail' id="gmail"  autoComplete="none" placeholder='Enter your mail' onChange={(e)=>sgmail(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                <label for="password"><b>Password</b></label>
                </td>
                <td className="input">
                <input type='password' name='password' id="password" placeholder='Enter your password' onChange={(e)=>spassword(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                <label for="cpassword"><b>Confirm Password</b></label>
                </td>
                <td className="input">
                <input type='password' name='cpassword' id="cpassword" placeholder='Enter your confirm password' onChange={(e)=>scpassword(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                    <label for='phonenumber'><b>Phone number</b></label>
                </td>
                <td className="input">
                    <PhoneInput country="us" id="phonenumber" value={phonenumber} onChange={Phone}/>
                </td>
            </tr>
            <tr>
                <td colSpan={2} style={{color:"red",paddingTop:'2vh'}} align="center"><b>{err}</b></td>
            </tr>
            <tr>
                <td   colSpan={2}>
                <button onClick={Show}><b>Submit</b></button>
                </td>
            </tr>
            <tr>
                <td  style={{padding:'3vh 0vh 3vh 3vh'}}>
                    Already have account..?
                </td>
                <td>
                    <button  onClick={sign}><b>Sign in</b></button>
                </td>
            </tr>
        </table>
        </div>  
        <Footer/> 
        </>
    )
}