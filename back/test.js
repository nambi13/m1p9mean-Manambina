const cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
const mongoose = require('mongoose');
//const mongoose = require("mongoose");
//var connection=require("./db.js");
var metierutilisateur=require("./metierUtilisateur.js");
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
  var connectionString="mongodb://127.0.0.1/resto";
  MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('resto')
  



app.get('/listeclients', (req, res) => {
  var query = {nom_profile:"client",etat:"1"};
  db.collection("utilisateur").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  //  client.close();
  });
});

app.post('/create', (req, res) => {
  var name = req.body; 
  //console.log(name);
  try{
      metierutilisateur.ajoutclient(name,db);
     //S res.statusCode = 200;
     //S res.setHeader('Content-Type', 'application/json');
    // res.send({ title: 'GeeksforGeeks' });
    res.status(200).send("OK");
  }catch(error){

   // res.statusCode = 404;
   //S res.send(error);
   //console.log(error.message);
  //  res.send({ title: error.message });
  res.status(404).send(error.message);
    //res.end();


  }
});
















});
//SQLCMD -L
 app.listen(2000);
