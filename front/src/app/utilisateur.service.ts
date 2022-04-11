import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {utilisateur} from './model/utilisateur'
/////dsfgsd
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private productUrl = 'http://localhost:2000';  // Base URL to REST API
  
  constructor(private http: HttpClient) { }


  getlisteclient(): Observable<utilisateur[]> {
    return this.http.get<utilisateur[]>(this.productUrl + '/listeclients');
  }

  ajouterclient(Object:Object) {
    //console.log(product);
    //  return this.http.post<users>(this.productUrl + '/create', users, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
      return this.http.post(this.productUrl + '/create', Object, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
    }

    ajoutlivreur(Object:Object) {
      //console.log(product);
      //  return this.http.post<users>(this.productUrl + '/create', users, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
        return this.http.post(this.productUrl + '/ajoutlivreur', Object, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
      }

      ajoutrestaurateur(Object:Object) {
        //console.log(product);
        //  return this.http.post<users>(this.productUrl + '/create', users, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
          return this.http.post(this.productUrl + '/ajoutrestorateur', Object, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
        }
  listelivre(): Observable<utilisateur[]>{
    return this.http.get<utilisateur[]>(this.productUrl + '/listelivreur');
  }

  listerestorateur(): Observable<utilisateur[]>{
    return this.http.get<utilisateur[]>(this.productUrl + '/listerestorateur');
  }
  getdetailclient(id: string): Observable<any> {
    const url = `${this.productUrl}/detailclient/${id}`;
    return this.http.get<utilisateur>(url);
  }
  modifierclient(Object: object): Observable<any> {
    return this.http.post(this.productUrl + '/modifierclient', Object, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
  }
  modifierrestorateur(Object: object): Observable<any> {
    return this.http.post(this.productUrl + '/modifrestorateur', Object, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
  }
  supprimer(Object: object): Observable<any> {
    return this.http.post(this.productUrl + '/supprimerutilisateur', Object, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
  }
  login(Object: object): Observable<any> {
    return this.http.post(this.productUrl + '/login', Object, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
  }
   insertlocal(utilisateur:utilisateur) {
    const now = new Date()
  
    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
      value: JSON.stringify(utilisateur),
      expiry: now.getTime() + 108000,
    }
    localStorage.setItem("information", JSON.stringify(item))
  }

   getWithExpiry() {
    const itemStr = localStorage.getItem("information")
    // if the item doesn't exist, return null
    if (!itemStr) {
      return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem("information")
      return null
    }
    return item.value
  }
  

}
