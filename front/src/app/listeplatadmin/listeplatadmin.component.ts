import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { ActivatedRoute } from '@angular/router';
import { plat } from '../model/plat';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-listeplatadmin',
  templateUrl: './listeplatadmin.component.html',
  styleUrls: ['./listeplatadmin.component.css']
})
export class ListeplatadminComponent implements OnInit {
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

    delete(plat: plat): void {
      this.PlatService.supprimer(plat).subscribe(users => {
        this.getProducts();
       // console.log(users);
  
      }, error=>{
        console.log(error.error);
      
  
      }
  
      );
    }
  

}
