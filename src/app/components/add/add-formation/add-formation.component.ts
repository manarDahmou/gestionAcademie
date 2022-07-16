import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
  addFormationForm: FormGroup;
  id: any;
  title: any;
  users: any;
  user: any = [];
  nameFormateur: any;
  formateurs: any;
  academie: any;
  formation: any;
  formee: any = [];
  salle: any = [];
  formateur: any = [];
  nbFormee: any;
  nbSalle: any;
  nbFormateur: any;
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private formationService: FormationService) {

  }

  ngOnInit() {
    this.addFormationForm = this.formBuilder.group({

      nameFormation: ['', [Validators.minLength(3), Validators.required]],
      nameFormateur: ['', [Validators.minLength(3), Validators.required]],
      dateDebutFormation: ['', Validators.required],
      dateEndFormation: ['', Validators.required],
      programme: [''],
      nbHeur: ['', Validators.required],
      price: ['', Validators.required],
      nbFormee: ['', Validators.required],




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
      }
    }
    for (let i = 0; i < this.formateur.length; i++) {
      this.nbFormateur = this.nbFormateur + 1;
      console.log(this.nbFormateur);


    }
    for (let i = 0; i < this.salle.length; i++) {
      this.nbSalle = this.nbSalle + 1;

    }


    this.formateurs = JSON.parse(localStorage.getItem('formateur') || '[]');

    this.nameFormateur = JSON.parse(localStorage.getItem('nameFormateur') || '[]');







    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      //Edit
      this.title = "Edit";
      //////////////  debut localstorage  //////////////////////////////////////////////

      // this.users = JSON.parse(localStorage.getItem('formation') || '[]');
      // for (let i = 0; i < this.users.length; i++) {
      //   if(this.users[i].id == this.id){
      //     this.user = this.users[i];
      //   }

      // }
      //////////////  end localstorage  //////////////////////////////////////////////

      console.log('my object is ', this.user);
    } else {

      //Add
      this.title = "Add";
    }
    ////////////////////////     service      //////////////////////////////////////////////////
    if (this.id) {
      //edit
      this.formationService.getFormationById(this.id).subscribe(
        (data)=>{
          console.log('mon objet ' , data.finded);
          this.user = data.finded ;
          console.log('my data is  : ' , this.user);

        }
      )
    }


  }
  addFormation(a: any) {
    //////////////  debut localstorage  //////////////////////////////////////////////

    //if(this.id){
    //edit
    //     for (let i = 0; i < this.users.length; i++) {
    //       if(this.users[i].id == this.id){
    //         this.users[i].nameFormation = a.nameFormation;
    //         this.users[i].nameFormateur = a.nameFormateur;
    //         this.users[i].dateDebutFormation = a.dateDebutFormation;
    //         this.users[i].programme = a.programme;
    //         this.users[i].nbHeur = a.nbHeur;
    //         this.users[i].price = a.price;
    //         this.users[i].nbFormee = a.nbFormee;

    //      }

    //     }
    //     localStorage.setItem('formation' , JSON.stringify(this.users));
    //     alert('edition avec succées')
    //   }else{
    //   let formation = JSON.parse(localStorage.getItem('formation') ||'[]');
    //   let id = JSON.parse(localStorage.getItem('idFormation') || '1') ; 
    //   a.id=id;
    //   a.role="Formation"

    //   formation.push(a);
    //   localStorage.setItem('idFormation',id+1);
    //   localStorage.setItem('formation',JSON.stringify(formation));
    //   alert('formation Saved at formation tab');
    //   console.log('Details Formation is : ' , this.addFormationForm.value)

    // }
    //////////////  end localstorage  //////////////////////////////////////////////
    /////////////////////************   service  *********/////////////////////////////////////////


    if(this.id){
      //edit
      this.formationService.editFormation(this.user).subscribe(
        (data)=>{
          console.log(data.message)
          alert('add formation avec success') ;       ;

        }
      )
      
      }else{
        //add
        
        console.log(a)
        this.formationService.addFormation(a).subscribe(
          (data)=>{
            console.log(data.message);
            alert('add formation avec success')        ;

          })

        
      
      }


  }
}
