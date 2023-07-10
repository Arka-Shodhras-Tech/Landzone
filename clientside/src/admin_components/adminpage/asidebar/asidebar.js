import React from "react";
import { Link, NavLink } from "react-router-dom";
export const Comp=()=>
{
    // const Close=async()=>
    // {
    //     document.getElementById('sidebar').style.display="none";
    // }
    // const Open=async()=>
    // {
    //     document.getElementById('sidebar').style.display="block";
    // }
    return(
               <>
                {/* <div className="drop">
                        <Link >
                            <img src={"list.svg"} width={'35px'} alt="list"/>
                        </Link>
                </div> */}
                <aside>
                <div>
                    <Link  className="drop">
                        <img src={"list.svg"} width={'35px'} alt="list" />
                    </Link>
                    <NavLink to='/adminpage' className="drop" activeClassName='active' style={{marginLeft:'10vh',padding:'3%',borderRadius:'30px'}}>
                    <img src={'house.svg'} width={'33px'}  alt="home"></img>
                    </NavLink>
                        </div>
                            <NavLink to='/dashboard' className="asidebtn"  activeClassName='active'><b>Dashboard</b></NavLink>
                            <NavLink to='/usermanage' className="asidebtn" activeClassName="active"><b>User Management</b></NavLink>
                            <NavLink to='/adminusermanage' className="asidebtn" activeClassName="active"><b>Admin User Management</b></NavLink>
                            <NavLink to='/landmanage' className="asidebtn" activeClassName="active"><b>Land Management</b></NavLink>
                            <NavLink to='/unitmanage' className="asidebtn" activeClassName="active"><b>Unit Request Management</b></NavLink>
                </aside>
               </>
    )
}