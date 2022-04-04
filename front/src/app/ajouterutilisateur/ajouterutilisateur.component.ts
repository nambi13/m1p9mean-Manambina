import { Component, OnInit,Input } from '@angular/core';
import { Location } from '@angular/common';
import { UtilisateurService } from '../utilisateur.service';    
import { FormsModule, ReactiveFormsModule,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajouterutilisateur',
  templateUrl: './ajouterutilisateur.component.html',
  styleUrls: ['./ajouterutilisateur.component.css']
})
export class AjouterutilisateurComponent implements OnInit {
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
  onSubmit(): void {
    // Process checkout data here
   // this.items = this.cartService.clearCart();
   // console.warn('Your order has been submitted', this.checkoutForm.value);
 //   console.log(this.checkoutForm.value.name);
   // this.checkoutForm.reset();
   this.UtilisateurService.ajouterclient(this.checkoutForm.value).subscribe(data =>{ 
    console.log(data);
     // console.log(jsend);
    }, error=>{
      console.log(error.error);
    //  this.error=error.error;


    }

    );
   
  }

}
