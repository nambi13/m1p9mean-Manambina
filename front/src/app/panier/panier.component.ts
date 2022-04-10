import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { ActivatedRoute } from '@angular/router';
import { plat } from '../model/plat';
import { Location } from '@angular/common';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  error="";
  panierL:plat[]=[];
	constructor(private route: ActivatedRoute, private PlatService: PlatService,private PanierService:PanierService,private location: Location) { }
  ngOnInit(): void {
    this.getpanier();
    //this.getpanier();
  }
  removeFromCart(plat:plat) {
    console.log("ato");
    this.PanierService.removeItem(plat);
   // this.items = this.cartService.getItems();
   this.getpanier();
  }

    getpanier():void{
      this.panierL=this.PanierService.fetchProduct();
    }
    goback():void{
      this.location.back();

    }
    acheter():void{
      //this.panierL=this.PanierService.fetchProduct();
      this.PanierService.ajouterplat().subscribe(data =>{ 
        console.log(data);
        this.PanierService.supprimerpanier();
        this.goback();

         // console.log(jsend);

        }, error=>{
         // console.log(error.error);
          this.error=error.error;
    
    
        }
    
        );
      }

}
