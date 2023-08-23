import React from "react";
import { NavLink } from "react-router-dom";
export const Comp=()=>
{
    return(
               <>
                <aside>
                            <NavLink to='/dashboard' className="asidebtn"  activeClassName='active'><b>Dashboard</b></NavLink>
                            <NavLink to='/usermanage' className="asidebtn" activeClassName="active"><b>User Management</b></NavLink>
                            {
                                localStorage.mainadmin===''?<br/>:<NavLink to='/adminusermanage' className="asidebtn" activeClassName="active"><b>Admin User Management</b></NavLink>
                            }
                            <NavLink to='/landmanage' className="asidebtn" activeClassName="active"><b>Land Management</b></NavLink>
                            <NavLink to='/unitmanage' className="asidebtn" activeClassName="active"><b>Unit Request Management</b></NavLink>
                </aside>
               </>
    )
}