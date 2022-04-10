import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { ActivatedRoute } from '@angular/router';
import { plat } from '../model/plat';
import { Location } from '@angular/common';
import { PanierService } from '../services/panier.service';
import { RestoService } from '../services/resto.service';
import { FormBuilder } from '@angular/forms';
import { restaurant } from '../model/restaurant';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  error="";
  restaurant:restaurant[]=[]
  panierL:plat[]=[];
  checkoutForm = this.formBuilder.group({
    nom_restaurant: [''],
  })
	constructor(private formBuilder:FormBuilder,private route: ActivatedRoute,private RestoService: RestoService,private PlatService: PlatService,private PanierService:PanierService,private location: Location) { };
  ngOnInit(): void {
    this.getProducts();
    this.getpanier();
    //this.getpanier();
  }

  getProducts(): void {
    //	this.UsersService.getProducts().subscribe(users => this.users = users);
    
      this.RestoService.getlisterestaurant().subscribe(utilisateur =>{ 
       // console.log(utilisateur)      
        this.restaurant = utilisateur}
        );
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
      console.log(this.checkoutForm.value);
      //this.panierL=this.PanierService.fetchProduct();

     this.PanierService.ajouterplat(this.checkoutForm.value.nom_restaurant).subscribe(data =>{ 
      //  console.log(data);
        this.PanierService.supprimerpanier();
        this.goback();

         // console.log(jsend);

        }, error=>{
          console.log(error.error);
          this.error=error.error;
    
    
        }
    
       );
      }

}
