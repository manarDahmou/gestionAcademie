import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-display-formation',
  templateUrl: './display-formation.component.html',
  styleUrls: ['./display-formation.component.css']
})
export class DisplayFormationComponent implements OnInit {
  id : any;
  users:any;
  formation:any;
  academie: any;
  formee: any=[];
  salle: any=[];
  formateur: any=[];
  nbFormee:any;
  nbSalle:any;
  nbFormateur:any;
  constructor(private activatedRoute : ActivatedRoute , private formationService:FormationService) { }

  ngOnInit() {
    this.academie = JSON.parse(localStorage.getItem('Academie') || '[]');
    this.salle = JSON.parse(localStorage.getItem('salle') || '[]');
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
    for (let i = 0; i < this.salle.length; i++) {
        this.nbSalle = this.nbSalle+1;
      
    }
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id",this.id);
    // this.users = JSON.parse(localStorage.getItem('formation') || '[]');
    // for (let i = 0; i < this.users.length; i++) {
    //   if(this.users[i].id == this.id ){
    //     this.formation = this.users[i]
    //   }
    // }
    console.log('my user', this.formation)
     ///////////////////////         service    ///////////////////////
     this.formationService.getFormationById(this.id).subscribe(
      (data)=>{
        console.log('get formation by id',data.finded)
        this.formation = data.finded;
      }
    )
  }

}
