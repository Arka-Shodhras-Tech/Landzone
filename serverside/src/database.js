import { MongoClient } from "mongodb";
let db; 
async function connectToDB(cb){
    const url = "mongodb+srv://quntam073:quntam1234@quntam.5rb2cyk.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("Quntam");
    cb();
}
export { connectToDB, db };

