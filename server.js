const express=require('express');
const app=express();
app.use(express.static(__dirname+"/css/styles.css"));
app.use(express.static(__dirname+"/Js/site.js"));
app.get("/",function(req,res){
    //let indexFilepath=__dirname+"/index.html";
    res.send("Hey! welcome to my site");  
});
app.get("/home",function(req,res){
    res.send("home called");
});//comment
app.get("/login",function(req,res){
    res.send("login called");
});
app.get("/resume",function(req,res){
    let indexFilepath=__dirname+"/resume.html";
    res.sendFile(indexFilepath); 
});
const port=process.env.PORT || 3000;
app.listen(port,function()
{
    console.log("server running");
});
