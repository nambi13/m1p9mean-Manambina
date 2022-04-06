import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { ActivatedRoute } from '@angular/router';
import { plat } from '../model/plat';
import { PanierService } from '../services/panier.service';
@Component({
  selector: 'app-listeplat',
  templateUrl: './listeplat.component.html',
  styleUrls: ['./listeplat.component.css']
})
export class ListeplatComponent implements OnInit {
  plat:plat[]=[];
	constructor(private route: ActivatedRoute, private PlatService: PlatService,private PanierService:PanierService) { }
  ngOnInit(): void {
    this.getProducts();
    //this.getpanier();
  
  
  }

  getProducts(): void {
    //	this.UsersService.getProducts().subscribe(users => this.users = users);
    
      this.PlatService.getlisteplat().subscribe(utilisateur =>{ 
       // console.log(utilisateur)      
        this.plat = utilisateur}
        );
    }
    ajoutpanier(plat: plat): void{

      this.PanierService.addToCart(plat);
      this.getProducts();
    }
  

}
