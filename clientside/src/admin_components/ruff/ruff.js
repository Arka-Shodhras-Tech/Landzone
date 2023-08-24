const [d1,sd1]=useState([])
const [d2,sd2]=useState([])
const [d3,sd3]=useState([])
const [d4,sd4]=useState([])
const [d5,sd5]=useState([])
const Db=()=>
{
    sd1("db")
}
const Um=()=>
{
    sd2("um")
}
const Aum=()=>
{
    sd3('aum')
}
const Pm=()=>
{
    sd4('pm')
}
const Urm=()=>
{
    sd5('urm')
}


const [uc,suc]=useState(0);
const [pc,spc]=useState(0);
const [uib,ssib]=useState(0);
const [eib,seib]=useState(0);
const [ru,sru]=useState(0);
const [tv,stv]=useState(0);
const [ts,sts]=useState(0);
const [pt,spt]=useState(0);


 {/* <div style={{display:'none'}}>{y=(parseInt(cor)-parseInt(usd))}</div> */}
                                    {/* <label for='eusd'><b>The total value of USD in bank is : {usd}</b></label><br/>
                                    <label for="eusd"><b>Pending eUSD:{pendg}</b></label><br/>
                                    <label for='eusd'><b>the number of eUSD's created till now: {unit}</b></label><br/>
                                    <label for='eusd'><b>Available USD in Bank: {avil}</b></label><br/><br/>
                                    <label for='eusd'><b>eUSD possible to be created:{limit}</b></label><br/>
                                    <button id={1} onClick={Limitdis}><b>Limit</b></button><div>{limit}</div> */}


{/* Show value in Land */}
                            {/* <div className="editdis" style={{display:'none'}} id="svlb">
                            <div style={{textAlign:'center',marginTop:'25%'}}>
                                <div style={{display:'none'}}>{y=(parseInt(cor)-parseInt(usd))}</div>
                                <label>Current 1 Land Unit value in USD:{val}</label><br/>
                                    <label for='eusd'><b>The total value of eUSD in bank is : {usd}</b></label><br/>
                                    <label for="eusd"><b>Pending Land units :{pendg}</b></label><br/>
                                    <label for="eusd"><b>Pending Land <i>(in eUSD)</i>:{pendg*val}</b></label><br/>
                                    <label for='eusd'><b>The number of Land created till now: {unit}</b></label><br/>
                                    <label for='eusd'><b>Available USD in Bank: {avil}</b></label><br/><br/>
                                    <label for='eusd'><b>The number of Land's created till now: {unit*val}</b></label><br/>
                                    <label for='eusd'><b>Land Units possible to be created:{limit}</b></label>
                                    <button id={1} onClick={Limitdis}><b>Limit</b></button><div>{limit}</div>
                                </div>
                            </div> */}

                             {/* <div>
                    <Link  className="drop">
                        <img src={"list.svg"} width={'35px'} alt="list" />
                    </Link>
                    <NavLink to='/adminpage' activeClassName='active'  className="drop drop1">
                    <img src={'house.svg'} width={'33px'}  alt="home"></img>
                    </NavLink>
                        </div> */}




app.get('/saveadmincheck/:gmail',async(req,res)=>//mail check
{
    const details=await db.collection('saved_adminlogin').findOne({Gmail:req.params.gmail});
    res.json(details);
})
app.get('/login/:gmail/:password',async(req,res)=>//login
{
    const details=await db.collection('User_Data').findOne({Gmail:req.params.gmail,Password:req.params.password});
    res.json(details);
})
app.post('/update/:gmail/:password/:cpassword',async(req,res)=>//forget
{
    const details=await db.collection('User_Data').findOneAndUpdate({Gmail:req.params.gmail},{$set:{Password:req.params.password}})
    res.json(details);
})