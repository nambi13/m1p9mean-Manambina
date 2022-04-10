import { Injectable } from '@angular/core';
import { commandeplatfull } from '../model/commandeplatfull';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { plat } from '../model/plat';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  commandeplatfull:commandeplatfull=new commandeplatfull;
  private productUrl = 'http://localhost:2000';
  constructor(private http: HttpClient) { }
  
  getlisteplat(): Observable<commandeplatfull[]> {

    var x=localStorage.getItem("information") ?? '';
    var json=JSON.parse(x);
  //  console.log(json.value);
    var parse2=JSON.parse(json.value);
    var id=parse2.nom_restaurant;
    const url = `${this.productUrl}/detailcommanderesto/${id}`;
    return this.http.get<commandeplatfull[]>(url);
  }


  getdetailresto(id:string):Observable<any>{

    const url = `${this.productUrl}/detailcommandeplat/${id}`;
    return this.http.get(url);


  }
   
  getfullcommande(): Observable<commandeplatfull[]> {

    var x=localStorage.getItem("information") ?? '';
    var json=JSON.parse(x);
  //  console.log(json.value);
    var parse2=JSON.parse(json.value);
    var id=parse2.nom_restaurant;
    const url = `${this.productUrl}/fullcommande`;
    return this.http.get<commandeplatfull[]>(url);
  }

  getfullcommandelivrer(): Observable<commandeplatfull[]> {

    var x=localStorage.getItem("information") ?? '';
    var json=JSON.parse(x);
  //  console.log(json.value);
    var parse2=JSON.parse(json.value);
    var id=parse2.nom_restaurant;
    const url = `${this.productUrl}/fullcommandelivrer`;
    return this.http.get<commandeplatfull[]>(url);
  }

  
  livraison(id:string) {
    //console.log(product);
    //  return this.http.post<users>(this.productUrl + '/create', users, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
    
    var x=localStorage.getItem("information") ?? '';
    var json=JSON.parse(x);
    console.log(json.value);
    var parse2=JSON.parse(json.value);
    console.log(parse2._id);
    
    var object={
      "_id":id,
      "idlivreur":parse2._id
    }
      return this.http.post(this.productUrl + '/livraison', object, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
    }
  
  
}



