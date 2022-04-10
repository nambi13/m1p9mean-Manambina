import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { ActivatedRoute } from '@angular/router';
import { commandeplatfull } from '../model/commandeplatfull';

@Component({
  selector: 'app-listecommanderestorateur',
  templateUrl: './listecommanderestorateur.component.html',
  styleUrls: ['./listecommanderestorateur.component.css']
})
export class ListecommanderestorateurComponent implements OnInit {
  commandeplatfull:commandeplatfull[]=[];
  constructor(private route: ActivatedRoute, private CommandeService: CommandeService) { }
  ngOnInit(): void {
    
    this.getplat();
  
  
  }
  getplat():void{

    this.CommandeService.getlisteplat().subscribe(users => {
      this.commandeplatfull=users;
      console.log(users);

    }, error=>{
      console.log(error.error);
    

    }

    );


  }



}
