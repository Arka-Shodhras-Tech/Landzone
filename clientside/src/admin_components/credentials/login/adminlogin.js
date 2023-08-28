import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
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
            const responce=await axios.get("https://landzone-server.onrender.com/checklogin/"+gmail+"/"+password);
            if(responce.data.err!=="email or password incorrect")
            {
                if(responce.data.__v===3)
                {
                    localStorage.mainadmin=responce.data.Gmail;
                    localStorage.adminmail=responce.data.Gmail;
                    localStorage.name = responce.data.Lastname;
                    nav('/adminpage')
                    window.location.reload(3);
                }
                else if(responce.data.__v===2)
                {
                localStorage.mainadmin='';
                localStorage.name = responce.data.Lastname;
                localStorage.adminmail=responce.data.Gmail;
                nav('/adminpage')
                window.location.reload(3);
                }
                else
                {
                    nav('/userlogin');
                }
        }
        else
        {
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
    return(
        <>
        <Navbar/>
        <div className="home">
       <table className='tabledata'>
            <tr>
                <td colSpan={2} align='center'><h3>Admin Login</h3></td>
            </tr>
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
        </table>        
        </div>
        <Footer/>
        </>
    )
}
