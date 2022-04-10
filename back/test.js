const cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
const mongoose = require('mongoose');
//const mongoose = require("mongoose");
//var connection=require("./db.js");
var metierutilisateur=require("./Metierutilisateur.js");
var metierplat=require("./Metierplat.js");
var metierrestaurant=require("./Metierrestaurant.js");
var connection=require("./connect.js");
const Metierplat = require('./Metierplat.js');
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
  


  
app.post('/supprimerutilisateur', (req, res) => {
  client.connect();
  const ObjectId = require('mongodb').ObjectId; 
  var name = req.body;
  var id=name._id;
  var good_id = new ObjectId(id);
  //var query = { _id: req.params.id };
  var myquery={_id: good_id};
  var data2 = {$set: {
      etat:0,
      }
  };
  db.collection("utilisateur").updateOne(myquery,data2, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
  
  });
  return  res.status(200).send("OK");
});




 
app.post('/suprimeresto', (req, res) => {
  client.connect();
  const ObjectId = require('mongodb').ObjectId; 
  var name = req.body;
  var id=name._id;
  var good_id = new ObjectId(id);
  //var query = { _id: req.params.id };
  var myquery={_id: good_id};
  var data2 = {$set: {
      etat_restaurant:0,
      }
  };
  db.collection("restaurant").updateOne(myquery,data2, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
  
  });
  return  res.status(200).send("OK");
});

app.post('/supprimerplat', (req, res) => {
  client.connect();
  const ObjectId = require('mongodb').ObjectId; 
  var name = req.body;
  var id=name._id;
  var good_id = new ObjectId(id);
  //var query = { _id: req.params.id };
  var myquery={_id: good_id};
  var data2 = {$set: {
      etat_plat:0,
      }
  };
  db.collection("plat").updateOne(myquery,data2, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    
  
  });
  return  res.status(200).send("OK");
});





app.post('/livraison', (req, res) => {
  client.connect();
  const ObjectId = require('mongodb').ObjectId; 
  var name = req.body;
  var getlivreur=name.idlivreur;
  var idlivreur = new ObjectId(name.idlivreur);
  var querylivreur = { _id: idlivreur };
  var email;
  db.collection("utilisateur").find(querylivreur).toArray(function(err, result) {
    if (err) throw err;
    email=result[0].email;
    console.log(result);




  var id=name._id;
  var good_id = new ObjectId(id);
  //var query = { _id: req.params.id };
  var myquery={_id: good_id};
  var data2 = {$set: {
      etat_commande:5,
      email_utilisateur_livreur:email
      }
  };
  db.collection("commande").updateOne(myquery,data2, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
  });

  });
  return  res.status(200).send("OK");
});


app.get('/listeclients', (req, res) => {
  
  client.connect()
  var query = {nom_profile:"client",etat:1};
  db.collection("utilisateur").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
    client.close();
   
  });
});



app.get('/listeplat', (req, res) => {
  var query = { etat_plat: 1 };
  db.collection("plat").find(query).toArray(function(err, result) {
    if (err) throw err;
    res.send(result);
   //return  res.status(200).send("OK");
   
  
   
  //  client.close();
  });
});


app.get('/listelivreur', (req, res) => {
  client.connect();
  var query = { etat: 1,nom_profile:"livreur" };
  db.collection("utilisateur").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
   //return  res.status(200).send("OK");
   
  
   
  //  client.close();
  });
});

app.get('/listerestorateur', (req, res) => {
  var query = { etat: 1,nom_profile:"restaurant" };
  db.collection("utilisateur").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
   //return  res.status(200).send("OK");
   
  
   
  //  client.close();
  });
});



app.get('/listeresto', (req, res) => {
  var query = { etat_restaurant: 1};
  db.collection("restaurant").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
   //return  res.status(200).send("OK");
   
  
   
  //  client.close();
  });
});






app.get('/detailcommandeplat/:id', (req, res) => {
  client.connect();
 // const ObjectId = require('mongodb').ObjectId; 
 const ObjectId = require('mongodb').ObjectId; 
  var id=req.params.id;
  var good_id = new ObjectId(id);
  var query = { _id: good_id }
  db.collection("commande").find(query).toArray(function(err, result) {
    if (err) throw err;
   
    res.send(result);
  
   //return  res.status(200).send("OK");
   
  
   
  //  client.close();
  });
 
});


app.get('/benefice/:id', (req, res) => {
  client.connect();
 // const ObjectId = require('mongodb').ObjectId; 
 const ObjectId = require('mongodb').ObjectId; 
  var id=req.params.id;
 // var good_id = new ObjectId(id);
  var query = { nom_restaurant: id }
  db.collection("benefice").find(query).toArray(function(err, result) {
    if (err) throw err;
   
    res.send(result);
  
   //return  res.status(200).send("OK");
   
  
   
  //  client.close();
  });
 
});




app.get('/beneficefull', (req, res) => {
  client.connect();
 // const ObjectId = require('mongodb').ObjectId; 
 const ObjectId = require('mongodb').ObjectId; 
  var id=req.params.id;
 // var good_id = new ObjectId(id);
  //var query = { nom_restaurant: id }
  db.collection("benefice").find({}).toArray(function(err, result) {
    if (err) throw err;
   
    res.send(result);
  
   //return  res.status(200).send("OK");
   
  
   
  //  client.close();
  });
 
});


app.get('/fullcommande', (req, res) => {
  client.connect();
 // const ObjectId = require('mongodb').ObjectId; 
 const ObjectId = require('mongodb').ObjectId; 
  var id=req.params.id;
 // var good_id = new ObjectId(id);
  var query = { etat_livraison: 1 }
  db.collection("commande").find(query).toArray(function(err, result) {
    if (err) throw err;
  // console.log(result);
    res.send(result);
  
   //return  res.status(200).send("OK");
   
  
   
  //  client.close();
  });
 
});


app.get('/fullcommandelivrer', (req, res) => {
  client.connect();
 // const ObjectId = require('mongodb').ObjectId; 
 const ObjectId = require('mongodb').ObjectId; 
  var id=req.params.id;
 // var good_id = new ObjectId(id);
  var query = { etat_livraison: 1 }
  db.collection("commande").find(query).toArray(function(err, result) {
    if (err) throw err;
  // console.log(result);
    res.send(result);
  
   //return  res.status(200).send("OK");
   
  
   
  //  client.close();
  });
 
});








app.get('/detailcommanderesto/:id', (req, res) => {
  client.connect();
 // const ObjectId = require('mongodb').ObjectId; 
  var id=req.params.id;
 // var good_id = new ObjectId(id);
  //var query = { _id: req.params.id };
  var query={nom_restaurant: id,etat_livraison:1};
  db.collection("commande").find(query).toArray(function(err, result) {
    if (err) throw err;
   
    res.send(result);
  
   //return  res.status(200).send("OK");
   
  
   
  //  client.close();
  });
 
});




app.get('/detailclient/:id', (req, res) => {
  client.connect();
  const ObjectId = require('mongodb').ObjectId; 
  var id=req.params.id;
  var good_id = new ObjectId(id);
  //var query = { _id: req.params.id };
  var query={_id: good_id};
  db.collection("utilisateur").find(query).toArray(function(err, result) {
    if (err) throw err;
   
    res.send(result);
  
   //return  res.status(200).send("OK");
   
  
   
  //  client.close();
  });
 
});





app.get('/detailplat/:id', (req, res) => {
  client.connect();
  const ObjectId = require('mongodb').ObjectId; 
  var id=req.params.id;
  var good_id = new ObjectId(id);
  //var query = { _id: req.params.id };
  var query={_id: good_id};
  db.collection("plat").find(query).toArray(function(err, result) {
    if (err) throw err;
   
    res.send(result);
  
   //return  res.status(200).send("OK");
   
  
   
  //  client.close();
  });
 
});


app.get('/detailresto/:id', (req, res) => {
  const ObjectId = require('mongodb').ObjectId; 
  var id=req.params.id;
  var good_id = new ObjectId(id);
  //var query = { _id: req.params.id };
  var query={_id: good_id};
  db.collection("restaurant").find(query).toArray(function(err, result) {
    if (err) throw err;
    res.send(result);
  
   //return  res.status(200).send("OK");
   
  
   
  //  client.close();
  });
 
});






app.post('/ajouterplat', (req, res) => {
  //  {nom_plat: 'wqewq`', prix: 'qweqw', quantite: '123'}
     //console.log(req.body);
     var name = req.body; 
     //console.log(name);
     try{
         metierplat.ajoutplat(name,db);
        //S res.statusCode = 200;
        //S res.setHeader('Content-Type', 'application/json');
       // res.send({ title: 'GeeksforGeeks' });
     //  client.close();
       res.status(200).send("OK");
     }catch(error){
   
      // res.statusCode = 404;
      //S res.send(error);
     // console.log(error.message);
    // res.send({ title: error.message });
      res.status(404).send(error.message);
      
       
    // client.close();
    
       //res.end();
   
   
     }
 
 
 });



 

app.post('/login', (req, res) => {
  
    var name = req.body; 
    console.log(name)  
    client.connect()
  var query = {email:name.email,etat:1};
  db.collection("utilisateur").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
 ///   res.send(result);
    if(result.length>0){
     // res.send(result);

      if(result[0].nom_profile.normalize()==="restaurant"){
        
        var data2 = {
          _id:result[0]._id,
           nom_profile:"restaurant",
          nom_restaurant:result[0].nom_restaurant,
        
      };
      res.send(JSON.stringify(data2));

      }
      else{

        var data2 = {
          _id:result[0]._id,
           nom_profile:result[0].nom_profile,
        
      };
      res.send(JSON.stringify(data2));


      }

    }else{
    //  res.send("email: 'sdfsdfq', mdp: 'sdfsdfsdfsd' ");
    res.status(404).send("Utilisateur inexistant");
    }
    //client.close();


});
});



app.post('/ajouterresto', (req, res) => {
  //  {nom_plat: 'wqewq`', prix: 'qweqw', quantite: '123'}
     //console.log(req.body);
     var name = req.body; 
     //console.log(name);
     try{
         metierrestaurant.create(name,db);
        //S res.statusCode = 200;
        //S res.setHeader('Content-Type', 'application/json');
       // res.send({ title: 'GeeksforGeeks' });
     //  client.close();
       res.status(200).send("OK");
     }catch(error){
   
      // res.statusCode = 404;
      //S res.send(error);
     // console.log(error.message);
    // res.send({ title: error.message });
      res.status(404).send(error.message);
      
       
    // client.close();
    
       //res.end();
   
   
     }
 
 
 });



app.post('/commande', (req, res) => {
  var name = req.body; 
  console.log(name);
  try{
    client.connect();
    Metierplat.commande(name,db)

    return res.status(200).json("ok");
  }catch(error){
  
    console.log(error);
    return res.status(404).json(error.message);
  }


  });
 // res.send(req.body);
 



app.post('/create', (req, res) => {
  var name = req.body; 
  //console.log(name);
  try{
      metierutilisateur.ajoutclient(name,db);
     //S res.statusCode = 200;
     //S res.setHeader('Content-Type', 'application/json');
    // res.send({ title: 'GeeksforGeeks' });
  
    res.status(200).send("OK");
  //  client.close();
  }catch(error){

   // res.statusCode = 404;
   //S res.send(error);
   //console.log(error.message);
   
 
  res.send({ title: error.message });
  res.status(404).send(error.message);
 // client.close();
 
    //res.end();


  }
});


app.post('/modifierclient', (req, res) => {
  client.connect();
  var name = req.body; 
 
  
  try{
      metierutilisateur.modifierclient(name,db);
     //S res.statusCode = 200;
     //S res.setHeader('Content-Type', 'application/json');
    // res.send({ title: 'GeeksforGeeks' });
   // client.close();
  
    return res.status(200).send("OK");
   
  }catch(error){

   // res.statusCode = 404;
   //S res.send(error);
   //console.log(error.message);
   

 // res.send({ title: error.message });
 return res.status(404).json(error.message);

 
    //res.end();


  }
});




app.post('/modifierplat', (req, res) => {
  client.connect();
  var name = req.body; 

  
  try{
     // metierrestaurant.modifierrestaurant(name,db);
     //S res.statusCode = 200;
     //S res.setHeader('Content-Type', 'application/json');
    // res.send({ title: 'GeeksforGeeks' });
   // client.close();
    metierplat.modifierplat(name,db);
    return res.status(200).send("OK");
   
  }catch(error){

   // res.statusCode = 404;
   //S res.send(error);
  
   

 // res.send({ title: error.message });
 return res.status(404).json(error.message);

 
    //res.end();


  }
});


app.post('/modifresto', (req, res) => {
  client.connect();
  var name = req.body; 
 
  
  try{
      metierrestaurant.modifierrestaurant(name,db);
     //S res.statusCode = 200;
     //S res.setHeader('Content-Type', 'application/json');
    // res.send({ title: 'GeeksforGeeks' });
   // client.close();
  
    return res.status(200).send("OK");
   
  }catch(error){

   // res.statusCode = 404;
   //S res.send(error);
   //console.log(error.message);
   

 // res.send({ title: error.message });
 return res.status(404).json(error.message);

 
    //res.end();


  }
});

app.post('/modifrestorateur', (req, res) => {
  client.connect();
  var name = req.body; 
 
  
  try{
      metierutilisateur.modifierlivreur(name,db);
     //S res.statusCode = 200;
     //S res.setHeader('Content-Type', 'application/json');
    // res.send({ title: 'GeeksforGeeks' });
   // client.close();
  
    return res.status(200).send("OK");
   
  }catch(error){

   // res.statusCode = 404;
   //S res.send(error);
   //console.log(error.message);
   

 // res.send({ title: error.message });
 return res.status(404).json(error.message);

 
    //res.end();


  }
});

app.post('/ajoutlivreur', (req, res) => {
  var name = req.body; 
  //console.log(name);
  try{
      metierutilisateur.ajoutglobale(name,db,"livreur");
     //S res.statusCode = 200;
     //S res.setHeader('Content-Type', 'application/json');
    // res.send({ title: 'GeeksforGeeks' });
  
    res.status(200).send("OK");
  //  client.close();
  }catch(error){

   // res.statusCode = 404;
   //S res.send(error);
   //console.log(error.message);
   
 
  res.send({ title: error.message });
  res.status(404).send(error.message);
 // client.close();
 
    //res.end();


  }
});



app.post('/ajoutrestorateur', (req, res) => {
  var name = req.body; 

  try{
      metierutilisateur.ajoutrestorateur(name,db);
     //S res.statusCode = 200;
     //S res.setHeader('Content-Type', 'application/json');
    // res.send({ title: 'GeeksforGeeks' });
  
    res.status(200).send("OK");
  //  client.close();
  }catch(error){

   // res.statusCode = 404;
   //S res.send(error);
   //console.log(error.message);
   
 
   return res.status(404).json(error.message);
 // client.close();
 
    //res.end();


  }
});










client.close();

});
//SQLCMD -L
 app.listen(2000);
