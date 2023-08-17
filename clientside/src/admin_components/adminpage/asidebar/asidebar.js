import React from "react";
import { NavLink } from "react-router-dom";
export const Comp=()=>
{
    return(
               <>
                <aside>
                {/* <div>
                    <Link  className="drop">
                        <img src={"list.svg"} width={'35px'} alt="list" />
                    </Link>
                    <NavLink to='/adminpage' activeClassName='active'  className="drop drop1">
                    <img src={'house.svg'} width={'33px'}  alt="home"></img>
                    </NavLink>
                        </div> */}
                            <NavLink to='/dashboard' className="asidebtn"  activeClassName='active'><b>Dashboard</b></NavLink>
                            <NavLink to='/usermanage' className="asidebtn" activeClassName="active"><b>User Management</b></NavLink>
                            {
                               
                                localStorage.mainadmin!==''?<NavLink to='/adminusermanage' className="asidebtn" activeClassName="active"><b>Admin User Management</b></NavLink>:<br/>
                            }
                            <NavLink to='/landmanage' className="asidebtn" activeClassName="active"><b>Land Management</b></NavLink>
                            <NavLink to='/unitmanage' className="asidebtn" activeClassName="active"><b>Unit Request Management</b></NavLink>
                </aside>
               </>
    )
}