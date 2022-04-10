import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbardeconnexion',
  templateUrl: './navbardeconnexion.component.html',
  styleUrls: ['./navbardeconnexion.component.css']
})
export class NavbardeconnexionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  deconnexion():void{

 localStorage.removeItem("information")
 this.router.navigate(['/']);

  }

}
