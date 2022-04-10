import { Component, OnInit } from '@angular/core';
import { RestoService } from '../services/resto.service';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { restaurant } from '../model/restaurant';
import { ActivatedRoute } from '@angular/router';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-ajoutrestorateur',
  templateUrl: './ajoutrestorateur.component.html',
  styleUrls: ['./ajoutrestorateur.component.css']
})
export class AjoutrestorateurComponent implements OnInit {
  error: string= ''
  restaurant:restaurant[]=[];
  checkoutForm = this.formBuilder.group({
    nom_restaurant: [''],
    nom:[''],
    prenom: [''],
    email:[''],
    mdp1:[''],
    mdp2:[''],
  });
  
	constructor(private route: ActivatedRoute, private  RestoService:  RestoService, private UtilisateurService:UtilisateurService,  private formBuilder: FormBuilder,private location: Location) { }
  ngOnInit(): void {
    this.getProducts();
    //this.getpanier();
  
  
  }

  getProducts(): void {
    //	this.UsersService.getProducts().subscribe(users => this.users = users);
    
      this.RestoService.getlisterestaurant().subscribe(utilisateur =>{ 
       // console.log(utilisateur)      
        this.restaurant = utilisateur}
        );
    }
    goBack(): void {
      this.location.back();
    }

    onSubmit(): void {
    

      this.UtilisateurService.ajoutrestaurateur(this.checkoutForm.value).subscribe(data =>{ 
       // console.log(data);
         // console.log(jsend);
          this.goBack();
        }, error=>{
         // console.log(error.error);
         this.error=error.error;
    // console.log(this.checkoutForm.value);
     
    });
  }
}
 
  
