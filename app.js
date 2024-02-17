const express = require("express");
const logger = require("./logger")
const app=express();


app.use(logger);
//apply to everyone 


//apply to only starting with /api
app.use("/api",logger);
app.get("/",(req,res)=>{
    res.send("Home")
})

app.get("/about",(req,res)=>{
    res.send("hi from about");
})

app.listen(5000,()=>{
    console.log("server is listening")
})