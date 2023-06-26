import cors from 'cors';
import express from 'express';
import { connectToDB } from './database.js';
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server running")
})

connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("server running at 8000");
    })
})