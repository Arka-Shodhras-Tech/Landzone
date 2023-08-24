import cors from 'cors';
import express, { response } from 'express';
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
app.post('/register/:fname/:lname/:gmail/:password/:phonenumber',async(req,res)=>//register
{
    const details=await db.collection('User_Data').insertOne({Firstname:req.params.fname,Lastname:req.params.lname,Gmail:req.params.gmail,Password:req.params.password,Phonenumber:req.params.phonenumber,PasswordResetToken:req.params=' ',PasswordResetExpires:{date:new Date()},isAdmin:req.params=false,isApproved:req.params='', __v:req.params=0,accountNumber:req.params='',isVerified:req.params=true})
    res.json(details);
})
app.get('/check/:gmail',async(req,res)=>//mail check in register
{
    const details=await db.collection('User_Data').findOne({Gmail:req.params.gmail});
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
app.post('/adminregister/:fname/:lname/:gmail/:password/:phonenumber',async(req,res)=>//register
{
    const responce=await db.collection('Admin_data').findOne({Gmail:req.params.gmail})
    {
        if(responce.data)
        {
            res.json({msg:"Mail already exist"})
        }
        else
        {
            const details=await db.collection('Admin_Data').insertOne({
                Firstname:req.params.fname,
                Lastname:req.params.lname,
                Gmail:req.params.gmail,
                Password:req.params.password,
                Phonenumber:req.params.phonenumber,
                PasswordResetToken:req.params='',
                PasswordResetExpires:{date:new Date()},
                isAdmin:req.params=false,
                isApproved:req.params='',
                __v:req.params=0,
                accountNumber:req.params='',
                isVerified:req.params=true})
                res.json({msg:"Registered sucessfully"});
                res.json(details);
        }
    }
})

//Approve user from list
app.get('/aufl',async(req,res)=>{
    const details=await db.collection('userlogin').find().toArray()
    res.json(details);
})


// Approve list from approve
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
app.get('/approvecheck/:gmail',async(req,res)=>
{
    const details=await db.collection('Approve_List').findOne({Gmail:req.params.gmail});
    res.json(details);
})
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
app.post('/showvalue/:gmail/:usd/:pend/:unit/:avl/:lim/:land/:landpend/:landunit/:landavil',async(req,res)=>
{
    const details=await db.collection("Show_values").insertOne({Gmail:req.params.gmail,USD_Values:{Total_USD:req.params.usd,USD_Pending:req.params.pend,USD_Created:req.params.unit,USD_Available:req.params.avl,USD_Limit:req.params.lim},Land_values:{Total_Land:req.params.land,Land_Pending:req.params.landpend,Land_Created:req.params.landunit,Land_Available:req.params.landavil}})
    res.json(details);
})
app.get('/getshowvalue/:gmail',async(req,res)=>
{
    const details=await db.collection("Show_values").findOne({Gmail:req.params.gmail})
    res.json(details);
})
app.post('/updateshow/:gmail/:usd/:pend/:unit/:avl/:lim/:land/:landpend/:landunit/:landavil',async(req,res)=>
{
    const details=await db.collection("Show_values").findOneAndUpdate({Gmail:req.params.gmail},{$set:{USD_Values:{Total_USD:req.params.usd,USD_Pending:req.params.pend,USD_Created:req.params.unit,USD_Available:req.params.avl,USD_Limit:req.params.lim},Land_values:{Total_Land:req.params.land,Land_Pending:req.params.landpend,Land_Created:req.params.landunit,Land_Available:req.params.landavil}}})
    res.json(details);
})
app.post('/token/:gmail/:unit/:landunit',async(req,res)=>
{
    const details=await db.collection("Show_values").findOneAndUpdate({Gmail:req.params.gmail},{$set:{USD_Values:{USD_Created:req.params.unit},Land_values:{Land_Created:req.params.landunit}}})
    res.json(details);
})
app.get('/currentland/:name',async(req,res)=>
{
    const details=await db.collection("Current_Land").findOne({Name:req.params.name})
    res.json(details);
})
app.post('/insertcurland/:name/:date/:value',async(req,res)=>
{
    const details=await db.collection("Current_Land").findOneAndUpdate({Name:req.params.name},{$set:{Dates:req.params.date,Value:req.params.value}})
    res.json(details)
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





// Admin user management

// Enable user and Disable user
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
app.post('/disableadmin/:gmail',async(req,res)=>
{
   try
   {
    const details2=await db.collection('adminlogin').deleteOne({Gmail:req.params.gmail}) && 
    await db.collection('saved_adminlogin').deleteOne({Gmail:req.params.gmail})
    res.json(details2);
   }
   catch(e)
   {
    console.log(e);
   }
}
)
app.get('/saveadminlist',async(req,res)=>
{
    const details=await db.collection('saved_adminlogin').find().toArray()
    res.json(details);
})
app.get('/adminlist',async(req,res)=>
{
    const details=await db.collection('adminlogin').find().toArray()
    res.json(details);
})
app.post('/mainadmin/:approve',async(req,res)=>
{
    const details=await db.collection('Main_admin').deleteMany() &&await db.collection('Main_admin').insertOne({Gmail:req.params.approve})
    res.json(details)
})
app.get('/mainadmin',async(req,res)=>
{
    const details=await db.collection('Main_admin').findOne();
    res.json(details)
})
app.get('/mainadmin1/:gmail',async(req,res)=>
{
    const details=await db.collection('Main_admin').findOne({Gmail:req.params.gmail});
    res.json(details)
})
app.get('/mainadminlist',async(req,res)=>
{
    const details= await db.collection('Main_admin').find().toArray()
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