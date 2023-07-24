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
//user data server//
app.post('/register/:name/:gmail/:password/:cpassword/:phonenumber',async(req,res)=>//register
{
    const details=await db.collection('userlogin').insertOne({name:req.params.name,gmail:req.params.gmail,password:req.params.password,cpassword:req.params.cpassword,phone_number:req.params.phonenumber})
    res.json(details);
})
app.post('/userapprove/:name/:gmail/:phonenumber',async(req,res)=>//register
{
    const details=await db.collection('User_Approvelist').insertOne({name:req.params.name,gmail:req.params.gmail,phone_number:req.params.phonenumber})
    res.json(details);
})
app.get('/check/:gmail',async(req,res)=>//mail check in register
{
    const details=await db.collection('userlogin').findOne({gmail:req.params.gmail});
    res.json(details);
})
app.get('/login/:gmail/:password',async(req,res)=>//login
{
    const details=await db.collection('userlogin').findOne({gmail:req.params.gmail,password:req.params.password});
    res.json(details);
})
app.post('/update/:gmail/:password/:cpassword',async(req,res)=>//forget
{
    const details=await db.collection('userlogin').findOneAndUpdate({gmail:req.params.gmail},{$set:{password:req.params.password,cpassword:req.params.cpassword}})
    res.json(details);
})



//headbar//..
app.get('/headcheck/:name',async(req,res)=>
{
    const details=await db.collection('userlogin').findOne({name:req.params.name});
    res.json(details);
})


// Admin data server//
app.get('/adminlogin/:mail/:password',async(req,res)=>//login
{
    const details=await db.collection('adminlogin').findOne({mail:req.params.gmail,password:req.params.password});
    res.json(details);
})
app.get('/admincheck/:gmail',async(req,res)=>//mail check
{
    const details=await db.collection('adminlogin').findOne({gmail:req.params.gmail});
    res.json(details);
})
app.post('/adminregister/:name/:gmail/:password/:cpassword/:phonenumber',async(req,res)=>//register
{
    const details=await db.collection('adminlogin').insertOne({name:req.params.name,gmail:req.params.gmail,password:req.params.password,cpassword:req.params.cpassword,phone_number:req.params.phonenumber})
    res.json(details);
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
app.post('/updatenames/:name/:gmail/:phonenum',async(req,res)=>
{
    const details=await db.collection('Approve_List').findOneAndUpdate({$set:{Name:req.params.name}},{Gmail:req.params.gmail,Phone_Number:req.params.phonenum})
    res.json(details);
})
// Approve list check email id
app.get('/approvecheck/:gmail',async(req,res)=>
{
    const details=await db.collection('Approve_List').findOne({Gmail:req.params.gmail});
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
app.post('/crecur/:gmail/:val',async(req,res)=>
{
    const details=await db.collection('create_currency').insertOne({Gmail:req.params.gmail,Units:req.params.val})
    res.json(details);
})
app.get('/crecurdis',async(req,res)=>
{
    const details=await db.collection('create_currency').find().toArray()
    res.json(details)   
})
app.post('/viewpp/:gmail/:val',async(req,res)=>
{
    const details=await db.collection('pending_purchase').insertOne({Gmail:req.params.gmail,Units:req.params.val})
    res.json(details);
})
app.post('/delviewpp/:gmail',async(req,res)=>
{
    const details=await db.collection('create_currency').deleteOne({Gmail:req.params.gmail})
    res.json(details);
})
// app.get('/appdis/:gmail',async(req,res)=>
// {
//     const details=await db.collection('pending_purchase').findOne({Gmail:req.params.gmail})
//     res.json(details);
// })
app.get('/viewappdis',async(req,res)=>
{
    const details=await db.collection('pending_purchase').find().toArray()
    res.json(details)
})





// Show value in usd in dashboard

// Pending purchses

app.post('/uviewpp/:gmail/:val',async(req,res)=>
{
    const details=await db.collection('pending_purchase').findOneAndUpdate({Gmail:req.params.gmail},{$set:{Units:req.params.val}})
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
 connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("server running at 8000");
    })
})