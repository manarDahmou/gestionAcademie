import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-display-salle',
  templateUrl: './display-salle.component.html',
  styleUrls: ['./display-salle.component.css']
})
export class DisplaySalleComponent implements OnInit {

  id : any;
  users:any;
  salle:any;
  academie: any;
  formee: any=[];
  sallee: any=[];
  formateur: any=[];
  nbFormee:any;
  nbSalle:any;
  nbFormateur:any;
  constructor(private activatedRoute : ActivatedRoute , private salleService:SalleService) { }

  ngOnInit() {
    this.academie = JSON.parse(localStorage.getItem('Academie') || '[]');
    this.sallee = JSON.parse(localStorage.getItem('salle') || '[]');
    this.formateur = JSON.parse(localStorage.getItem('formateur') || '[]');

   
    this.nbFormee=0;
    this.nbSalle=0;
    this.nbFormateur=0;
    for (let i = 0; i < this.academie.length; i++) {
      if (this.academie[i].role == 'formée') {
        this.formee = this.academie[i];
        this.nbFormee = this.nbFormee+1;
      }
    }
    for (let i = 0; i < this.formateur.length; i++) {
        this.nbFormateur = this.nbFormateur+1;
      
    }
    for (let i = 0; i < this.sallee.length; i++) {
        this.nbSalle = this.nbSalle+1;
      
    }
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id",this.id);
    this.users = JSON.parse(localStorage.getItem('salle') || '[]');
    // for (let i = 0; i < this.users.length; i++) {
    //   if(this.users[i].id == this.id ){
    //     this.salle = this.users[i]
    //   }
    // }
    console.log('my user', this.salle)
     ///////////////////////         service    ///////////////////////
     this.salleService.getSalleById(this.id).subscribe(
      (data)=>{
        console.log('get salle by id',data.finded)
        this.salle = data.finded;
      }
    )
  }

}
