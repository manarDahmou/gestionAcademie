import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SalleService } from 'src/app/services/salle.service';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css']
})
export class AddSalleComponent implements OnInit {
  addSalleForm: FormGroup;
  id: any;
  title: any;
  users: any;
  user: any = [];
  academie: any;
  formee: any = [];
  salle: any = [];
  formateur: any = [];
  nbFormee: any;
  nbSalle: any;
  nbFormateur: any;
  saalle: any;
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private salleService: SalleService) { }

  ngOnInit() {

    this.addSalleForm = this.formBuilder.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      nbchaisse: ['', Validators.required],



    })
    this.users = JSON.parse(localStorage.getItem('admin') || '[]');
    this.academie = JSON.parse(localStorage.getItem('Academie') || '[]');
    this.salle = JSON.parse(localStorage.getItem('salle') || '[]');
    this.formateur = JSON.parse(localStorage.getItem('formateur') || '[]');


    this.nbFormee = 0;
    this.nbSalle = 0;
    this.nbFormateur = 0;
    for (let i = 0; i < this.academie.length; i++) {
      if (this.academie[i].role == 'formée') {
        this.formee = this.academie[i];
        this.nbFormee = this.nbFormee + 1;
        console.log(this.nbFormee);

      }
    }
    for (let i = 0; i < this.formateur.length; i++) {
      this.nbFormateur = this.nbFormateur + 1;

    }
    for (let i = 0; i < this.salle.length; i++) {
      this.nbSalle = this.nbSalle + 1;

    }


    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      //Edit
      this.title = "Edit";


      // this.users = JSON.parse(localStorage.getItem('salle') || '[]');
      // for (let i = 0; i < this.users.length; i++) {
      //   if(this.users[i].id == this.id){
      //     this.user = this.users[i];
      //   }

      // }
      console.log('my object is ', this.user);
    } else {

      //Add
      this.title = "Add";
    }
    if (this.id) {
      this.salleService.getSalleById(this.id).subscribe(
        (data) => {
          console.log('mon objet ', data.finded);
          this.user = data.finded;
          console.log('my data is  : ', this.user)

        }

      );
    }
  }
  addSalleFn(a: any) {
    //   if(this.id){
    //     //edit
    //     for (let i = 0; i < this.users.length; i++) {
    //       if(this.users[i].id == this.id){
    //         this.users[i].name = a.name;
    //         this.users[i].nbchaisse = a.nbchaisse;


    //      }

    //     }
    //     localStorage.setItem('salle' , JSON.stringify(this.users));
    //     alert('edition avec succées')
    //   }else{
    //   let Academie = JSON.parse(localStorage.getItem('salle') ||'[]');
    //   let id = JSON.parse(localStorage.getItem('idSalle') || '1') ; 
    //   a.id=id;
    //   a.role="salle"

    //   Academie.push(a);
    //   localStorage.setItem('idSalle',id+1);
    //   localStorage.setItem('salle',JSON.stringify(Academie));
    //   alert('salle Saved at salle tab');
    //   console.log('Details salle is : ' , this.addSalleForm.value)

    // }
    if (this.id) {
      //edit
      this.salleService.editSalle(this.user).subscribe(
        (data) => {
          console.log(data.message)
          alert('edit salle  avec success');

        }
      )

    } else {
      //add
      
      console.log(a)
      this.salleService.addSalle(a).subscribe(
        (data) => {
          console.log(data.message);
          alert('add salle avec success');

        })



    }

  }
}
