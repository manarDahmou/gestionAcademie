import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { FormateurService } from 'src/app/services/formateur.service';
import { MustMatch } from "../../confirm";


@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {
  addFormateurForm: FormGroup;
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
  imagePreview: any;
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private formateurService: FormateurService) { }

  ngOnInit() {
    this.addFormateurForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.minLength(3), Validators.required]],
      age: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(4), Validators.required]],
      confirmPwd: ['', [Validators.minLength(4), Validators.required]],
      phone: ['', [Validators.minLength(7), Validators.required]],
      adresse: ['', Validators.required],
      CIN: ['', Validators.required],
      Experience: ['', Validators.required],
      speciality: ['', Validators.required],
      cv: ['', Validators.required],
      img: [''],


    },
      {
        validator: MustMatch('password', 'confirmPwd')
      }
    )

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

      /****ce partie de local storage edit */
      // this.users = JSON.parse(localStorage.getItem('formateur') || '[]');
      // for (let i = 0; i < this.users.length; i++) {
      //   if(this.users[i].id == this.id){
      //     this.user = this.users[i];
      //   }

      // }
      /****end of  partie de local storage edit */

      console.log('my object is ', this.user);
    } else {

      //Add
      this.title = "Add";
    }

    /*************************          on fait appelle a chaque service          ****** */

    if (this.id) {
      this.formateurService.getFormateurById(this.id).subscribe(
        (data) => {
          console.log('mon objet ', data.finded);
          this.user = data.finded;
          console.log('my data is  : ', this.user)

        }

      );
    }
    // this.formateurService.addFormateur(this.formateur, this.addFormateurForm.value.img).subscribe(
    //   (data) => {
    //     console.log('message:', data.message);
    //   }
    // );
  }
  addFormateur(a: any) {
    //  if (this.id) {
    //edit
    /********************    debut de partie localstorge ********************************** */
    // for (let i = 0; i < this.users.length; i++) {
    //   if(this.users[i].id == this.id){
    //     this.users[i].firstName = a.firstName;
    //     this.users[i].lastName = a.lastName;
    //     this.users[i].age = a.age;
    //     this.users[i].email = a.email;
    //     this.users[i].phone = a.phone;
    //     this.users[i].password = a.password;
    //     this.users[i].confirmPwd = a.confirmPwd;
    //     this.users[i].adresse = a.adresse;
    //     this.users[i].Experience = a.Experience;
    //     this.users[i].speciality = a.speciality;
    //     this.users[i].cv = a.cv;
    //     this.users[i].image = a.image;
    //  }

    // }
    // localStorage.setItem('formateur' , JSON.stringify(this.users));
    // alert('edition avec succées')
    /********************    end de partie localstorge ********************************** */

    // } else {
    /********************    debut de partie localstorge ********************************** */

    //   let formateur = JSON.parse(localStorage.getItem('formateur') || '[]');
    //   let id = JSON.parse(localStorage.getItem('idFormateur') || '1');
    //   a.id = id;
    //   a.role = "formateur"

    //   formateur.push(a);
    //   localStorage.setItem('idFormateur', id + 1);
    //   localStorage.setItem('formateur', JSON.stringify(formateur));
    //   alert('Formateur Saved at formateur tab');
    //   console.log('Details Formee is : ', this.addFormateurForm.value)

    // }
    /********************    fin de partie localstorge ********************************** */



    ////////////////////  integration du service      /////////////////////////////////////////
    if (this.id) {
      //edit
      this.formateurService.editFormateur(this.user).subscribe(
        (data) => {
          console.log(data.message)
          alert('edit formateur avec success');;

        }
      )

    } else {
      //add
      
      a.role = "formateur";
      console.log(a)
      this.formateurService.addFormateur(a, this.addFormateurForm.value.img).subscribe(
        (data) => {
          console.log(data.message);
          alert('add formateur avec success');

        })



    }
  }
  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files[0];
    // Ajout d'un attribut img dans l'objet Chef
    this.addFormateurForm.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.addFormateurForm.updateValueAndValidity();
    // Creation d'une variable reader pour lire le contenu de fichiers
    const reader = new FileReader();
    //Déclenchement du event load lors d'une lecture de fichier avec succès
    reader.onload = () => {
      //affecter le résultat de la lecture dans la variable imagePreview
      this.imagePreview = reader.result as string
    };
    // lecture du contenu du fichier Blob ou File
    reader.readAsDataURL(file);
  }
  getPdf(){
    this.formateurService.getPdf().subscribe(
    (data)=>{
    console.log(data.message);
    }
    )
    }
       
  }
