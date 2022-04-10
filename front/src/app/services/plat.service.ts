import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {plat} from '../model/plat'
@Injectable({
  providedIn: 'root'
})
export class PlatService {

  private productUrl = 'http://localhost:2000';  // Base URL to REST API
  
  constructor(private http: HttpClient) { }


  getlisteplat(): Observable<plat[]> {
    return this.http.get<plat[]>(this.productUrl + '/listeplat');
  }

  ajouterplat(Object:Object) {
    //console.log(product);
    //  return this.http.post<users>(this.productUrl + '/create', users, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
      return this.http.post(this.productUrl + '/ajouterplat', Object, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
    }
    detailplat(id:string):Observable<any>{

      const url = `${this.productUrl}/detailplat/${id}`;
      return this.http.get<plat>(url);
  
  
    }

    
    modifierplat(Object: object): Observable<any> {
      return this.http.post(this.productUrl + '/modifierplat', Object, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
    }

    supprimer(Object: object): Observable<any> {
      return this.http.post(this.productUrl + '/supprimerplat', Object, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
    }

}

