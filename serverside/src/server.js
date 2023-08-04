import cors from 'cors';
import express from 'express';
import { connectToDB, db } from './database.js';
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server is running")
})
try
{
//user data server//
app.post('/register/:name/:gmail/:password/:cpassword/:phonenumber',async(req,res)=>//register
{
    const details=await db.collection('userlogin').insertOne({Name:req.params.name,Gmail:req.params.gmail,Password:req.params.password,Cpassword:req.params.cpassword,Phone_Number:req.params.phonenumber})
    res.json(details);
})
app.post('/userapprove/:name/:gmail/:phonenumber',async(req,res)=>//register
{
    const details=await db.collection('saved_userlogin').insertOne({Name:req.params.name,Gmail:req.params.gmail,Phone_Number:req.params.phonenumber})
    res.json(details);
})
app.get('/check/:gmail',async(req,res)=>//mail check in register
{
    const details=await db.collection('userlogin').findOne({Gmail:req.params.gmail});
    res.json(details);
})
app.get('/login/:gmail/:password',async(req,res)=>//login
{
    const details=await db.collection('userlogin').findOne({Gmail:req.params.gmail,Password:req.params.password});
    res.json(details);
})
app.post('/update/:gmail/:password/:cpassword',async(req,res)=>//forget
{
    const details=await db.collection('userlogin').findOneAndUpdate({Gmail:req.params.gmail},{$set:{Password:req.params.password,Cpassword:req.params.cpassword}})
    res.json(details);
})



//headbar//..
app.get('/headcheck/:name',async(req,res)=>
{
    const details=await db.collection('userlogin').findOne({Name:req.params.name});
    res.json(details);
})


// Admin data server//
app.get('/adminlogin/:mail/:password',async(req,res)=>//login
{
    const details=await db.collection('adminlogin').findOne({Gmail:req.params.mail,Password:req.params.password});
    res.json(details);
})
app.get('/admincheck/:gmail',async(req,res)=>//mail check
{
    const details=await db.collection('adminlogin').findOne({Gmail:req.params.gmail});
    res.json(details);
})
app.post('/adminregister/:name/:gmail/:password/:cpassword/:phonenumber',async(req,res)=>//register
{
    try
    {
        const details=await db.collection('adminlogin').insertOne({Name:req.params.name,Gmail:req.params.gmail,Password:req.params.password,Cpassword:req.params.cpassword,Phone_Number:req.params.phonenumber})
        res.json(details);
        const details1=await db.collection('saved_adminlogin').insertOne({Name:req.params.name,Gmail:req.params.gmail,Password:req.params.password,Cpassword:req.params.cpassword,Phone_Number:req.params.phonenumber})
        res.json(details1);
    }
    catch(e)
    {
        console.log(e);
    }
})

//Approve user from list
app.get('/aufl',async(req,res)=>{
    const details=await db.collection('userlogin').find().toArray()
    res.json(details);
})









// Approve list from approve
app.post('/approvelist/:name/:gmail/:phonenum',async(req,res)=>
{
    const details=await db.collection('Approve_List').insertOne({Name:req.params.name,Gmail:req.params.gmail,Phone_Number:req.params.phonenum})
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
app.get('/approvecheck/:gmail',async(req,res)=>
{
    const details=await db.collection('Approve_List').findOne({Gmail:req.params.gmail});
    res.json(details);
})
// app.post('/savedapprovelist/:name/:gmail/:phonenum',async(req,res)=>
// {
//     const details=await db.collection('Saved_Approve_List').insertOne({Name:req.params.name,Gmail:req.params.gmail,Phone_Number:req.params.phonenum})
//     res.json(details);
// })
app.post('/updatenames/:name/:gmail/:phonenum',async(req,res)=>
{
    const details=await db.collection('Approve_List').findOneAndUpdate({Gmail:req.params.gmail,Phone_Number:req.params.phonenum},{$set:{Name:req.params.name}})
    res.json(details);
})
// app.post('/savedupdatenames/:name/:gmail/:phonenum',async(req,res)=>
// {
//     const details=await db.collection('Saved_Approve_List').findOneAndUpdate({$set:{Name:req.params.name}},{Gmail:req.params.gmail,Phone_Number:req.params.phonenum})
//     res.json(details);
// })

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


// Enter project data

app.post('/enterdata/:proname/:prodesc/:provalue/:procn/:prost/:proloc/:propost/:proreg/:procou/:protime',async(req,res)=>
{
    const details=await db.collection('entereddata').insertOne({project_name:req.params.proname,project_desc:req.params.prodesc,project_value:req.params.provalue,project_cadaster:req.params.procn,project_address:{Street:req.params.prost,City:req.params.proloc,Postal:req.params.propost,State:req.params.proreg,Country:req.params.procou},project_takentime:req.params.protime})
    res.json(details);
})
app.get("/entercheckdata/:proname",async(req,res)=>
{
    const details=await db.collection('entereddata').findOne({project_name:req.params.proname})
    res.json(details);
})

// change project data

app.post('/updatedata/:proname/:prodesc/:provalue/:procn/:prost/:proloc/:propost/:proreg/:procou/:protime',async(req,res)=>
{
    const details=await db.collection('entereddata').findOneAndUpdate({project_name:req.params.proname},{$set:{project_desc:req.params.prodesc,project_value:req.params.provalue,project_cadaster:req.params.procn,project_address:{Street:req.params.prost,City:req.params.proloc,Postal:req.params.propost,State:req.params.proreg,Country:req.params.procou},project_changetime:req.params.protime}})
    res.json(details);
})


// Show entered data

app.get('/showdata',async(req,res)=>
{
    const details=await db.collection('entereddata').find().toArray()
    res.json(details);
})


// Enter value in usd in dashboard
app.post('/eviusd/:gmail/:num',async(req,res)=>
{
    const details=await db.collection('Usd_values').insertOne({Gmail:req.params.gmail,USD_Values:req.params.num})
    res.json(details);
})
app.post('/uviusd/:gmail/:num',async(req,res)=>
{
    const details=await db.collection('Usd_values').findOneAndUpdate({Gmail:req.params.gmail},{$set:{USD_Values:req.params.num}})
    res.json(details);
})
app.get('/eviusdget/:gamil',async(req,res)=>
{
    const details=await db.collection('Usd_values').findOne({Gmail:req.params.gamil})
    res.json(details);
})
// Create currency(Land/USD Units)
app.post('/crecur/:gmail/:val/:land',async(req,res)=>
{
    const details=await db.collection('create_currency').insertOne({Gmail:req.params.gmail,Units:req.params.val,In:req.params.land})
    res.json(details);
})
app.get('/crecurdis',async(req,res)=>
{
    const details=await db.collection('create_currency').find().toArray()
    res.json(details)   
})
app.post('/viewpp/:gmail/:val/:land',async(req,res)=>
{
    const details=await db.collection('pending_purchase').insertOne({Gmail:req.params.gmail,Units:req.params.val,In:req.params.land})
    res.json(details);
})
app.post('/sviewpp/:gmail/:val/:land',async(req,res)=>
{
    const details=await db.collection('saved_pending_purchase').insertOne({Gmail:req.params.gmail,Units:req.params.val,In:req.params.land})
    res.json(details);
})
app.get('/sviewdis',async(req,res)=>
{
    const details=await db.collection('saved_pending_purchase').find().toArray();
    res.json(details);
})
app.post('/delecurr',async(req,res)=>
{
    const details=await db.collection('create_currency').deleteMany()
   res.json(details);
})
app.post('/delepend',async(req,res)=>
{
    const details1=await db.collection('pending_purchase').deleteMany()
    res.json(details1);
})
app.post('/delviewpp/:unit',async(req,res)=>
{
    const details=await db.collection('create_currency').deleteOne({Units:req.params.unit})
    res.json(details);
})
app.get('/viewappdis',async(req,res)=>
{
    const details=await db.collection('pending_purchase').find().toArray()
    res.json(details)
})
app.post('/showvalue/:gmail/:usd/:pend/:unit/:avl/:lim',async(req,res)=>
{
    const details=await db.collection("Show_values").insertOne({Gmail:req.params.gmail,Showvalues:{USD:req.params.usd,Pending:req.params.pend,Created:req.params.unit,Available:req.params.avl,Limit:req.params.lim}})
    res.json(details);
})
app.get('/getshowvalue/:gmail',async(req,res)=>
{
    const details=await db.collection("Show_values").findOne({Gmail:req.params.gmail})
    res.json(details);
})
app.post('/updateshow/:gmail/:usd/:pend/:unit/:avl/:lim',async(req,res)=>
{
    const details=await db.collection("Show_values").findOneAndUpdate({Gmail:req.params.gmail},{$set:{USD:req.params.usd,Pending:req.params.pend,Created:req.params.unit,Available:req.params.avl,Limit:req.params.lim}})
    res.json(details);
})


//Transfer currency
app.post('/transfer/:sgmail/:rgmail/:amt/:land',async(req,res)=>
{
    const details=await db.collection("Transfer_currency").insertOne({Sender_email:req.params.sgmail,Reciver_email:req.params.rgmail,Amount_Transfered:req.params.amt,In:req.params.land})
    res.json(details);
})
app.get('/gettransfer',async(req,res)=>
{
    const details=await db.collection("Transfer_currency").find().toArray();
    res.json(details);
})





// Show value in usd in dashboard

// Pending purchses

// app.post('/uviewpp/:gmail/:val',async(req,res)=>
// {
//     const details=await db.collection('pending_purchase').findOneAndUpdate({Gmail:req.params.gmail},{$set:{Units:req.params.val}})
//     res.json(details);
// })

// Admin user management

// Enable user

app.post('/enableadmin/:approve',async(req,res)=>
{
   try
   {
    const details=await db.collection("adminlogin").insertOne(approve)
    res.json(details);
   }
   catch(e)
   {
    console.log(e);
   }
})
app.post('/deleteadmin/:gmail',async(req,res)=>
{
    const details2=await db.collection('adminlogin').deleteOne({Gmail:req.params.gmail})
    res.json(details2);
}
)
app.get('/adminlist',async(req,res)=>{
    const details=await db.collection('adminlogin').find().toArray()
    res.json(details);
})




// payment details entered
app.post('/payment/:bankd/:sendname/:accnum/:amt/:refnum/:trnsdt',async(req,res)=>
{
    const details=await db.collection('payment').insertOne({Bank_details:req.params.bankd,Sender_email:req.params.sendname,Sender_Acc_Number:req.params.accnum,Amount_Transfered:req.params.amt,Payment_ref_number:req.params.refnum,Transaction_date:req.params.trnsdt})
    res.json(details);
})
// payment details retrive
app.get('/pymtretrive',async(req,res)=>
{
    const details=await db.collection('payment').find().toArray()
    res.json(details);
})


//delete data//..
app.get('/deladmdata',async(req,res)=>{
    const details=await db.collection('admindata').deleteMany()
   res.json(details)
})
app.get('/delentrdata',async(req,res)=>{
    const details=await db.collection('entereddata').deleteMany()
   res.json(details)
})
app.get('/delsports',async(req,res)=>{
    const details=await db.collection('sportsscore').deleteMany()
   res.json(details)
})
app.get('/delentertine',async(req,res)=>{
    const details=await db.collection('entertinescore').deleteMany()
   res.json(details)
})
}
catch(e)
{
    console.log(e);
}
 connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("server running at 8000");
    })
})