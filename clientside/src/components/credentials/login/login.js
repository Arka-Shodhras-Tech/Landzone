import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../home/nav&foot&contact&about/navbar";
import GoogleLogin from 'react-google-login';
export const Adminlogin=()=>
{
    const nav=useNavigate();
    const [gmail,sgmail]=useState("");
    const [password,spassword]=useState("");
    const [error,serror]=useState("");
    const [user, suser] = useState([]);
    const clientId="587869156137-fl4o2pa496bgslcjqg60fh9ce45s4g8r.apps.googleusercontent.com";
    const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const Show=async(e)=>{
        if(emailtest.test(gmail))
        {
            const responce=await axios.get("http://localhost:8000/adminlogin/"+gmail+"/"+password);
            if(responce.data)
        {
                localStorage.name = responce.data.name;
                localStorage.gmail = responce.data.gmail;
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
    const responseGoogle = (response) =>
     {
         console.log(response);
         suser(response.profileObj);
         console.log(user)
    }
    // useEffect(()=>
    // {
    //     const Start=()=>
    //     {
    //             // gapi.clientId.init({
    //                 // clientId:clientId,
    //                 scope:""
    //             })
    //     };
    //     gapi.load('client:auth2',Start)
    // });
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
            <tr>
                <td colSpan={2}>
                <GoogleLogin clientId="587869156137-fl4o2pa496bgslcjqg60fh9ce45s4g8r.apps.googleusercontent.com" buttonText="Sign in with Google" onSuccess={responseGoogle}  onFailure={responseGoogle} cookiePolicy={'single_host_origin'}/>
                </td>
            </tr>
            <tr >
                <td >
                    <button style={{width:'20vh'}} onClick={Regi}><b>New account</b></button>
                </td>
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
                <td colSpan={2}>
                <button onClick={Show}><b>Login</b></button>
                </td>
            </tr>
            <tr >
                <td >
                    <button style={{width:'20vh'}} onClick={Regi}><b>New account</b></button>
                </td>
                <td>
                    <button onClick={Upadate}><b>Forgot password</b></button>
                </td>
            </tr>
        </table>
        </div>
        </>
        )
}