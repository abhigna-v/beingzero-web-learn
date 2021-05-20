
const express=require('express');
const path = require('path');
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+"/frontend"));


app.get("/",function(req,res)
{
    res.send("Welcome to my site!");
});




app.get("/google",function(req,res)
{
    fp=__dirname+"/frontend/html/googlePage.html"
    res.sendFile(fp);
});



app.get("/resume",function(req,res)
{
    fp=__dirname+"/frontend/html/resume.html"
    res.sendFile(fp);
});

app.get("/colors",function(req,res)
{
    fp=__dirname+"/frontend/html/slidebarColors.html"
    res.sendFile(fp);
});

app.get("/apple",function(req,res)
{
    fp=__dirname+"/frontend/html/applepage.html"
    res.sendFile(fp);
});
app.get("/tambola",function(req,res)
{
    fp=__dirname+"/frontend/html/tambola.html"
    res.sendFile(fp);
});

app.get("/login",function(req,res)
{
    fp=__dirname+"/frontend/html/loginPage.html"
    res.sendFile(fp);
});

app.get("/register",function(req,res)
{
    fp=__dirname+"/frontend/html/registerPage.html"
    res.sendFile(fp);
});

app.listen(process.env.PORT||3000,function()
{
    console.log("server started on port 3000 ");
});
