import { JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {plat} from '../model/plat';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {commande} from '../model/commande';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  commande:commande=new commande;
  private productUrl = 'http://localhost:2000';
  constructor(private http: HttpClient) { }
  
  platpanier:plat[]=[];

  check(plat:plat){
    this.platpanier=JSON.parse(localStorage.getItem('cart_items') || '{}');
    for(let i = 0; i < this.platpanier.length ; i++){ 
      if(this.platpanier[i]._id===plat._id){
        
          return 1;
          break;
      }   
    }
    return 0;
  }
  removeItemandgetnombre(plat:plat) {
    const index = this.platpanier.findIndex(o => o._id === plat._id);

    if (index > -1) {
      this.platpanier[index].prix=this.platpanier[index].prix+plat.prix;
      this.platpanier[index].quantite=this.platpanier[index].quantite+1;
      this.saveCart();
    }
    else{
      plat.quantite=1;
    this.platpanier.push(plat);
    this.saveCart();

    }
    
  }

  addToCart(plat:plat) {
    //this.plat=this.fetchProduct();
   // this.removeItem(plat);
  //  plat.quantite="2"
  //  this.plat.push(plat);
  //  this.saveCart();
  this.removeItemandgetnombre(plat)
  }

  getItems() {
    return this.platpanier;
  } 

  fetchProduct():plat[]{
    // localStorage.removeItem('cartdata');
    return JSON.parse(localStorage.getItem('cart_items') || '{}');; //saved data of product into localStorage
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.platpanier)); 
  }

  clearCart(plat:plat) {
    this.platpanier = [];

    localStorage.removeItem("cart_items")
  }

  removeItem(plat:plat) {
    const index = this.platpanier.findIndex(o => o._id === plat._id);

    if (index > -1) {
      this.platpanier.splice(index, 1);
      this.saveCart();
    }
  }

  itemInCart(plat:plat): boolean {
    return this.platpanier.findIndex(o => o._id ===  plat._id) > -1;
  }
  supprimerpanier(){
    this.platpanier=[];
    localStorage.removeItem("cart_items");

  }

  ajouterplat(nom_restaurant:string) {
    var x=localStorage.getItem("information") ?? '';
    var json=JSON.parse(x);
  //  console.log(json.value);
    var parse2=JSON.parse(json.value);
   // console.log(parse2._id);
    
    //console.log(product);
    //  return this.http.post<users>(this.productUrl + '/create', users, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
    this.commande.email=parse2._id;
    this.commande.restaurant=nom_restaurant;
    this.commande.plat=this.fetchProduct(); 
  
    
    return this.http.post(this.productUrl + '/commande', this.commande, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
    }

  
  
}



