import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {restaurant} from '../model/restaurant'

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  private productUrl = 'http://localhost:2000';  // Base URL to REST API
  
  constructor(private http: HttpClient) { }


  getlisterestaurant(): Observable<restaurant[]> {
    return this.http.get<restaurant[]>(this.productUrl + '/listeresto');
  }

  ajouterresto(Object:Object) {
    //console.log(product);
    //  return this.http.post<users>(this.productUrl + '/create', users, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'});
      return this.http.post(this.productUrl + '/ajouterresto', Object, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
    }
  getdetailresto(id:string):Observable<any>{

    const url = `${this.productUrl}/detailresto/${id}`;
    return this.http.get<restaurant>(url);


  }

    modifierrestorateur(Object: object): Observable<any> {
      return this.http.post(this.productUrl + '/modifresto', Object, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
    }
    supprimer(Object: object): Observable<any> {
      return this.http.post(this.productUrl + '/suprimeresto', Object, {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' as 'json'})
    }

}