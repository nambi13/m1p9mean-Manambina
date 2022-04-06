import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PlatService } from '../services/plat.service';  
import { FormsModule, ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ajouterplat',
  templateUrl: './ajouterplat.component.html',
  styleUrls: ['./ajouterplat.component.css']
})
export class AjouterplatComponent implements OnInit {
  error: string= ''

  checkoutForm = this.formBuilder.group({
    nom_plat: [''],
    prix: [''],
    quantite:[''],
  });

  constructor(private PlatService: PlatService, private location: Location,
    private formBuilder: FormBuilder) { }
	

  ngOnInit(): void {
  }
  onSubmit(): void {
   this.PlatService.ajouterplat(this.checkoutForm.value).subscribe(data =>{ 
    console.log(data);
     // console.log(jsend);
    }, error=>{
     // console.log(error.error);
      this.error=error.error;


    }

    );
   
  }

}
