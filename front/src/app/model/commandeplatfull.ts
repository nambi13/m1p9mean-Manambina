import { plat } from "./plat";
export class commandeplatfull {
    "_id":string;
	"numerocommande":string;
    "plat":plat[]
	"email_utilisateur_livreur": string;
    "email_utilisateur_recepteur": string;
    "nom_restaurant":string;
    "date":Date;
    "etat_livraison":number;
   
}