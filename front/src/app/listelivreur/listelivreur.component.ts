import { Component, OnInit } from '@angular/core';
import { utilisateur } from '../model/utilisateur';
import { ActivatedRoute } from '@angular/router';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-listelivreur',
  templateUrl: './listelivreur.component.html',
  styleUrls: ['./listelivreur.component.css']
})
export class ListelivreurComponent implements OnInit {
  utilisateur:utilisateur[]=[];
  constructor(private route: ActivatedRoute, private UtilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.getlistelivreur();
  }

  getlistelivreur():void{

    this.UtilisateurService.listelivre().subscribe(utilisateur =>{ 
      console.log(utilisateur)      
      this.utilisateur = utilisateur}
      );
  }
  delete(utilisateur: utilisateur): void {
    this.UtilisateurService.supprimer(utilisateur).subscribe(users => {
      this.getlistelivreur();
     // console.log(users);

    }, error=>{
      console.log(error.error);
    

    }

    );
	}
  

}
