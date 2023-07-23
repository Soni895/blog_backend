// const express=require("express");
// const app=express();
// require('dotenv').config();
// app.use(express.json());
// const {db_connect}=require("./config/database");
// const port=process.env.port||4000
// const routes=require("./routes/blogroutes");
// app.use(express.json());
// app.use(routes);
// app.listen(port,()=>
// {
//     console.log(`hi darshan soni`);
// });
// db_connect();

// // default route
// app.get("/",(req,res)=>

// {
//     res.send("<h1>Hi darshan soni</h1>");
// })

require('dotenv').config();
// const mongoose=require("mongoose");
// const url = process.env.db_url;
const port= process.env.port || 4000;
const express=require("express");
const app=express();
app.use(express.json());
// const todorouts=require("./routes/todo");

// mount the api
// app.use("/api/v1",todorouts);

app.listen(port,()=>{
    console.log("server started succesfully");  
});

// db connection
const {db_connect} =require("./config/database");
db_connect();

// default route
app.get("/",(req,res)=>

{
    res.send("<h1>Hi deepak soni</h1>");
})
