import { Component, OnInit } from '@angular/core';
import { RestoService } from '../services/resto.service';
import { restaurant } from '../model/restaurant';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modifresto',
  templateUrl: './modifresto.component.html',
  styleUrls: ['./modifresto.component.css']
})
export class ModifrestoComponent implements OnInit {
  error="";
  restaurant:restaurant=new restaurant;
  checkoutForm = this.formBuilder.group({
    id:[''],
    nom: [''],
  });
  constructor(private route: ActivatedRoute, private  RestoService:  RestoService,private formBuilder:FormBuilder,private location: Location) { }

  ngOnInit(): void {
    this.getclient();

   
  }

  getclient(){
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    ;
    	this.RestoService.getdetailresto(id).subscribe(users => {
        //this.users = users.data[0];
        this.restaurant=users[0];
        
       console.log(users);
        this.checkoutForm.patchValue({
          id:this.restaurant._id,
          nom:this.restaurant.nom_restaurant,
       
          
        })

      }
    
        
       );

  }
  goBack(): void {
		this.location.back();
	}

  save(): void {
    this.RestoService.modifierrestorateur(this.checkoutForm.value).subscribe(data =>{ 
      console.log(data);
       // console.log(jsend);
       this.location.back();
      }, error=>{
       // console.log(error.error);
        this.error=error.error;
  
  
      }
  
      );
  }
}