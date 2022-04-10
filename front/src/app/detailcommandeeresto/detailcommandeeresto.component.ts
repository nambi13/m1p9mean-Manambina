import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { ActivatedRoute } from '@angular/router';
import { plat } from '../model/plat';


@Component({
  selector: 'app-detailcommandeeresto',
  templateUrl: './detailcommandeeresto.component.html',
  styleUrls: ['./detailcommandeeresto.component.css']
})
export class DetailcommandeerestoComponent implements OnInit {

  plat:plat[]=[];
  constructor(private route: ActivatedRoute, private CommandeService: CommandeService) { }

  ngOnInit(): void {
    this.getclient();
  }

  getclient(){
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    ;
    	this.CommandeService.getdetailresto(id).subscribe(users => {
        //this.users = users.data[0];
        this.plat=users[0].plat;
        console.log(users);
     
      }
    
        
       );

  }
}
