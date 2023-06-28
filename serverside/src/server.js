import cors from 'cors';
import express from 'express';
import { connectToDB, db } from './database.js';
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server running")
})
//user data server//
app.post('/register/:name/:gmail/:password/:cpassword',async(req,res)=>//register
{
    const details=await db.collection('userdata').insertOne({name:req.params.name,gmail:req.params.gmail,password:req.params.password,cpassword:req.params.cpassword})
    res.json(details);
})
app.get('/check/:gmail',async(req,res)=>//mail check in register
{
    const details=await db.collection('userdata').findOne({gmail:req.params.gmail});
    res.json(details);
})
app.get('/login/:gmail/:password',async(req,res)=>//login
{
    const details=await db.collection('userdata').findOne({gmail:req.params.gmail,password:req.params.password});
    res.json(details);
})
app.post('/update/:gmail/:password/:cpassword',async(req,res)=>//forget
{
    const details=await db.collection('userdata').findOneAndUpdate({gmail:req.params.gmail},{$set:{password:req.params.password,cpassword:req.params.cpassword}})
    res.json(details);
})



//headbar//
app.get('/headcheck/:name',async(req,res)=>
{
    const details=await db.collection('userdata').findOne({name:req.params.name});
    res.json(details);
})


// Admin data server//
app.get('/adminlogin/:mail/:password',async(req,res)=>//login
{
    const details=await db.collection('admindata').findOne({mail:req.params.gmail,password:req.params.password});
    res.json(details);
})
app.get('/admincheck/:gmail',async(req,res)=>//mail check
{
    const details=await db.collection('admindata').findOne({gmail:req.params.gmail});
    res.json(details);
})
app.post('/adminregister/:name/:gmail/:password/:cpassword',async(req,res)=>//register
{
    const details=await db.collection('admindata').insertOne({name:req.params.name,gmail:req.params.gmail,password:req.params.password,cpassword:req.params.cpassword})
    res.json(details);
})

//approve user from list

app.get('/aufl',async(req,res)=>{
    const details=await db.collection('admindata').find().toArray()
    res.json(details);
})





//delete data//
app.get('/delcoding',async(req,res)=>{
    const details=await db.collection('codingscore').deleteMany()
   res.json(details)
})
app.get('/delcurrent',async(req,res)=>{
    const details=await db.collection('currentscore').deleteMany()
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