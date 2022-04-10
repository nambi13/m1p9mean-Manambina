import { Component, OnInit } from '@angular/core';
import { RestoService } from '../services/resto.service';
import { ActivatedRoute } from '@angular/router';
import { restaurant } from '../model/restaurant';

@Component({
  selector: 'app-listeresto',
  templateUrl: './listeresto.component.html',
  styleUrls: ['./listeresto.component.css']
})
export class ListerestoComponent implements OnInit {
  restaurant:restaurant[]=[];
	constructor(private route: ActivatedRoute, private  RestoService:  RestoService) { }
  ngOnInit(): void {
    this.getProducts();
    //this.getpanier();
  
  
  }

  getProducts(): void {
    //	this.UsersService.getProducts().subscribe(users => this.users = users);
    
      this.RestoService.getlisterestaurant().subscribe(utilisateur =>{ 
       // console.log(utilisateur)      
        this.restaurant = utilisateur}
        );
    }


    delete( restaurant:  restaurant): void {
      this.RestoService.supprimer(restaurant).subscribe(users => {
        this.getProducts();
       // console.log(users);
  
      }, error=>{
        console.log(error.error);
      
  
      }
  
      );
    }
 
  

}