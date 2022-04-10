import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { benefice } from '../model/benefice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficeService {

  private productUrl = 'http://localhost:2000';
  constructor(private http: HttpClient) { }

  getlisteplat(): Observable<benefice[]> {

    var x=localStorage.getItem("information") ?? '';
    var json=JSON.parse(x);
  //  console.log(json.value);
    var parse2=JSON.parse(json.value);
    var id=parse2.nom_restaurant;
    const url = `${this.productUrl}/benefice/${id}`;
    return this.http.get<benefice[]>(url);
  }

  
  gefullbenef(): Observable<benefice[]> {

    var x=localStorage.getItem("information") ?? '';
    var json=JSON.parse(x);
  //  console.log(json.value);
    var parse2=JSON.parse(json.value);
    var id=parse2.nom_restaurant;
    const url = `${this.productUrl}/beneficefull`;
    return this.http.get<benefice[]>(url);
  }
  
  
  
}
