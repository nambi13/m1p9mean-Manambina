
 function ajoutclient(formulaire,db){
    if(formulaire.nom  === ""){
        throw new Error('Ajouter nom');
    }
    if(formulaire.prenom === ""){

        throw new Error('Ajouter prenom');
    }
    if(formulaire.email === ""){

        throw new Error('Ajouter email');
    }
    if(formulaire.mdp1 === ""){

        throw new Error('Ajouter mdp');
    }
    if(formulaire.mdp2 === ""){

        throw new Error('ajouter mdp2');
    }

    if(formulaire.mdp1 != formulaire.mdp2){
        throw new Error('mpt de passe non pareil');

    }

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/resto";
 
      
       
        var query = { email: formulaire.email };
        db.collection("utilisateur").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          if(result.length>0){
            throw new Error('Email existant');
          }
          else{
            var data2 = {
                nom: formulaire.nom,
                prenom: formulaire.prenom,
                email:formulaire.email,
                mdp:formulaire.mdp1,
                etat:'1',
                nom_profile:'client'
            };

            db.collection("utilisateur").insertOne(data2, function(err, res) {
                if (err) throw err;
              
              });


          }
        });
     
    

        return 1;


  
}
function readCondition(idpiece,idFournisseur){
   
}
module.exports = {ajoutclient:ajoutclient};