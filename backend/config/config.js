// module.export={
//     mongoConnectionString: process.env.MONGO_CONNECTION_STRING || '';
//     webPort: process.env.PORT || 3000
// }
module.exports = {
    mongoConnectionString: 'mongodb+srv://library:library@cluster0.xo1ph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'||'',
    webPort : process.env.PORT || 3000
}
//var password=process.env.MONGO_atlas_password;
// var connectionString="mongodb+srv://abhi:"+password+"@cluster0.hhb8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
