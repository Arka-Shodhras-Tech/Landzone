import axios from "axios";
import emailjs from 'emailjs-com';
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar1 } from "../../../home/nav&foot&contact&about/navbar";
import { Comp } from "../../asidebar/asidebar";
export const Usermanage=()=>
{
    const [dat,sdat]=useState([]);
    const [crt,scrt]=useState([]);
    const [edit,sedit]=useState([]);
    const [err1,serr1]=useState([]);
    const [pymt,spymt]=useState([]);
    const [approve,sapprove]=useState();
    const [tdata,stdata]=useState([]);
    const [modname,smodname]=useState([]);
    const [land,sland]=useState([]);
    const [x,sx]=useState([]);
    const form=useRef();
    const [i,si]=useState(0);
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

    const Hidden=()=>
    {

    }
// Approve users
    const Approvehand=()=>
    {
        // const updatedArrays=[...approve];
        stdata(approve);
        si(i+1);
    }   
    const Approvee=async()=>
    {
        console.log(x);
        // const formData=new FormData();
        // for(let i=0;i<approve.length;i++)
        // {
        //     formData.append(`array[${i}]`,approve[0])
        // }
        // console.log(formData)
        try
        {
            const responce=await axios.get("http://localhost:8000/approvecheck/"+approve.gmail)
            if(responce.data)
            {
                alert("Already approve data");
            }
            else
            {
                try
                {
                    const responce3=await axios.post("http://localhost:8000/approvelist/"+approve.name+"/"+approve.gmail+"/"+approve.phone_number)
                // const responce3=await axios.post("http://localhost:8000/approvelist/"+approve)
                {
                    responce3?alert("Sucessfully Approved"):alert("Try again");
                    // window.location.reload(3);
                }
                }
                catch(e)
                {
                    console.log(e);
                }
                try
                {
                    const responce4=await axios.post("http://localhost:8000/updatenames/"+modname+"/"+approve.gmail+"/"+approve.phone_number)
                    {
                        responce4?alert("Sucessfully Updated"):alert("Try again");
                    }
                }
                catch(e)
                {
                    console.log(e);
                }
            }
            smodname(approve.name);
        }
        catch(err)
        {
            alert("Serrver Bussy");
        }
    }
    console.log(x);
// Update user details
    const Edituser=async()=>
    {
        document.getElementById('reasondisplay').style.display='block';
        const responce1=await axios.get("http://localhost:8000/approvecheck/"+edit.Gmail)
        {
            if(responce1.data)
            {
               const responce2= await axios.post("http://localhost:8000/deledit/"+responce1.data.Name)
              {
                responce2?alert("Disabled user"): alert("Try again")
              }
               
            }
            else
            {
                serr1("User not found")
            }
        }
    }

// Confirm message
    const Confirm=(e)=>
    {
        e.preventDefault();
        emailjs.sendForm('service_yth8b2s', 'template_9bpmz3j', form.current, '10_WMH5qM1GoLv6-g')
        .then((result) => {
            result.data?alert("Mail not sent") :alert("Mail sent");
            window.location.reload()
        }, (error) => {
          alert("Try again"+error);
        })
    }

    const Modify=()=>
    {
        document.getElementById('updatedis').style.display="block";
    }

// Edit user update profile
    useEffect(() => {
        axios.get("http://localhost:8000/aufl")
            .then((result) => {
                sdat(result.data)
            })
        axios.get("http://localhost:8000/disableshow")
            .then((result2) => {
                scrt(result2.data)
            })
        axios.get("http://localhost:8000/pymtretrive")
        .then((result1)=>
        {
            spymt(result1.data)
        })
    }, [])
    return(
        <>
        <Navbar1/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>

{/* user management list */}
                   <div className="dash">
                           <Link className="usrmngitem" onClick={Transfer}>Transfer Currency</Link>
                           <Link className="usrmngitem" onClick={Aprove}>Approve Users From List</Link> 
                           <Link className="usrmngitem" onClick={Edit}>Update User Details</Link>
                           <Link className="usrmngitem" onClick={Disena}>Disable/Enable Users</Link>
                           <Link className="usrmngitem" onClick={Transaction}>view transaction history</Link>
                    </div>

{/* Transfer Currency */}
                    <div>
                        <div className="editdis" style={{display:'none'}} id="transfer">
                            <table className="landtable" style={{paddingTop:'35%'}}>
                                    <tr>

                                        <td>
                                            <label for='gmail'><b>Transfer currency from:(Email id)</b></label>
                                        </td>

                                        <td>
                                            <input type="gmail" id="gmail" defaultValue={localStorage.gmail}></input>
                                        </td>

                                    </tr>
                                    <tr>

                                        <td>
                                            <label for='gmail'><b>Transfer currency to:(Email id)</b></label>
                                        </td>
                                        <td>
                                            <input type="gmail" id="gmail"></input>
                                        </td>
                                        {/* <td>
                                        <button>Submit</button>
                                    </td> */}
                                    </tr>
                                    <tr>
                                        <td>
                                            <label for='amount'><b>Enter the amount to be transfered in USD</b>
                                            </label>
                                        </td>
                                        <td>
                                            <input type="number" id="amount" /> <select id="land" name="currency" value={land} onChange={(e) => sland(e.target.value)}>
                                                <option> Choose Currency</option>
                                                <option value="Land">Land</option>
                                                <option value="USD">eUSD</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <button type="submit" style={{ margin: "2% 0% 0% 43%", width: '10%', height: '4vh', backgroundColor: 'blue', color: 'white' }}>Transfer</button >
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
                                                <td colSpan={2}>
                                                <Link style={{textDecoration:'none',fontSize:'small',color:'green',float:'right'}}><h4>Approved List</h4></Link>
                                                </td>
                                            </tr>
                                            {
                                                dat.map((val1, index) => (
                                                   <>
                                                    <tr>
                                                        <td colSpan={2}><hr style={{height:'10px',backgroundColor:'lightblue'}}/></td>
                                                    </tr>
                                                    <tr>
                                                        <td height='160px' width={'280px'}>
                                                            <p>{val1.name}</p>
                                                        </td>
                                                        <td>
                                                       <td>
                                                       <p>Gmail <b>{val1.gmail}</b></p>
                                                        <p>Phone Number <b>{val1.phone_number}</b></p>
                                                       </td>
                                                       <td width={'280px'}>
                                                       <p>
                                                       <input type="submit" value="Approve"  onChange={(e)=>sapprove(val1)} style={{ margin: "2% 0% 0% 43%", width: '30%', height: '4vh', backgroundColor: 'blue', color: 'white',border:'none', borderRadius:'20px'}} onClick={Approvee}></input>
                                                       </p>
                                                       </td>
                                                        </td>
                                                    </tr>
                                                   </>
                                                ))
                                            }
                                        </table>
                                        {/* <button type="submit" onClick={Approvee} style={{ margin: "2% 0% 0% 43%", width: '10%', height: '4vh', backgroundColor: 'blue', color: 'white'}}>Approve</button > */}
                                    </div>
                    </div>


{/* Update user */}
                    <div className="editdis" style={{display:'none'}} id="editdisplay">
                        <div>
                        <div>
                                        <table className="aufltable">
                                            {
                                                crt.map((val2, index) => (
                                                    <>
                                                    <tr>
                                                        <td height='160px' width={'280px'}>
                                                            <p>
                                                                <input type="text" defaultValue={val2.Name} onChange={(e)=>smodname(e.target.value)}></input>
                                                            </p>
                                                        </td>
                                                        <td>
                                                       <td>
                                                       <p>Gmail <b>{val2.Gmail}</b></p>
                                                        <p>Phone Number <b>{val2.Phone_Number}</b></p>
                                                       </td>
                                                       <td width={'280px'}>
                                                       </td>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={2}><hr style={{height:'10px',backgroundColor:'lightblue'}}/></td>
                                                    </tr>
                                                   </>
                                                ))
                                            }
                                        </table>
                                        <p style={{textAlign:'center'}}><b>{err1}</b></p>
                                    </div>
                        </div>
                    </div>

                    <div className="updatedis" style={{display:'none'}} id='updatedis'>
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
                                    <th>Phone Number</th>
                                    <th>Select for en/dis</th>
                                </tr>
                                {
                                    crt.map((val3, index) => (
                                        <tr>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{val3.Name}</b></td>
                                            <td><b>{val3.Gmail}</b></td>
                                            <td><b>{val3.Phone_Number}</b></td>
                                            <td>
                                                <input id={index} style={{width:'50px'}} name="same" type="radio"  onChange={(e)=>sedit(val3)}></input>
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
                             crt.map((val4) => (
                                <div>
                                     {
                                    val4.Gmail===edit.Gmail?
                                       <>
                                       <tr >
                                       <td><b>{val4.Name}</b></td>
                                       </tr>
                                       <tr>
                                       <td><b>{val4.Gmail}</b></td>
                                       </tr>
                                       </>
                                        :<b></b>
                                    }
                                </div>
                             ))
                        }
                        <div style={{marginTop:'10vh'}}></div>
                            <tr>
                                <td style={{width:'2%'}}><Link onClick={Edituser} style={{textDecoration:'none',padding:'0.5%',backgroundColor:'red',color:'white'}}><b>Disable User</b></Link></td>
                                <td ><Link  onClick={Enable} style={{textDecoration:'none',padding:'0.5%',backgroundColor:'green',color:'white'}}>Enable User</Link></td>
                            </tr>
                        </table>
                    </div>



{/* Reason and confirm detilas of disable enable users */}
                    <div>
                                <div className="disenareason" style={{ display: 'none' }} id="reasondisplay">
                                    <form ref={form} onSubmit={Confirm}>
                                        <tr>
                                            <td>
                                            <label>Email</label>
                                            </td>
                                            <td>
                                            <input type="email" name="mail" defaultValue={edit.Gmail}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <label>Message</label>
                                            </td>
                                            <td>
                                            <textarea type="text" name="message" required placeholder="Message..." style={{width:'80vh',height:'10vh',fontSize:'15px'}}></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                            <input type="submit" value="confirm" style={{ margin: "2% 0% 0% 43%", width: '10%', height: '4vh', backgroundColor: 'green', color: 'white' }}></input>
                                            </td>
                                        </tr>
                                    </form>
                       </div>
                    </div>

{/* View transaction history */}
                        <div className="editdis" style={{display:'none'}} id="transction">
                        <table className="pymttable" style={{textAlign:'center',overflowY:'scroll'}}>
                            <tr>
                                <th>S.NO</th>
                                <th>Bank Details</th>
                                <th>Sender Email</th>
                                <th>Sender Account Number</th>
                                <th>Amount Transfer</th>
                                <th>Payment Refer Number</th>
                                <th>Transfer Date and Time</th>
                            </tr>
                            {
                                    pymt.map((val5, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{val5.Bank_details}</td>
                                            <td>{val5.Sender_email}</td>
                                            <td>{val5.Sender_Acc_Number}</td>
                                            <td>{val5.Amount_Transfered}</td>
                                            <td>{val5.Payment_ref_number}</td>
                                            <td>{val5.Transaction_date}</td>
                                        </tr>
                                    ))
                                }
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