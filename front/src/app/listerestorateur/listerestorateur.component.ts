import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plat } from '../model/plat';
import { utilisateur } from '../model/utilisateur';
import { UtilisateurService } from '../utilisateur.service';


@Component({
  selector: 'app-listerestorateur',
  templateUrl: './listerestorateur.component.html',
  styleUrls: ['./listerestorateur.component.css']
})
export class ListerestorateurComponent implements OnInit {
  utilisateur:utilisateur[]=[];
  constructor(private route: ActivatedRoute, private UtilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.getlistelivreur();
  }

  getlistelivreur():void{

    this.UtilisateurService.listerestorateur().subscribe(utilisateur =>{ 
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