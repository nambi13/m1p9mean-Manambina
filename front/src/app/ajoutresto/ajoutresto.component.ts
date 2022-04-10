import { Component, OnInit } from '@angular/core';
import { RestoService } from '../services/resto.service';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ajoutresto',
  templateUrl: './ajoutresto.component.html',
  styleUrls: ['./ajoutresto.component.css']
})
export class AjoutrestoComponent implements OnInit {

  error: string= ''
  
  checkoutForm = this.formBuilder.group({
    nom: [''],
  });

  constructor(private RestoService: RestoService, private location: Location,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  goBack(): void {
		this.location.back();
	}

  onSubmit(): void {
    // Process checkout data here
   // this.items = this.cartService.clearCart();
   // console.warn('Your order has been submitted', this.checkoutForm.value);
 //   console.log(this.checkoutForm.value.name);
   // this.checkoutForm.reset();
   this.RestoService.ajouterresto(this.checkoutForm.value).subscribe(data =>{ 
    //console.log(data);
     // console.log(jsend);
     this.goBack();
    }, error=>{
     // console.log(error.error);
      this.error=error.error;


    }

    );
   
  }

}
