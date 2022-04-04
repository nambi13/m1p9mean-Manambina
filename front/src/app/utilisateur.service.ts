import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {users} from './model/users'

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor() { }
}
