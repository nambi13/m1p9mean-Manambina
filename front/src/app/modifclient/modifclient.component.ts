import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';
import { utilisateur } from '../model/utilisateur';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modifclient',
  templateUrl: './modifclient.component.html',
  styleUrls: ['./modifclient.component.css']
})
export class ModifclientComponent implements OnInit {
  error="";
  utilisateur:utilisateur=new utilisateur;
  checkoutForm = this.formBuilder.group({
    id:[''],
    nom: [''],
    prenom: [''],
    email:[''],
    mdp1:[''],
    mdp2:[''],
  });
  constructor(private route: ActivatedRoute,private UtilisateurService:UtilisateurService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getclient();
   
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
    this.UtilisateurService.modifierclient(this.checkoutForm.value).subscribe(data =>{ 
      console.log(data);
       // console.log(jsend);
      }, error=>{
       // console.log(error.error);
        this.error=error.error;
  
  
      }
  
      );
  }
}