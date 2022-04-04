import { Component, OnInit,Input } from '@angular/core';
import { utilisateur } from '../model/utilisateur';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
    utilisateur:utilisateur[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
