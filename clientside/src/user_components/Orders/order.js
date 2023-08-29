import axios from 'axios';
import React from 'react';
export const Order=()=>
{
    const Submit=async()=>
    {
        const responce=await axios.post('https://landzone-server.onrender.com/order')
        {
            if(responce)
            {
                alert("Sucessfully ordered");
            }
        }
    }
    return(
        <>
        <div>
            <tr>
                <td>
                    <button onClick={Submit}>Submit</button>
                </td>
            </tr>
        </div>
        </>
    )
}