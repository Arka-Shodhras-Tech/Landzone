import React from "react";
import { Link } from "react-router-dom";
export const Comp=()=>
{
    const Close=async()=>
    {
        document.getElementById('sidebar').style.display="none";
    }
    const Open=async()=>
    {
        document.getElementById('sidebar').style.display="block";
    }
    return(
        <aside>
                <div className="drop">
                        <Link onClick={Open}>
                            <img src={"list.svg"} width={'35px'} alt="list"/>
                        </Link>
                </div>
                    <div className="dropbar"  style={{display:'none'}} id="sidebar">
                        <div>
                    <Link onClick={Close} className="drop">
                        <img src={"list.svg"} width={'35px'} alt="list" />
                    </Link>
                    <Link to='/adminpage' className="drop" style={{marginLeft:'10vh'}}>
                    <img src={'house.svg'} width={'33px'} alt="home"></img>
                    </Link>
                        </div>
                            <Link to='/dashboard' className="asidebtn" ><b>Dashboard</b></Link>
                            <Link to='/usermanage' className="asidebtn" ><b>User Management</b></Link>
                            <Link to='/adminusermanage' className="asidebtn" ><b>Admin User Management</b></Link>
                            <Link to='/landmanage' className="asidebtn" ><b>Land Management</b></Link>
                            <Link to='/unitmanage' className="asidebtn" ><b>Unit Request Management</b></Link>
                    </div>
                </aside>
    )
}