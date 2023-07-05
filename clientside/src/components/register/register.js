import axios from "axios";
import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../navfoot/navbar";
export const UserRegister=()=>{
    const nav=useNavigate();
    const [name,sname]=useState("");
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [cpassword,scpassword]=useState("");
    const [phonenumber,sphonenumber]=useState('');
    const [err,serr]=useState("");
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Show=async()=>{
        if(emailtest.test(gmail))
        {
            const responce1=await axios.get("http://localhost:8000/check/"+gmail)
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
                    const responce=await axios.post("http://localhost:8000/register/"+name+"/"+gmail+"/"+password+"/"+cpassword+"/"+phonenumber)
                    if(responce.data)   
                    {
                        nav("/userlogin")
                    }
                    else
                    {
                    serr("Error")
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
        nav("/userlogin")
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
                <input type='text' name='name' id="name" autoComplete="none" placeholder='Enter your full name' onChange={(e)=>sname(e.target.value.charAt(0).toLocaleUpperCase()+e.target.value.slice(1))} required></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                <label for="gmail"><b>Gmail </b></label>
                </td>
                <td className="input">
                <input type='mail' name='gmail' id="gmail" required autoComplete="none" placeholder='Enter your mail' onChange={(e)=>sgmail(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                <label for="password"><b>Password</b></label>
                </td>
                <td className="input">
                <input type='password' name='password' id="password" required placeholder='Enter your password' onChange={(e)=>spassword(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                <label for="cpassword"><b>Confirm Password</b></label>
                </td>
                <td className="input">
                <input type='password' name='cpassword' id="cpassword" required placeholder='Enter your confirm password' onChange={(e)=>scpassword(e.target.value)}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                    <label for='phonenumber'><b>Phone number</b></label>
                </td>
                <td className="input">
                    <PhoneInput country="us" value={phonenumber} id="phonenumber" required onChange={Phone}/>
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
                <td  style={{padding:'3vh 0vh 2vh 5vh'}}>
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

// Admin register
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
            const responce1=await axios.get("http://localhost:8000/admincheck/"+gmail)
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
                    console.log(phonenumber)
                    const responce=await axios.post("http://localhost:8000/adminregister/"+name+"/"+gmail+"/"+password+"/"+cpassword+"/"+phonenumber)
                    if(responce.data)   
                    {
                        nav("/adminlogin")
                    }
                    else
                    {
                    serr("Error")
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