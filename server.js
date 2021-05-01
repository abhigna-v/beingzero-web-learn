const express=require('express');
const app=express();
app.use(express.static(__dirname+"/frontend"));
app.get("/",function(req,res)
{
    res.send("welcome to my site!");
});
app.get("/login",function(req,res)
{
    res.send("login successful");
});
app.get("/resume",function(req,res)
{
    fp=__dirname+"/frontend/html/resume.html"
    res.sendFile(fp);
});
app.listen(process.env.PORT||3000,function()
{
    console.log("server started on port 3000 ");
});
