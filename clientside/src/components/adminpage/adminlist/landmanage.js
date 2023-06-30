import React from "react";
import { Footer, Navbar } from "../../navfoot/navbar";
import { Link } from "react-router-dom";
import { Comp } from "../../company/company";
export const Landmanage=()=>
{
    const Elpd=async()=>
    {
        document.getElementById('eld').style.display="block";
        document.getElementById('cld').style.display="none";
        document.getElementById('sld').style.display="none";
        document.getElementById('slv').style.display="none";
    }
    const Clpd=async()=>
    {
        document.getElementById('cld').style.display="block";
        document.getElementById('sld').style.display="none";
        document.getElementById('slv').style.display="none";
        document.getElementById('eld').style.display="none";
    }
    const Vled=async()=>
    {
        document.getElementById('sld').style.display="block";
        document.getElementById('eld').style.display="none";
        document.getElementById('slv').style.display="none";
        document.getElementById('cld').style.display="none";
    }
    const Sltv=async()=>
    {
        document.getElementById('slv').style.display="block";
        document.getElementById('eld').style.display="none";
        document.getElementById('cld').style.display="none";
        document.getElementById('sld').style.display="none";
    }
    return(
        <>
        <Navbar/>
        <div className="home">
            <div className="adpage">
                <Comp/>
                <section>
                    <div>
                    <div className="land">
                        <Link className="landitem" onClick={Elpd}>Enter Land project data</Link>
                        <Link className="landitem" onClick={Clpd}>change Land project data</Link>
                        <Link className="landitem" onClick={Vled}>view/show Land entered data</Link>
                        <Link className="landitem" onClick={Sltv}>show Land total value</Link>
                    </div>

                    {/* Enter land details */}
                    <div className="editdis" style={{ display: 'none' }} id='eld'>
                        <h1 style={{color:'red',textAlign:'center'}}>Enter Land Detilas</h1>
                        <div>
                        <table className="landtable">
                                <tr>
                                    <td><label className="landinput"><b>Project Name::</b></label></td>
                                    <td><input type="text" className="landinput"></input></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput"><b>Project Description::</b></label></td>
                                    <td><input type="paragraph" className="landinput" style={{width:'80%',height:'20vh'}} ></input></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput"><b>Project Value::</b></label></td>
                                    <td><input type='number' className="landinput"></input></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}><button type="submit" style={{ margin: "2% 0% 0% 43%", width: '20%', height: '4vh', backgroundColor: 'blue', color: 'white' }}> Submit</button></td>
                                </tr>
                            </table>
                            </div>
                    </div>

                    {/* Change land details */}
                     <div className="editdis" style={{display:'none'}} id="cld">
                        <h1 style={{color:'red',textAlign:'center'}}>Edit Land Detilas</h1>
                        <div>
                            <table className="landtable">
                                <tr>
                                    <td><label className="landinput"><b>Project Name::</b></label></td>
                                    <td><input type="text" className="landinput"></input></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput"><b>Project Description::</b></label></td>
                                    <td><input type="paragraph" className="landinput" style={{width:'80%',height:'20vh'}} ></input></td>
                                </tr>
                                <tr>
                                    <td><label className="landinput"><b>Project Value::</b></label></td>
                                    <td><input type='number' className="landinput"></input></td>
                                </tr>
                                <tr>
                                    <td colSpan={2}><button type="submit" style={{ margin: "2% 0% 0% 43%", width: '20%', height: '4vh', backgroundColor: 'blue', color: 'white' }}> Save</button></td>
                                </tr>
                            </table>
                            <br/><br/>
                            <br/><br/>
                            <br/><br/>
                        </div>
                    </div>

                     {/* Show land details */}
                     <div className="editdis" style={{display:'none'}} id="sld">
                        <h1 style={{color:'red',textAlign:'center'}}>Land Detilas</h1>
                        <div>
                           <table>
                            <tr>
                                <td><b>Project::</b></td>
                                <td>project 1</td>
                            </tr>
                            <tr>
                                <td><b>Project description::</b></td>
                                <td>abcdefghijklmnopqrstuvwxyz</td>
                            </tr>
                            <tr>
                                <td><b>Value::</b></td>
                                <td>2000</td>
                            </tr>
                           </table>
                        </div>
                    </div>
                     {/* Show land vale */}
                     <div className="editdis" style={{display:'none'}} id="slv">
                        <h1 style={{color:'red',textAlign:'center'}}>Land Value</h1>
                        <div>
                            <table>
                                <tr>
                                    <td><b>Project name::</b></td>
                                    <td>project</td>
                                </tr>
                                <tr>
                                    <td><b>Total value::</b></td>
                                    <td>2000</td>
                                </tr>
                            </table>
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
// style={{margin:'10% 0% 0% 5%'}}