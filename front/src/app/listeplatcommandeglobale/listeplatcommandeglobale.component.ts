import { Component, OnInit } from '@angular/core';

import { CommandeService } from '../services/commande.service';
import { ActivatedRoute } from '@angular/router';
import { commandeplatfull } from '../model/commandeplatfull';
@Component({
  selector: 'app-listeplatcommandeglobale',
  templateUrl: './listeplatcommandeglobale.component.html',
  styleUrls: ['./listeplatcommandeglobale.component.css']
})
export class ListeplatcommandeglobaleComponent implements OnInit {
  commandeplatfull:commandeplatfull[]=[];
  constructor(private route: ActivatedRoute, private CommandeService: CommandeService) { }
  ngOnInit(): void {
    
    this.getplat();
  
  
  }
  getplat():void{

    this.CommandeService.getfullcommande().subscribe(users => {
      this.commandeplatfull=users;
      console.log(users);

    }, error=>{
      console.log(error.error);
    

    }

    );


  }



}

