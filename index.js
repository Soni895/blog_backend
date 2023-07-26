const express=require("express");
const app=express();
require('dotenv').config();
app.use(express.json());
const {db_connect}=require("./config/database");
const port=process.env.port||4000
const routes=require("./routes/blogroutes");
app.use(express.json());

// api mount
app.use("/api/v1",routes);

// db import
app.listen(port,()=>
{
    console.log(`hi darshan soni port No:- ${port}`);
});
db_connect();

// default route
app.get("/",(req,res)=>

{
    res.send("<h1>Hi darshan soni</h1>");
});

