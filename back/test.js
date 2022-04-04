const cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
const mongoose = require('mongoose');
//const mongoose = require("mongoose");
//var connection=require("./db.js");
var connection=require("./connect.js");
var MongoClient = require('mongodb').MongoClient;
app.use(cors());
app.options('*', cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); 

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  var connectionString="mongodb://127.0.0.1/mesclients";
  MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('mesclients')
  

/*

app.get('/lire', (req, res) => {
    db.collection("clients").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      });
});



app.post('/create', (req, res) => {
  var json=req.body;
  var myobj = { name: json.nom};
  db.collection("clients").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    res.send("ok");
  });
})


app.post('/update/:id', (req, res) => {
  
  //var myquery = { nom: "bertin" };
  var id =req.params.id;
  var myquery= {nom:id};
  console.log(myquery); 
  var newvalues = { $set: {nom: "Mickey"} };
  db.collection("clients").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
   // res.send("okay");
  });
})

*/
















});
//SQLCMD -L
 app.listen(2000);
