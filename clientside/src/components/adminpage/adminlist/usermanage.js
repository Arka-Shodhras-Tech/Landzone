import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Comp } from "../../company/company";
import { Footer, Navbar } from "../../navfoot/navbar";
export const Usermanage=()=>
{
    const [dat,sdat]=useState([]);
    const [crt,scrt]=useState([]);
    const [edit,sedit]=useState([]);
    const [err1,serr1]=useState([]);
    // const nav=useNavigate();

    // Transfer currency to user function
    const Transfer=async()=>
    {
        document.getElementById('transfer').style.display="block";
        document.getElementById('approvedisplay').style.display="none";
        document.getElementById('editdisplay').style.display="none";
        document.getElementById('disenadisplay').style.display="none";
        document.getElementById('transction').style.display="none";
        document.getElementById('reasondisplay').style.display='none';
    }

     // Approve user from list
     const Aprove=async()=>
     {
         document.getElementById('transfer').style.display="none";
         document.getElementById('approvedisplay').style.display="block";
         document.getElementById('disenadisplay').style.display="none";
         document.getElementById('editdisplay').style.display="none";
         document.getElementById('transction').style.display="none";
         document.getElementById('reasondisplay').style.display='none'
     }

    // Update user details
    const Edit=async()=>
    {
        document.getElementById('transfer').style.display="none";
        document.getElementById('approvedisplay').style.display="none";
        document.getElementById('editdisplay').style.display="block";
        document.getElementById('disenadisplay').style.display="none";
        document.getElementById('transction').style.display="none";
        document.getElementById('reasondisplay').style.display='none'
    }

// Disable and Enable user
    const Disena=async()=>
    {
        document.getElementById('transfer').style.display="none";
        document.getElementById('approvedisplay').style.display="none";
        document.getElementById('disenadisplay').style.display="block";
        document.getElementById('transction').style.display="none";
        document.getElementById('editdisplay').style.display="none";
    }

// View transaction history
     const Transaction=async()=>
     {
         document.getElementById('transfer').style.display='none';
         document.getElementById('approvedisplay').style.display="none";
         document.getElementById('editdisplay').style.display="none";
         document.getElementById('disenadisplay').style.display="none";
         document.getElementById('transction').style.display='block';
         document.getElementById('reasondisplay').style.display='none';
     }

// Block users
    const View=async()=>
    {
        document.getElementById('disenadisplay').style.display="none";
        document.getElementById('personinfo').style.display='block';
    }

    const Disable=async()=>
    {
        document.getElementById('reasondisplay').style.display='block'
    }
    const Enable=async()=>
    {
        document.getElementById('enable').style.display='none';
        document.getElementById('confirm').style.display='block';
        document.getElementById('reasondisplay').style.display='none';
    }
    const Disconfirm=async()=>
    {
        document.getElementById('reasondisplay').style.display='none'
    }
    // const Enconfirm=async()=>
    // {
    //     document.getElementById('confirm').style.display='none';
    // }


// Update user details
    const Edituser=async()=>
    {
        const responce1=await axios.get("http://localhost:8000/admincheck/"+edit)
        {
            if(responce1.data)
            {
                alert("Are you update the Users.. clicked OK" )
               const responce2= await axios.post("http://localhost:8000/deledit/"+responce1.data._id)
               if(responce2.data)
               {
                serr1("user details have been successfully updated")
               }
               else
               {
                serr1("Try again")
               }
            }
            else
            {
                serr1("User not found")
            }
        }
    }

    // Edit user update profile
    useEffect(()=>
{
    axios.get("http://localhost:8000/aufl")
    .then((result)=>
    {
        sdat(result.data)
    })
},[])
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <aside>
                <Comp/>
                <Link to='/usermanage' className="asidebtn" style={{marginTop:'27.1vh',backgroundColor:'white'}}><b>User Management</b></Link>
                </aside>
                <section>

{/* user management list */}
                   <div className="dash">
                           <Link className="usrmngitem" onClick={Transfer}>Transfer Currency to User</Link>
                           <Link className="usrmngitem" onClick={Aprove}>Approve Users From List</Link> 
                           <Link className="usrmngitem" onClick={Edit}>Update User Details</Link>
                           <Link className="usrmngitem" onClick={Disena}>Disable/Enable Users</Link>
                           <Link className="usrmngitem" onClick={Transaction}>view transaction history</Link>
                    </div>

{/* Transfer Currency to user */}
                    <div>
                        <div className="editdis" style={{display:'none'}} id="transfer">
                            <table className="landtable" style={{paddingTop:'35%'}}>
                                <tr>
                                    <td>
                                        <label for='gmail'><b>Enter User Email id</b></label>
                                    </td>
                                    <td>
                                        <input type="gmail" id="gmail"></input>
                                    </td>
                                    <td>
                                        <button>SUbmit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for='amount'><b>Enter the amount to be transfer</b></label>
                                    </td>
                                    <td>
                                        <input type="number" id="amount"></input>
                                    </td>
                                    <td>
                                        <button>Submit</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

{/* Approve users from list */}
                    <div>
                                <div className="editdis" style={{ display: 'none' }} id="approvedisplay">
                                    <div>
                                        <table className="aufltable">
                                            <tr>
                                                <th>S.No</th>
                                                <th for="name">Name</th>
                                                <th>G-mail</th>
                                                <th>Phone Number</th>
                                                <th>Select</th>
                                            </tr>
                                            {
                                                dat.map((val1, index) => (
                                                    <tr>
                                                        <td><b>{index + 1}</b></td>
                                                        <td>
                                                            <input style={{border:'none',height:'22px'}} type="text" id="name" defaultValue={val1.name}/>
                                                        </td>
                                                        <td><b>{val1.gmail}</b></td>
                                                        <td><b>{val1.phone_number}</b></td>
                                                        <td>
                                                            <input id={index} name={val1.name} type="radio"></input>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </table>
                                        <button type="submit" style={{ margin: "2% 0% 0% 43%", width: '10%', height: '4vh', backgroundColor: 'blue', color: 'white' }}>Approve</button>
                                    </div>
                    </div>


{/* Edit user */}
                    <div className="editdis" style={{display:'none'}} id="editdisplay">
                        <div>
                        <div>
                                        <table className="aufltable">
                                            <tr>
                                                <th>S.No</th>
                                                <th>Name</th>
                                                <th>G-mail</th>
                                                <th>Modify</th>
                                            </tr>
                                            {
                                                dat.map((val2, index) => (
                                                   <>
                                                    <tr>
                                                        <td><b>{index + 1}</b></td>
                                                        <td><b>{val2.name}</b></td>
                                                        <td><b>{val2.gmail}</b></td>
                                                        <td>
                                                        <input id={index} name="same" type="radio" onChange={(e)=>sedit(val2.gmail)}></input>
                                                        </td>
                                                    </tr>
                                                   </>
                                                ))
                                            }
                                        </table>
                                        <p style={{textAlign:'center'}}><b>{err1}</b></p>
                                        <button type="submit" style={{ margin: "2% 0% 0% 43%", width: '10%', height: '4vh', backgroundColor: 'blue', color: 'white' }} onClick={Edituser}>Update</button>
                                    </div>
                        </div>
                    </div>


{/* Enable and Disable user */}
                    <div className="editdis" style={{display:'none'}} id="disenadisplay">
                        <div>
                        <div>
                            <table className="aufltable">
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>G-mail</th>
                                    <th>Select for en/dis</th>
                                </tr>
                                {
                                    dat.map((val3, index) => (
                                        <tr>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{val3.name}</b></td>
                                            <td><b>{val3.gmail}</b></td>
                                            <td>
                                                <input id={index} style={{width:'50px'}} name="same" type="radio" onChange={(e)=>scrt(val3.gmail)}></input>
                                            </td>
                                        </tr>
                                    ))
                                }
                                        </table>
                                        <button style={{ margin: "2% 0% 0% 43%", width: '20%', height: '4vh', backgroundColor: 'green', color: 'white' }} onClick={View}><b>Submit</b></button>
                                    </div>
                        </div>
                    </div>



{/* after view on enable disable user form... displays selected person data */}
                    <div className="editdis" style={{display:'none'}} id="personinfo">
                        <table style={{margin:'15% 0% 0% 35%',border:'1px soild black'}}>
                        {
                             dat.map((val4) => (
                                <div>
                                     {
                                    val4.gmail===crt?
                                       <>
                                       <tr >
                                       <td><b>{val4.name}</b></td>
                                       </tr>
                                       <tr>
                                       <td><b>{val4.gmail}</b></td>
                                       </tr>
                                       </>
                                        :<b></b>
                                    }
                                </div>
                             ))
                        }
                        <div style={{marginTop:'10vh'}}></div>
                            <tr>
                                <td style={{width:'2%'}}><Link onClick={Disable} style={{textDecoration:'none',padding:'0.5%',backgroundColor:'red',color:'white'}}><b>Disable User</b></Link></td>
                                <td ><Link  onClick={Enable} style={{textDecoration:'none',padding:'0.5%',backgroundColor:'green',color:'white'}}>Enable User</Link></td>
                            </tr>
                        </table>
                    </div>



{/* Reason and confirm detilas of disable enable users */}
                    <div>
                    <div className="disenareason" style={{display:'none'}} id="reasondisplay">
                        <input type="text" placeholder="Reason..." style={{width:'80vh',height:'10vh',fontSize:'15px'}}></input>
                        <button type="submit" style={{ margin: "2% 0% 0% 43%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }} onClick={Disconfirm}>Confirm</button>
                       </div>
                    </div>

{/* View transaction history */}
                        <div className="editdis" style={{display:'none'}} id="transction">
                        <table className="aufltable">
                            <tr>
                                <th>Bank Details</th>
                                <th>Sender Name</th>
                                <th>Sender Account Number</th>
                                <th>Amount Transfer</th>
                                <th>Payment Refer Number</th>
                                <th>Transfer Date and Time</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}




// update profile in Edit user in user mangement
// export const Editusers=()=>
// {
//     return(
//         <>

//         </>
//     )
// }