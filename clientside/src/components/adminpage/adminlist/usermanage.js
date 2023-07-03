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

    }

    // View and edit user function
    const Edit=async()=>
    {
        document.getElementById('approvedisplay').style.display="none";
        document.getElementById('editdisplay').style.display="block";
        document.getElementById('disenadisplay').style.display="none";
        document.getElementById('reasondisplay').style.display='none'
    }
    const Edituser=async()=>
    {
        const responce1=await axios.get("http://localhost:8000/admincheck/"+edit)
        {
            if(responce1.data)
            {
                console.log(responce1.data)
               const responce2= await axios.post("http://localhost:8000/deledit/"+responce1.data._id)
               if(responce2.data)
               {
                console.log(responce2.data.gmail)
                serr1("sucessfully deleted")
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

    // Approve user from list
    const Aprove=async()=>
    {
        document.getElementById('approvedisplay').style.display="block";
        document.getElementById('disenadisplay').style.display="none";
        document.getElementById('editdisplay').style.display="none";
        document.getElementById('reasondisplay').style.display='none'
    }

    // Block users
    const View=async()=>
    {
        document.getElementById('disenadisplay').style.display="none";
        document.getElementById('personinfo').style.display='block';
    }
    const Disena=async()=>
    {
        document.getElementById('approvedisplay').style.display="none";
        document.getElementById('disenadisplay').style.display="block";
        document.getElementById('editdisplay').style.display="none";
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

    // View transaction history
    const Transaction=async()=>
    {

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
                   <div>
                   <div className="dash">
                           <Link className="usrmngitem" onClick={Transfer}>Transfer Currency to User</Link>
                           <Link className="usrmngitem" onClick={Aprove}>Approve Users From List</Link> 
                           <Link className="usrmngitem" onClick={Edit}>Eidt User</Link>
                           <Link className="usrmngitem" onClick={Disena}>Disable/Enable Users</Link>
                           <Link className="usrmngitem" onClick={Transaction}>view transaction history</Link>
                    </div>


                    {/* Approve users from list */}
                    <div>
                                <div className="editdis" style={{ display: 'none' }} id="approvedisplay">
                                    <div>
                                        <table className="aufltable">
                                            <tr>
                                                <th>S.No</th>
                                                <th>Name</th>
                                                <th>G-mail</th>
                                                <th>Select</th>
                                            </tr>
                                            {
                                                dat.map((val1, index) => (
                                                    <tr>
                                                        <td><b>{index + 1}</b></td>
                                                        <td><b>{val1.name}</b></td>
                                                        <td><b>{val1.gmail}</b></td>
                                                        <td>
                                                            <input id={index} name="same" type="radio"></input>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </table>
                                        <button type="submit" style={{ margin: "2% 0% 0% 43%", width: '10%', height: '4vh', backgroundColor: 'blue', color: 'white' }}> Submit</button>
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
                                        <button type="submit" style={{ margin: "2% 0% 0% 43%", width: '10%', height: '4vh', backgroundColor: 'blue', color: 'white' }} onClick={Edituser}>Edit</button>
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