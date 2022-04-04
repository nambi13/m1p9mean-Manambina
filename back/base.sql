db.utilisateur.insert([{nom:"jean",prenom:"Bertin",email:"jean@yahoo.fr",nom_profile:"client",etat:"1",mdp:"123"}]);
db.utilisateur.insert([{nom:"Rakoto",prenom:"Bertin",email:"rak@yahoo.fr",nom_profile:"livreur",etat:"1",mdp:"123"}]);


db.utilisateur.find([{nom_profile="client",etat:"1"}]);


db.utilisateur.find({$and:[{"nom_profile":"client"},{"etat":"1"}]});