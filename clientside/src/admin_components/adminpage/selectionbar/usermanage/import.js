import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
export const Login=() =>
{
    const nav=useNavigate();
    const [name,setname]=useState([]);
    const [psw,setpsw]=useState([]);  
    const Reg=() =>{
        nav('/register')
    }
    const Submit=async()=>
    {
        try
        {
            const res=await axios.get("http://localhost:8000/login/"+name+"/"+psw)
            {
                if(res.data)
                {

                    nav('/');
                }
                else
                {
                    alert("try again");
                }
            }

        }
        catch(e)
        {
            
            console.log(e)
        }
       
    }
    
    return(
        <>
        <label>name:<input type="text" onChange={(e)=>setname(e.target.value)}></input></label><br/>
        <label>Password:<input type='password' onChange={(e)=>setpsw(e.target.value)}></input></label><br/>
        <button onClick={Submit}>Submit</button><br/>
        <div>
        <button type="button" name="button" className='button' onClick={Reg}>sign in</button>
        </div>
        </>
    )
}
