const express=require('express');
const app=express();
app.get("/",function(req,res){
    let indexFilepath=__dirname+"/index.html";
    res.sendFile(indexFilepath);
});
app.get("/home",function(req,res){
    res.send("home called");
});
app.get("/login",function(req,res){
    res.send("login called");
});
const port=process.env.PORT || 3000;
app.listen(port,function()
{
    console.log("server running");
});
