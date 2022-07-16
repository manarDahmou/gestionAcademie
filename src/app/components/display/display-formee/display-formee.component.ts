import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormeeService } from 'src/app/services/formee.service';

@Component({
  selector: 'app-display-formee',
  templateUrl: './display-formee.component.html',
  styleUrls: ['./display-formee.component.css']
})
export class DisplayFormeeComponent implements OnInit {
  id: any;
  users: any;
  formee: any;
  academie: any;
  formeee: any = [];
  salle: any = [];
  formateur: any = [];
  nbFormee: any;
  nbSalle: any;
  nbFormateur: any;
  mesFormateur:any;
  constructor(private activatedRoute: ActivatedRoute, private formeeService: FormeeService) { }

  ngOnInit() {
    this.academie = JSON.parse(localStorage.getItem('Academie') || '[]');
    this.salle = JSON.parse(localStorage.getItem('salle') || '[]');
    this.formateur = JSON.parse(localStorage.getItem('formateur') || '[]');


    this.nbFormee = 0;
    this.nbSalle = 0;
    this.nbFormateur = 0;
    for (let i = 0; i < this.academie.length; i++) {
      if (this.academie[i].role == 'formée') {
        this.formeee = this.academie[i];
        this.nbFormee = this.nbFormee + 1;
      }
    }
    for (let i = 0; i < this.formateur.length; i++) {
      this.nbFormateur = this.nbFormateur + 1;

    }
    for (let i = 0; i < this.salle.length; i++) {
      this.nbSalle = this.nbSalle + 1;

    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id", this.id);
    this.users = JSON.parse(localStorage.getItem('Academie') || '[]');
    // for (let i = 0; i < this.users.length; i++) {
    //   if(this.users[i].id == this.id ){
    //     this.formee = this.users[i]
    //   }
    // }
    console.log('my user', this.formee)


    ///////////////////////         service    ///////////////////////
    this.formeeService.getFormeeById(this.id).subscribe(
      (data)=>{
        console.log('get formee by id',data.finded)
        this.formee = data.finded;
      }
    )
  }
}
