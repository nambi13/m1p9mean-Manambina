import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { ActivatedRoute } from '@angular/router';
import { plat } from '../model/plat';

@Component({
  selector: 'app-listeplat',
  templateUrl: './listeplat.component.html',
  styleUrls: ['./listeplat.component.css']
})
export class ListeplatComponent implements OnInit {
  plat:plat[]=[];
	constructor(private route: ActivatedRoute, private PlatService: PlatService) { }
  ngOnInit(): void {
    this.getProducts();
  
  
  }

  getProducts(): void {
    //	this.UsersService.getProducts().subscribe(users => this.users = users);
    
      this.PlatService.getlisteplat().subscribe(utilisateur =>{ 
       // console.log(utilisateur)      
        this.plat = utilisateur}
        );
    }

}
