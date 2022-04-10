import { Component, OnInit,Input } from '@angular/core';
import { utilisateur } from '../model/utilisateur';
import { UtilisateurService } from '../utilisateur.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
    utilisateur:utilisateur[]=[];
  	constructor(private route: ActivatedRoute, private UtilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.getProducts();
  
  
  }

  getProducts(): void {
    //	this.UsersService.getProducts().subscribe(users => this.users = users);
    
      this.UtilisateurService.getlisteclient().subscribe(utilisateur =>{ 
        console.log(utilisateur)      
        this.utilisateur = utilisateur}
        );
  }
  delete(utilisateur: utilisateur): void {
    this.UtilisateurService.supprimer(utilisateur).subscribe(users => {
      this.getProducts();
     // console.log(users);

    }, error=>{
      console.log(error.error);
    

    }

    );
	}


}
