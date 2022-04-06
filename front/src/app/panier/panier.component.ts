import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { ActivatedRoute } from '@angular/router';
import { plat } from '../model/plat';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panierL:plat[]=[];
	constructor(private route: ActivatedRoute, private PlatService: PlatService,private PanierService:PanierService) { }
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
    acheter():void{
      //this.panierL=this.PanierService.fetchProduct();
      this.PanierService.ajouterplat().subscribe(data =>{ 
        console.log(data);
         // console.log(jsend);
        }, error=>{
         // console.log(error.error);
          //this.error=error.error;
    
    
        }
    
        );
      }

}
