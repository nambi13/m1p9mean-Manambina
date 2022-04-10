import { Component, OnInit } from '@angular/core';
import { plat } from '../model/plat';
import { PlatService } from '../services/plat.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modifplat',
  templateUrl: './modifplat.component.html',
  styleUrls: ['./modifplat.component.css']
})
export class ModifplatComponent implements OnInit {
  error="";
  plat:plat=new plat;
  checkoutForm = this.formBuilder.group({
    id:[''],
    nom_plat: [''],
    prix: [''],
 
  });
  constructor(private route: ActivatedRoute,private PlatService:PlatService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getclient();
   
   
  }
  getclient(){
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    ;
    	this.PlatService.detailplat(id).subscribe(users => {
        //this.users = users.data[0];
        this.plat=users[0];
        console.log(users[0]);
     
        this.checkoutForm.patchValue({
          id:this.plat._id,
          nom_plat:this.plat.nom_plat,
          prix:this.plat.prix,
        
          
        })

      }
    
        
       );

  }
  save(): void {
    this.PlatService.modifierplat(this.checkoutForm.value).subscribe(data =>{ 
      console.log(data);
       // console.log(jsend);
      }, error=>{
       // console.log(error.error);
        this.error=error.error;
  
  
      }
  
      );
  }
}