import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';
import { utilisateur } from '../model/utilisateur';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { RestoService } from '../services/resto.service';
import { restaurant } from '../model/restaurant';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modifrestorateur',
  templateUrl: './modifrestorateur.component.html',
  styleUrls: ['./modifrestorateur.component.css']
})
export class ModifrestorateurComponent implements OnInit {
  error="";
  utilisateur:utilisateur=new utilisateur;
  restaurant:restaurant[]=[];
  checkoutForm = this.formBuilder.group({
    id:[''],
    nom: [''],
    prenom: [''],
    email:[''],
    nom_restaurant:[''],
    mdp1:[''],
    mdp2:[''],
  });
  constructor(private route: ActivatedRoute,private UtilisateurService:UtilisateurService, private  RestoService:  RestoService,private formBuilder:FormBuilder,private location: Location) { }

  ngOnInit(): void {
    this.getclient();
    this.getProducts();
   
  }
  goBack(): void {
		this.location.back();
	}
  getProducts(): void {
    //	this.UsersService.getProducts().subscribe(users => this.users = users);
    
      this.RestoService.getlisterestaurant().subscribe(utilisateur =>{ 
        console.log(utilisateur)      
        this.restaurant = utilisateur}
        );
    }
  getclient(){
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    ;
    	this.UtilisateurService.getdetailclient(id).subscribe(users => {
        //this.users = users.data[0];
        this.utilisateur=users[0];
        console.log(this.utilisateur);
        this.checkoutForm.patchValue({
          id:this.utilisateur._id,
          nom:this.utilisateur.nom_utilisateur,
          prenom:this.utilisateur.prenom,
          email:this.utilisateur.email,
          mdp2:this.utilisateur.mdp,
          mdp1:this.utilisateur.mdp,
          
        })

      }
    
        
       );

  }
  save(): void {
    this.UtilisateurService.modifierrestorateur(this.checkoutForm.value).subscribe(data =>{ 
      //console.log(data);
       // console.log(jsend);
       this.goBack();
      }, error=>{
       // console.log(error.error);
        this.error=error.error;
  
  
      }
  
      );
  }
}