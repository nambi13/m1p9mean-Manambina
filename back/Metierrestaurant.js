function create(formulaire,db){
    if(formulaire.nom  === ""){
        throw new Error('Ajouter nom');
    }
   

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/resto";
 
      
       
        var query = { nom_restaurant: formulaire.nom_restaurant };
        db.collection("restaurant").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          if(result.length>0){
            throw new Error('Restaurant existant');
          }
          else{
            var data2 = {
                nom_restaurant: formulaire.nom,
                etat_restaurant:1,
                
            };

            db.collection("restaurant").insertOne(data2, function(err, res) {
                if (err) throw err;
              
              });


          }
        });
     
    

        return 1;
}

function modifierrestaurant(formulaire,db){
  if(formulaire.nom  === ""){
      throw new Error('Ajouter nom');
  }

  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/resto";

    
     
      var query = { nom_restaurant: formulaire.nom };
      db.collection("utilisateur").find(query).toArray(function(err, result) {
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
              nom_restaurant: formulaire.nom,
              
              }
          };
          
          console.log(good_id);
          db.collection("restaurant").updateOne(myquery,data2, function(err, res) {
              if (err) throw err;
              console.log("1 document updated");
            
            });


        
      });
   
  

      return 1;
}


module.exports = {create:create,modifierrestaurant:modifierrestaurant};