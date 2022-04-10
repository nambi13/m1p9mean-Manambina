import { Component, OnInit } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { ActivatedRoute } from '@angular/router';
import { benefice } from '../model/benefice';
import { BeneficeService } from '../services/benefice.service';

@Component({
  selector: 'app-beneficesfull',
  templateUrl: './beneficesfull.component.html',
  styleUrls: ['./beneficesfull.component.css']
})
export class BeneficesfullComponent implements OnInit {
  benefice:benefice[]=[];
  constructor(private route: ActivatedRoute, private PlatService: PlatService,private BeneficeService:BeneficeService) { }

  ngOnInit(): void {
    this.getbenef();
  }

  getbenef():void{

    this.BeneficeService.gefullbenef().subscribe(users => {
      this.benefice=users;
      console.log(users);

    }, error=>{
      console.log(error.error);
    

    }

    );



  }

}