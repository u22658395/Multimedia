import express from "express";
import { json } from "react-router-dom";

const app = express();

const { MongoClient } = require("mongodb");
const uri =
    "mongodb+srv://u22658395:<db_password>@kat.beynv.mongodb.net/";
const client = new MongoClient(uri);



app.use(express.json())
app.use(express.static("frontend/public"));
app.listen(1337, () => {
    console.log("Listening on localhost:1337");
});

app.post("/login", (req,res)=>{
    console.log(req.body);
    
    res.json("login in server returned this");
})

app.post("/register", (req,res)=>{
    console.log(req);
    
    res.json("register in server returned this");
})