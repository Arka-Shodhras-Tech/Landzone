import axios from "axios";
import emailjs from 'emailjs-com';
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../../home/nav&foot&contact&about/navbar";
import { Comp } from "../../asidebar/asidebar";
export const Usermanage=()=>
{
    const [dat,sdat]=useState([]);
    const [edit,sedit]=useState([]);
    const [err1,serr1]=useState([]);
    const [trans,strans]=useState([]);
    const [approve,sapprove]=useState();
    const [update,supdate]=useState([]);
    const [modname,smodname]=useState([]);
    const [land,sland]=useState([]);
    const [disap,sdisap]=useState([]);
    const form=useRef();
    const [sm,ssm]=useState([]);
    const [at,sat]=useState([]);


    // *********************************Transfer currency to user function**************************************//
    const Transfer=async()=>
    {
        document.getElementById('transfer').style.display="block";
        document.getElementById('approvedisplay').style.display="none";
        document.getElementById('editdisplay').style.display="none";
        document.getElementById('disenadisplay').style.display="none";
        document.getElementById('transction').style.display="none";
        document.getElementById('reasondisplay').style.display='none';
        document.getElementById('personinfo').style.display="none";
        document.getElementById("approvelist").style.display="none";
    }


     //******************************************* */ Approve user from list************************************//
     const Aprove=async()=>
     {
         document.getElementById('transfer').style.display="none";
         document.getElementById('approvedisplay').style.display="block";
         document.getElementById('disenadisplay').style.display="none";
         document.getElementById('editdisplay').style.display="none";
         document.getElementById('transction').style.display="none";
         document.getElementById('reasondisplay').style.display='none';
         document.getElementById('personinfo').style.display="none";
         document.getElementById("approvelist").style.display="none";
     }

     
    // *******************************************Update user details**************************************//
    const Edit=async()=>
    {
        document.getElementById('transfer').style.display="none";
        document.getElementById('approvedisplay').style.display="none";
        document.getElementById('editdisplay').style.display="block";
        document.getElementById('disenadisplay').style.display="none";
        document.getElementById('transction').style.display="none";
        document.getElementById('personinfo').style.display="none";
        document.getElementById('reasondisplay').style.display='none'
    }


// ********************************************Disable and Enable user*****************************************//
    const Disena=async()=>
    {
        document.getElementById('transfer').style.display="none";
        document.getElementById('approvedisplay').style.display="none";
        document.getElementById('disenadisplay').style.display="block";
        document.getElementById('transction').style.display="none";
        document.getElementById('editdisplay').style.display="none";
        document.getElementById('personinfo').style.display="none";
        document.getElementById('reasondisplay').style.display="none";
    }


//************************************************View transaction history***********************************//
     const Transaction=async()=>
     {
         document.getElementById('transfer').style.display='none';
         document.getElementById('approvedisplay').style.display="none";
         document.getElementById('editdisplay').style.display="none";
         document.getElementById('disenadisplay').style.display="none";
         document.getElementById('transction').style.display='block';
         document.getElementById('personinfo').style.display="none";
         document.getElementById('reasondisplay').style.display='none';
     }


// *************************************************Block users*************************************//
    const View=async()=>
    {
        document.getElementById('disenadisplay').style.display="none";
        document.getElementById('personinfo').style.display='block';
    }


//************************************************Approve function*****************************************//
    const Approvee=async()=>
    {
        try
        {
            const responce=await axios.get("https://landzone-server.onrender.com/approvecheck/"+approve.Gmail)
            {
                if(responce.data.__v===1)
                {
                    alert(approve.Gmail+" Already approve\nPlease refresh page");
                }
                else
                {
                   axios.post("https://landzone-server.onrender.com/approveuser/"+approve.Gmail)?
                   document.getElementById(approve.Gmail).innerHTML="Approved":alert("Try again");
                }
                smodname(approve.Name);
            }
            }
            catch(err)
        {
            alert("Serrver Bussy");
        }
    }


    const Disapprove=async()=>
    {
        await axios.post("https://landzone-server.onrender.com/user/"+disap.Gmail)?
        document.getElementById(disap._id).innerHTML="Dispproved":alert("Again clicked");
    }


// ********************************************Update user details function*****************************************//
    const Edituser=async()=>
    {
        document.getElementById('reasondisplay').style.display='block';
        const responce=await axios.get("https://landzone-server.onrender.com/approvecheck/"+edit.Gmail)
        {
            if(responce.data.__v===1)
            {
               await axios.post("https://landzone-server.onrender.com/user/"+edit.Gmail)?alert("Disabled user"): alert("Try again")
            }
            else
            {
                serr1("User not found")
            }
        }
    }


    //************************************************Update user name function********************************//
    const Update=async()=>
    {
              try
                {
                    await axios.post("https://landzone-server.onrender.com/updatenames/"+update.Gmail+"/"+modname)?
                    document.getElementById(update.Gmail).innerHTML="Updated":
                    alert("Try again");
                }
                catch(e)
                {
                    console.log(e);
                }
    }

    const Approvedis=()=>
    {
        document.getElementById("approvelist").style.display="block";
    }


// ************************************************Confirm message*******************************************//
    const Confirm=(e)=>
    {
        e.preventDefault();
        emailjs.sendForm('service_pa9f60g', 'template_ytccqn8', form.current, 'p9psZmdJ3HsKrmRoN')
        .then((result) => {
            result.data?alert("Mail not sent") :alert("Mail sent");
            window.location.reload()
        }, (error) => {
          alert("Try again"+error);
        })
    }


// *************************************************Transfer Currency************************************//
    const Transcurr=async()=>
    {
        try
        {
        await axios.post("https://landzone-server.onrender.com/transfer/"+localStorage.gmail+"/"+sm+"/"+at+"/"+land)?
        alert(at+" "+land+" has been transferred from "+localStorage.gmail+" to "+sm):
        alert("Try again");
        }
        catch(e)
        {
            console.log(e)
        }
    }

// Edit user update profile
    useEffect(() => {
        axios.get("https://landzone-server.onrender.com/levelsdata")
            .then((result) => {
                sdat(result.data)
                // if(dat.__v===1)
                // {
                //     localStorage.usercount=(result.data).length;
                // }
            })
        axios.get("https://landzone-server.onrender.com/gettransfer")
            .then((result)=>
            {
                strans(result.data);
                localStorage.transcount=(result.data).length;
            })
       
    }, [])
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>


{/* ******************************* user management list********************************* */}
                   <div className="dash">
                           <Link className="usrmngitem" onClick={Transfer}>Transfer Currency</Link>
                           <Link className="usrmngitem" onClick={Aprove}>Approve Users From List</Link> 
                           <Link className="usrmngitem" onClick={Edit}>Update User Details</Link>
                           <Link className="usrmngitem" onClick={Disena}>Disable/Enable Users</Link>
                           <Link className="usrmngitem" onClick={Transaction}>view transaction history</Link>
                    </div>


{/* ********************************Transfer Currency************************************* */}
                    <div>
                        <div className="editdis" style={{display:'none'}} id="transfer">
                            <table className="landtable" style={{paddingTop:'25%'}}>
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
                                        <input type="gmail" id="gmail" onChange={(e)=>ssm(e.target.value)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for='amount'><b>Enter the amount to be transfered in USD</b>
                                       </label>
                                    </td>
                                    <td>
                                    <input type="number" id="amount" onChange={(e)=>sat(e.target.value)}/>
                                    <select id="land" name="currency" value={land} onChange={(e)=>sland(e.target.value)}>
                                    <option> Choose Currency</option>
                                    <option value="Land">Land</option>
                                    <option value="eUSD">eUSD</option>
                                </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                    <button onClick={Transcurr} style={{ margin: "2% 0% 0% 43%", width: '10%', height: '4vh', backgroundColor: 'blue', color: 'white'}}>Transfer</button >
                                    </td>
                                </tr>
                            </table>
                            
                        </div>
                    </div>


{/* ***************************************Approve users from list***************************************** */}
                                <div className="editdis" style={{ display: 'none' }} id="approvedisplay">
                                    <div>
                                        <table className="aufltable">
                                            <tr>
                                                <td colSpan={2}>
                                                <Link onClick={Approvedis} style={{textDecoration:'none',fontSize:'small',color:'green',float:'right'}}><h4>Approved List</h4></Link>
                                                </td>
                                            </tr>
                                            {
                                                dat.map((val1) => (
                                                  val1.__v===0?
                                                  <>
                                                  <tr>
                                                      <td colSpan={2}><hr style={{height:'10px',backgroundColor:'lightblue'}}/></td>
                                                  </tr>
                                                  <tr>
                                                      <td height='160px' width={'280px'}>
                                                          <p>{val1.Firstname+" "+val1.Lastname}</p>
                                                      </td>
                                                      <td>
                                                     <td>
                                                     <p>Gmail <b>{val1.Gmail}</b></p>
                                                      <p>Phone Number <b>{val1.Phonenumber}</b></p>
                                                     </td>
                                                     <td width={'280px'}>
                                                     <p>
                                                     <button id={val1.Gmail} onClick={Approvee} onClickCapture={(e)=>sapprove(val1)}  style={{ margin: "2% 0% 0% 43%", width: '30%', height: '4vh', backgroundColor: 'blue', color: 'white',border:'none', borderRadius:'20px'}}>Approve</button>
                                                     </p>
                                                     </td>
                                                      </td>
                                                  </tr>
                                                 </>:<b></b>
                                                ))
                                            }
                                        </table>
                                    </div>
                    </div>


                    <div className="editdis" style={{display:'none'}} id="approvelist">
                        <div>
                        <div>
                            <table className="aufltable">
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>G-mail</th>
                                    <th>Phone Number</th>
                                    <th>Disapprove</th>
                                </tr>
                                {
                                    dat.map((apv, index) => (
                                        apv.__v===1?
                                        <tr>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{apv.Firstname+" "+apv.Lastname}</b></td>
                                            <td><b>{apv.Gmail}</b></td>
                                            <td><b>{apv.Phonenumber}</b></td>
                                            <td style={{height:'60px'}}>
                                                <button onClick={Disapprove} id={apv._id} onClickCapture={(e)=>sdisap(apv)} style={{width:'80px',backgroundColor:'orangered',color:'whitesmoke'}}>Disapprove</button>
                                            </td>
                                        </tr>:<b></b>
                                    ))
                                }
                                        </table>
                                    </div>
                        </div>
                    </div>


{/* *******************************************Update user************************************************* */}
                    <div className="editdis" style={{display:'none'}} id="editdisplay">
                        <div>
                        <div>
                                        <table className="aufltable">
                                            {
                                                dat.map((val2) => (
                                                    val2.__v===1?
                                                    <>
                                                    <tr>
                                                        <td height='160px' width={'280px'}>
                                                            <p>
                                                                <input type="text" defaultValue={val2.Lastname} onChange={(e)=>smodname(e.target.value)}></input>
                                                            </p>
                                                        </td>
                                                        <td>
                                                       <td>
                                                       <p>Gmail <b>{val2.Gmail}</b></p>
                                                        <p>Phone Number <b>{val2.Phonenumber}</b></p>
                                                       </td>
                                                        </td>
                                                        <td>
                                                        <button onClick={Update} id={val2.Gmail} onClickCapture={(e)=>supdate(val2)} style={{width:'80px',backgroundColor:'blue',color:'whitesmoke',borderRadius:'5px',fontSize:'15px'}}>Update</button> 
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={3}><hr style={{height:'10px',backgroundColor:'lightblue'}}/></td>
                                                    </tr>
                                                   </>:<b></b>
                                                ))
                                            }
                                        </table>
                                        <p style={{textAlign:'center'}}><b>{err1}</b></p>
                                    </div>
                        </div>
                    </div>

                    <div className="updatedis" style={{display:'none'}} id='updatedis'>
                    </div>


{/* *********************************************Enable and Disable user****************************************** */}
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
                                    dat.map((val3, index) => (
                                        val3.__v===1?
                                        <tr>
                                            <td><b>{index + 1}</b></td>
                                            <td><b>{val3.Lastname}</b></td>
                                            <td><b>{val3.Gmail}</b></td>
                                            <td><b>{val3.Phonenumber}</b></td>
                                            <td style={{height:'60px'}}>
                                                <input id={index} style={{width:'50px'}} name="same" type="radio"  onChange={(e)=>sedit(val3)}></input>
                                            </td>
                                        </tr>:<b></b>
                                    ))
                                }
                                        </table>
                                        <button style={{ margin: "2% 0% 0% 43%", width: '20%', height: '4vh', backgroundColor: 'green', color: 'white' }} onClick={View}><b>Submit</b></button>
                                    </div>
                        </div>
                    </div>


{/* *********************after view on enable disable user form... displays selected person data******************** */}
                    <div className="editdis" style={{display:'none'}} id="personinfo">
                        <table style={{margin:'15% 0% 0% 35%',border:'1px soild black'}}>
                        {
                             dat.map((val4) => (
                                <div>
                                     {
                                    val4.Gmail===edit.Gmail?
                                       <>
                                       <tr >
                                       <td><b>{val4.Firstname+' '+val4.Lastname}</b></td>
                                       </tr>
                                       <tr>
                                       <td><b>{val4.Gmail}</b></td>
                                       </tr>
                                       <tr>
                                        <td><b>{val4.Phonenumber}</b></td>
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
                            </tr>
                        </table>
                    </div>


{/* ***************************Reason and confirm detilas of disable enable users******************************* */}
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


{/* ****************************************View transaction history**************************************** */}
                        <div className="editdis" style={{display:'none'}} id="transction">
                        <table className="pymttable" style={{textAlign:'center',overflowY:'scroll'}}>
                            {
                                trans.map((tran,index)=>
                                (
                                <tr>
                                <td><b>{index+1}</b></td>
                                <td>
                                    <tr>
                                        <tr>
                                            <td><b>Sender Mail</b></td>
                                            <td>{tran.Sender_email}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Reciver Mail</b></td>
                                            <td>{tran.Reciver_email}</td>
                                        </tr>
                                    </tr>
                                </td>
                                <td>
                                    <td><b>Amount</b></td>
                                    <td>{tran.Amount_Transfered}</td>
                                </td>
                                <td>
                                    <td><b>In</b></td>
                                    <td>{tran.In}</td>
                                </td>
                            </tr>
                                ))
                            }
                        </table>
                        </div>
                </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}