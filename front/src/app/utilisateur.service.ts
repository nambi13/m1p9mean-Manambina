import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {utilisateur} from './model/utilisateur'

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
  

}
