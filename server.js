
const express=require('express');
const app=express();
const path = require('path');
const mongoose =require ('mongoose');
const courselib =require('./backend/lib/courselib');
// var password=process.env.MONGO_atlas_password;
// var connectionString="mongodb+srv://abhi:"+password+"@cluster0.hhb8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});
// mongoose.connection.on('connected',function(){
//     console.log('Database connected');
// });
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+"/frontend"));

var password="abhi";//process.env.MONGO_atlas_password;
var connectionString="mongodb+srv://abhi:"+password+"@cluster0.hhb8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});
mongoose.connection.on('connected',function(){
    console.log('Database connected');
});
mongoose.connection.on('error', function (error) {
    console.error('Error in MongoDb connection: ' + error);
});
    
mongoose.connection.on('disconnected', function () {
    console.log('MongoDB disconnected!');
});
//dbconnect.connect();
app.get("/",function(req,res)
{
    res.send("Welcome to my site!");
});

app.get("/crudd",function(req,res)
{
    res.sendFile(__dirname+'/frontend/html/crud.html');
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

app.get("/search",function(req,res)
{
    res.redirect('https://www.google.com/');
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
