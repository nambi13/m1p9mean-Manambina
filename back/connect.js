
/*
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
function connect(){
    // config for your database
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
        if (!err){
        console.log('MongoDB connection succeeded.');
        return db;
        }
    else{
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
        return 0;
    }
    });
}
module.exports = {connect:connect};

*/
var mongoose = require('mongoose');

function connect(){


    //Import the mongoose module


//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/mesclients';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

return db;



}
module.exports = {connect:connect};