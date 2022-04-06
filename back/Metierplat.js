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
                prix: formulaire.prix,
                quantite:formulaire.quantite,
                etat_plat:1,
            };

            db.collection("plat").insertOne(data2, function(err, res) {
                if (err) throw err;
              
              });


          }
        });
     
    

        return 1;



}
module.exports = {ajoutplat:ajoutplat};