const express = require('express');
 
const app = express();

app.use(express.static(__dirname+"/frontend"));
 
app.get("/", function(req, res){
    res.send("Welcome to my Basic Site");
})
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
app.get("/resume", function(req, res){
    let i=__dirname+"/frontend/html/resume.html"
    res.sendFile(i);

});
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
