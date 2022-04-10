db.utilisateur.insert([{nom:"jean",prenom:"Bertin",email:"jean@yahoo.fr",nom_profile:"client",etat:"1",mdp:"123"}]);
db.utilisateur.insert([{nom:"Rakoto",prenom:"Bertin",email:"rak@yahoo.fr",nom_profile:"livreur",etat:"1",mdp:"123"}]);


db.utilisateur.insert([{nom:"Rakoto",prenom:"Bertin",email:"nous@yahoo.fr",nom_profile:"restaurant",etat:1,mdp:"123",nom_restaurant:"cheznous"}]);


db.plat.insert([{nom_plat:"akondro",prix:5000,quantite:1,etat_plat:1}]);


db.utilisateur.find([{nom_profile="client",etat:"1"}]);

db.plat.find([{etat_plat:"1"}]);
db.utilisateur.find({$and:[{"nom_profile":"client"},{"etat":"1"}]});