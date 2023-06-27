import React from "react";
import { Footer, Navbar } from "../../navfoot/navbar";
import { Comp } from "../../company/company";
import { Link } from "react-router-dom";
export const Usermanage=()=>
{
    const Aprove=async()=>
    {
        document.getElementById('approvedisplay').style.display="block";
        document.getElementById('disenadisplay').style.display="none";
        document.getElementById('editdisplay').style.display="none";
    }
    const Edit=async()=>
    {
        document.getElementById('approvedisplay').style.display="none";
        document.getElementById('editdisplay').style.display="block";
        document.getElementById('disenadisplay').style.display="none";
    }
    const Disena=async()=>
    {
        document.getElementById('approvedisplay').style.display="none";
        document.getElementById('disenadisplay').style.display="block";
        document.getElementById('editdisplay').style.display="none";
    }
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>
                   <div style={{display:'flex'}}>
                   <div className="usrmng">
                           <Link className="usrmngitem" onClick={Aprove}>Approve Users From List</Link> 
                           <Link className="usrmngitem" onClick={Edit}>Eidt User</Link>
                           <Link className="usrmngitem" onClick={Disena}>Disable/Enable Users</Link>
                    </div>
                    <div>
                    <div className="editdis" style={{display:'none'}} id="approvedisplay">
                        <div>
                            <h1>user details</h1>
                        </div>
                    </div>
                    <div className="editdis" style={{display:'none'}} id="editdisplay">
                        <div>
                            <h1>user details</h1>
                            <button>Edit</button>
                        </div>
                    </div>
                    <div className="disenadis" style={{display:'none'}} id="disenadisplay">
                        <div>
                        <button>Disable User</button>
                        <button>Enable User</button>
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
