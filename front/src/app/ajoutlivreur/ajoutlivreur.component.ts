import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ajoutlivreur',
  templateUrl: './ajoutlivreur.component.html',
  styleUrls: ['./ajoutlivreur.component.css']
})
export class AjoutlivreurComponent implements OnInit {

  error: string= ''
  
  checkoutForm = this.formBuilder.group({
    nom: [''],
    prenom: [''],
    email:[''],
    mdp1:[''],
    mdp2:[''],
  });

  constructor(private UtilisateurService: UtilisateurService, private location: Location,
    private formBuilder: FormBuilder) { }
	

  ngOnInit(): void {
  }

  goBack(): void {
		this.location.back();
	}

  onSubmit(): void {
    // Process checkout data here
   // this.items = this.cartService.clearCart();
   // console.warn('Your order has been submitted', this.checkoutForm.value);
 //   console.log(this.checkoutForm.value.name);
   // this.checkoutForm.reset();
   this.UtilisateurService.ajoutlivreur (this.checkoutForm.value).subscribe(data =>{ 
    console.log(data);
    this.goBack();
     // console.log(jsend);
    }, error=>{
     // console.log(error.error);
      this.error=error.error;


    }

    );
   
  }

}
