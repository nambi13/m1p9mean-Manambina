import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { ActivatedRoute } from '@angular/router';
import { benefice } from '../model/benefice';
import { BeneficeService } from '../services/benefice.service';

@Component({
  selector: 'app-beneficesrestorateur',
  templateUrl: './beneficesrestorateur.component.html',
  styleUrls: ['./beneficesrestorateur.component.css']
})
export class BeneficesrestorateurComponent implements OnInit {
  benefice:benefice[]=[];
  constructor(private route: ActivatedRoute, private PlatService: PlatService,private BeneficeService:BeneficeService) { }

  ngOnInit(): void {
    this.getbenef();
  }

  getbenef():void{

    this.BeneficeService.getlisteplat().subscribe(users => {
      this.benefice=users;
      console.log(users);

    }, error=>{
      console.log(error.error);
    

    }

    );



  }

}
