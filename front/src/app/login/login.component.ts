import { Component, OnInit,Input } from '@angular/core';
import { utilisateur } from '../model/utilisateur';
import { UtilisateurService } from '../utilisateur.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { login } from '../model/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string= ''
  login:login=new login();
  utilisateur:utilisateur=new utilisateur;
  checkoutForm = this.formBuilder.group({
    email: [''],
    mdp: [''],
   
  });

  constructor( private router: Router,private UtilisateurService: UtilisateurService, private location: Location,
    private formBuilder: FormBuilder) { }
	

  ngOnInit(): void {
  
  
  }
  connexion():void{
    this.router.navigate(['login']);

  }
  inscription():void{

    this.router.navigate(['ajouterclient']);

  }

  onSubmit(): void {
  this.UtilisateurService.login(this.checkoutForm.value).subscribe(data =>{ 
      console.log(data);
      this.utilisateur=JSON.parse(data);
      console.log(this.utilisateur);
        if(this.utilisateur.nom_profile==="restaurant"){
            this.UtilisateurService.insertlocal(this.utilisateur);
            this.router.navigate(['listecommanderestorateur']);

        }
        else if(this.utilisateur.nom_profile==="client"){
          this.UtilisateurService.insertlocal(this.utilisateur);
          this.router.navigate(['listeplat']);
        }
        else if(this.utilisateur.nom_profile==="eresto"){
          this.UtilisateurService.insertlocal(this.utilisateur);
          this.router.navigate(['listeplatcommande']);
        }
        else if(this.utilisateur.nom_profile==="livreur"){

          this.UtilisateurService.insertlocal(this.utilisateur);
          this.router.navigate(['platlivrer']);
          
        }



    }, error=>{
      this.error=error.error;

    }

    );
   
  }

}
