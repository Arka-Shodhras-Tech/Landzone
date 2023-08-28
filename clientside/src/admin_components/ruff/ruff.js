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

                        app.listen(3001, () => {
                            console.log('Server is running on port 3001');
                          });


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


axios.get("https://landzone-server.onrender.com/approvedlist")
.then((result)=>
{
    sapvd(result.data);
})

// Approved list from approve
app.post('/approvelist/:name/:gmail/:phonenum/:password/:cpassword',async(req,res)=>
{
    const details=await db.collection('Approve_List').insertOne({Name:req.params.name,Gmail:req.params.gmail,Phone_Number:req.params.phonenum,Password:req.params.password,Cpassword:req.params.cpassword})
    res.json(details);
})
app.get('/approvedlist',async(req,res)=>{
    const details=await db.collection('Approve_List').find().toArray()
    res.json(details);
})
app.post('/delapprovelist/:gmail',async(req,res)=>
{
    const details=await db.collection('userlogin').deleteOne({Gmail:req.params.gmail})
    res.json(details);
})
app.post('/disapprove/:gmail',async(req,res)=>
{
    const details=await db.collection('Approve_List').deleteOne({Gmail:req.params.gmail})
    res.json(details);
})

// Approve list check email id

app.post('/updatenames/:name/:gmail/:phonenum',async(req,res)=>
{
    const details=await db.collection('Approve_List').findOneAndUpdate({Gmail:req.params.gmail,Phone_Number:req.params.phonenum},{$set:{Name:req.params.name}})
    res.json(details);
})

// Update and Disable and Enable user
app.get('/disableshow',async(req,res)=>
{
    const details=await db.collection('Approve_List').find().toArray();
    res.json(details);
})
// Edit user data
app.post('/deledit/:id',async(req,res)=>
{
    const details=await db.collection('Approve_List').deleteOne({Name:req.params.id})
    res.json(details);
})

axios.get("https://landzone-server.onrender.com/disableshow")
.then((result2) => {
    scrt(result2.data)
    localStorage.usercount=(result2.data).length;
})
axios.get("https://landzone-server.onrender.com/pymtretrive")
.then((result1)=>
{
    // spymt(result1.data);
})

await axios.post("https://landzone-server.onrender.com/sviewpp/"+vpp.Gmail+"/"+vpp.Units+"/"+vpp.In)
const viewpp1=await axios.post("https://landzone-server.onrender.com/delviewpp/"+vpp.Units)
{
    viewpp1?nj:alert("Try again");
}  

axios.post("https://landzone-server.onrender.com/showvalue/"+gmal+"/"+usd+"/"+pendg+"/"+unit+"/"+avil+"/"+limit+"/"+totalland+"/"+landpend+"/"+landunit+"/"+landlimit)?
alert("Sucessfully saved"):alert("Try again");

app.post('/delecurr',async(req,res)=>
{
    const details=await db.collection('create_currency').deleteMany()
   res.json(details);
})

app.post('/enableadmin/:name/:gmail/:password/:cpassword/:phonenumber',async(req,res)=>
{
   try
   {
    const details=await db.collection("adminlogin").insertOne({Name:req.params.name,Gmail:req.params.gmail,Password:req.params.password,Cpassword:req.params.cpassword,Phone_Number:req.params.phonenumber})&&
    db.collection("saved_adminlogin").insertOne({Name:req.params.name,Gmail:req.params.gmail,Password:req.params.password,Cpassword:req.params.cpassword,Phone_Number:req.params.phonenumber})
    res.json(details);
   }
   catch(e)
   {
    console.log(e);
   }
})

{
    check.map((x)=>
    {
        adminlist.map((y)=>
        {
            if(x.Gmail===y.Gmail)
            {
                try
                {
                    document.getElementById(x.Gmail).style.display="block";
                    document.getElementById(x.Gmail+x.Name).style.display="none";
                }
                catch(e)
                {
                    console.log(e);
                }
            }
        })
    })
} 

const res=await axios.get("https://landzone-server.onrender.com/check/"+approve.Gmail)
{
    if(res.data.__v==2)
    {
        alert("Admin Already Exist")
    }
    else
    {
       
    }
}

//main admin
const responce=await axios.get("https://landzone-server.onrender.com/levelsdata")
if(responce.data)
{
    try
    {
        document.getElementById(responce.data.Gmail+1).innerHTML="Selected";
    }
    catch
    {
        alert("Refresh Page");
    }
}

const responce1=await axios.get("https://landzone-server.onrender.com/mainadmin1/"+gmail)
if(responce1.data)
{
    localStorage.mainadmin=responce1.data.Gmail;
}