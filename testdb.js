const mongoose = require('mongoose');


var password="abhi";//process.env.MONGO_atlas_password;
var connectionString="mongodb+srv://abhi:"+password+"@cluster0.hhb8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection_string, {});
var db = mongoose.connection;
db.on('connected', function () {
console.log('MongoDB connected!');
});

const courselib = require('./backend/lib/courselib');

courselib.createcourse({id : 1,name: 'competetive programming',articles:44},function(err,course){
    console.log(course);
})
courselib.getall(function(course){
    console.log(course);
})