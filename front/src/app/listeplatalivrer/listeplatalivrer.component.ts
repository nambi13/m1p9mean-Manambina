import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { ActivatedRoute } from '@angular/router';
import { commandeplatfull } from '../model/commandeplatfull';

@Component({
  selector: 'app-listeplatalivrer',
  templateUrl: './listeplatalivrer.component.html',
  styleUrls: ['./listeplatalivrer.component.css']
})
export class ListeplatalivrerComponent implements OnInit {
  commandeplatfull:commandeplatfull[]=[];
  constructor(private route: ActivatedRoute, private CommandeService: CommandeService) { }
  ngOnInit(): void {
    
    this.getplat();
  
  
  }
  getplat():void{

    this.CommandeService.getfullcommandelivrer().subscribe(users => {
      this.commandeplatfull=users;
      console.log(users);

    }, error=>{
      console.log(error.error);
    

    }

    );


  }
  livraison(id: string): void {

  
		this.CommandeService.livraison(id).subscribe(success => {});
	}



}