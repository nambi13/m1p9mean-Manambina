function isNum(val){
    return !isNaN(val)
  }
  
  if(!isNum("12")){
    console.log("ato")
  }  
function ajoutplat(formulaire,db){
    if(formulaire.nom_plat  === ""){
        throw new Error('Ajouter nom');
    }
    if(formulaire.prix === ""){

        throw new Error('Ajouter prix');
    }
    else{
        if(!isNum(formulaire.prix)){
            throw new Error('Le prix doit etre un nombre');

        }
        else{
            if(formulaire.prix<=0 ){
                throw new Error('Le prix ne doit pas etre inferieure ou egal a 0');
            }

        }
    }
    if(formulaire.quantite === ""){
        throw new Error('Ajouter quantite');

    }
    else{
     if(!isNum(formulaire.quantite)){
        throw new Error('La quantite doit etre un nombre');
    }
    else{
            if(formulaire.quantite<=-1 ){
                throw new Error('La quantite ne doit pas etre inferieure a  0');
            }
        }    
    }
    var query = { nom_plat: formulaire.nom_plat };
        db.collection("plat").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          if(result.length>0){
            throw new Error('plat existant');
          }
          else{
            var data2 = {
                nom_plat: formulaire.nom_plat,
                prix: parseInt(formulaire.prix),
                quantite:parseInt(formulaire.quantite),
                etat_plat:1,
            };

            db.collection("plat").insertOne(data2, function(err, res) {
                if (err) throw err;
              
              });


          }
        });
     
    

        return 1;
    }
    function commande(formulaire,db){

        
        if(formulaire.plat.length==0){
                throw new Error("Panier vide");
        }
        const ObjectId = require('mongodb').ObjectId; 
        var ids=formulaire.email;
        var good_id = new ObjectId(ids);
        var query={_id: good_id};
        var email="";
        db.collection("utilisateur").find(query).toArray(function(err, result) {
          if (err) throw err;
          email=result[0].email;
          console.log(result);
       
        const crypto = require("crypto");
        const id = crypto.randomBytes(16).toString("hex");
        var idcommande=id;
        let ts = Date.now();
        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
         var data2 = {
           numerocommande: idcommande,
           email_utilisateur_livreur:'',
           email_utilisateur_recepteur:email,
           nom_restaurant:formulaire.restaurant,
         //  date: ISODATE(`${year}-${month}-${date}`),
         plat:formulaire.plat,
         date:new Date(Date.now()).toISOString(),  
         etat_livraison:1
        };
        db.collection("commande").insertOne(data2, function(err, res) {
            if (err) throw err;
        });  
        
    });
        for(let i=0;i<formulaire.plat.length;i++){

           

             var benefice = {
                nom_restaurant:formulaire.restaurant,
               nom_plat:formulaire.plat[i].nom_plat,
               quantite:parseInt(formulaire.plat[i].quantite),
               prix:parseInt(formulaire.plat[i].prix),
               date:new Date(Date.now()).toISOString(),  
             };

           

            db.collection("benefice").insertOne(benefice, function(err, res) {
                if (err) throw err;
            });

        }
}

function modifierplat(formulaire,db){
    if(formulaire.nom_plat  === ""){
        throw new Error('Ajouter nom');
    }
    if(formulaire.prix === ""){

        throw new Error('Ajouter prix');
    }
    else{
        if(!isNum(formulaire.prix)){
            throw new Error('Le prix doit etre un nombre');

        }
        else{
            if(formulaire.prix<=0 ){
                throw new Error('Le prix ne doit pas etre inferieure ou egal a 0');
            }

        }
    }
   

   

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/resto";
 
      
       
        var query = { nom_plat: formulaire.nom_plat };
        db.collection("plat").find(query).toArray(function(err, result) {
          if (err) throw err;
          if(result.length>0){
              if(result[0]._id!=formulaire.id){
            throw new Error('Nom existant');
              }
          }
        
          const ObjectId = require('mongodb').ObjectId; 
            var good_id = new ObjectId(formulaire.id);
            var myquery={_id: good_id};
            var data2 = {$set: {
                nom_plat:formulaire.nom_plat,
                prix:parseInt(formulaire.prix)
                }
            };
            
            console.log(good_id);
            db.collection("plat").updateOne(myquery,data2, function(err, res) {
                if (err) throw err;
                console.log("1 document updated");
              
              });


          
        });
     
    

        return 1;
}
module.exports = {ajoutplat:ajoutplat,commande:commande,modifierplat:modifierplat};