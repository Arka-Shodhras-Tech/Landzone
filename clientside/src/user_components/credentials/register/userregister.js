import axios from "axios";
import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../../admin_components/home/nav&foot&contact&about/navbar";
export const UserRegister=()=>{
    const nav=useNavigate();
    const [fname,sfname]=useState("");
    const [lname,slname]=useState("");
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [cpassword,scpassword]=useState("");
    const [phonenumber,sphonenumber]=useState('');
    const [err,serr]=useState("");
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Show=async()=>
    {
        fname===''?serr("First name required"):<b></b> && lname===''?serr("Last name required"):<b></b> && phonenumber===''?serr("Number required"):<b></b> &&
        password===''?serr("Password required"):<b></b> && gmail===''?serr("Gmail required"):<b></b> && cpassword===''?serr("Confirm password required"):<b></b>
        if(emailtest.test(gmail))
        {
            const res=await axios.get("https://landzone-server.onrender.com/check/"+gmail)
            {
                if(res.data)
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
                        await axios.post("https://landzone-server.onrender.com/register/"+fname+"/"+lname+"/"+gmail+"/"+password+"/"+phonenumber)?
                        alert("Sucessfully registered")&&nav("/userlogin"):serr("Error");
                       }
                       catch(error)
                       {
                        console.log(error);
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
                    <label for="name"><b>First Name </b></label>
                </td>
                <td className="input">
                <input type='text' name='fname' id="fname" placeholder='Enter your full name' onChange={(e)=>sfname(e.target.value.charAt(0).toLocaleUpperCase()+e.target.value.slice(1))}></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                    <label for="name"><b>Last Name </b></label>
                </td>
                <td className="input">
                <input type='text' name='lname' id="lname" placeholder='Enter your full name' onChange={(e)=>slname(e.target.value.charAt(0).toLocaleUpperCase()+e.target.value.slice(1))} required></input>
                </td>
            </tr>
            <tr>
                <td className="input">
                <label for="gmail"><b>Gmail </b></label>
                </td>
                <td className="input">
                <input type='mail' name='gmail' id="gmail" required placeholder='Enter your mail' onChange={(e)=>sgmail(e.target.value)}></input>
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