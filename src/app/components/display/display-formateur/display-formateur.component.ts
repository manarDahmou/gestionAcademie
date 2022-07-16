import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-display-formateur',
  templateUrl: './display-formateur.component.html',
  styleUrls: ['./display-formateur.component.css']
})
export class DisplayFormateurComponent implements OnInit {
  id : any;
  users:any;
  formateur:any;
  academie: any;
  formee: any=[];
  salle: any=[];
  formateuur: any=[];
  nbFormee:any;
  nbSalle:any;
  nbFormateur:any;
  constructor(private activatedRoute : ActivatedRoute ,private formateurService:FormateurService) { }

  ngOnInit() {
    this.academie = JSON.parse(localStorage.getItem('Academie') || '[]');
    this.salle = JSON.parse(localStorage.getItem('salle') || '[]');
    this.formateuur = JSON.parse(localStorage.getItem('formateur') || '[]');

    
    this.nbFormee=0;
    this.nbSalle=0;
    this.nbFormateur=0;
    for (let i = 0; i < this.academie.length; i++) {
      if (this.academie[i].role == 'formée') {
        this.formee = this.academie[i];
        this.nbFormee = this.nbFormee+1;
      }
    }
    for (let i = 0; i < this.formateuur.length; i++) {
        this.nbFormateur = this.nbFormateur+1;
      
    }
    for (let i = 0; i < this.salle.length; i++) {
        this.nbSalle = this.nbSalle+1;
      
    }
    this.id= this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id",this.id);
    // this.users = JSON.parse(localStorage.getItem('formateur') || '[]');
    // for (let i = 0; i < this.users.length; i++) {
    //   if(this.users[i].id == this.id ){
    //     this.formateur = this.users[i]
    //   }
   // }
    console.log('my user', this.formateur)
    ///////////////////////         service    ///////////////////////
    this.formateurService.getFormateurById(this.id).subscribe(
      (data)=>{
        console.log('get formateur by id',data.finded)
        this.formateur = data.finded;
      }
    )
  }
}
