
const express=require('express');
const path = require('path');
const mongoose =require ('mongoose');
const app=express();
const courselib = require('./backend/lib/courselib');
const connect = require('./backend/lib/dbconnect');
const config = require('./backend/config/config');

// var password=process.env.MONGO_atlas_password;
// var connectionString="mongodb+srv://abhi:"+password+"@cluster0.hhb8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});
// mongoose.connection.on('connected',function(){
//     console.log('Database connected');
// });
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+"/frontend"));
app.use(express.static(path.join(__dirname, "static")));
connect.connect();


app.get("/",function(req,res)
{
    res.send("Welcome to my site!");
});


app.get("/crudd",function(req,res)
{
    filePathName=__dirname+'/static/html/crud.html';
    res.sendFile(filePathName);
});
app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.put("/crud/:idd", courselib.update);
app.post("/crud",courselib.addnewone);


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

const PORT = config.webPort;
app.listen(PORT||3000,function()
{
    console.log("server started on port 3000 ");
});
