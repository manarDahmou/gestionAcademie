import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormeeService } from 'src/app/services/formee.service';
import { MustMatch } from "../../confirm";


@Component({
  selector: 'app-add-formee',
  templateUrl: './add-formee.component.html',
  styleUrls: ['./add-formee.component.css']
})
export class AddFormeeComponent implements OnInit {
  addFormeeForm: FormGroup;
  id: any;
  title: any;
  formations: any;
  users: any;
  user: any = [];
  nameFormation: any ;
  academie: any;
  a: any;
  formeee: any;
  salle: any=[];
  formateur: any=[];
  nbFormee:any;
  nbSalle:any;
  nbFormateur:any;
  constructor(private formBuilder: FormBuilder,
     private activatedRoute: ActivatedRoute, 
    private formeeService:FormeeService) { }

  ngOnInit() {
    this.addFormeeForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.minLength(3), Validators.required]],
      age: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(4), Validators.required]],
      confirmPwd: ['', [Validators.minLength(4), Validators.required]],
      phone: ['', [Validators.minLength(7), Validators.required]],
      adresse: ['', Validators.required],
      CIN: ['', Validators.required],
      level: ['', Validators.required],
      dateDebutFormation: ['', Validators.required],
      dateFinFormation: ['', Validators.required],
      price: ['', Validators.required],
      modePayment: ['', Validators.required],
      Formation: ['', Validators.required],

    },
      {
        validator: MustMatch('password', 'confirmPwd')
      })
      this.users = JSON.parse(localStorage.getItem('admin') || '[]');
      this.academie = JSON.parse(localStorage.getItem('Academie') || '[]');
      this.salle = JSON.parse(localStorage.getItem('salle') || '[]');
      this.formateur = JSON.parse(localStorage.getItem('formateur') || '[]');
  
   
      this.nbFormee=0;
      this.nbSalle=0;
      this.nbFormateur=0;
      for (let i = 0; i < this.academie.length; i++) {
        if (this.academie[i].role == 'formée') {
          this.a = this.academie[i];
          this.nbFormee = this.nbFormee+1;
          console.log(this.nbFormee)
        }
      }
      for (let i = 0; i < this.formateur.length; i++) {
          this.nbFormateur = this.nbFormateur+1;
        
      }
      for (let i = 0; i < this.salle.length; i++) {
          this.nbSalle = this.nbSalle+1;
        
      }
  
    
      this.formations = JSON.parse(localStorage.getItem('formation') || '[]');
       this.nameFormation = JSON.parse(localStorage.getItem('nameformation') || '[]');
      let idName = JSON.parse(localStorage.getItem('idName') || '1');
      console.log(this.formations)
      for (let i = 0; i < this.formations.length; i++) {
      
         this.nameFormation.push(this.formations[i].nameFormation)
        //  console.log(nameFormation)
      }
        for (let i = 0;  i< this.nameFormation.length; i++) {
          for (let j = 1; j < this.nameFormation.length; j++) {
            if(this.nameFormation[i]==this.nameFormation[i+1]){
            
              // console.log(nameFormation[j])

              this.nameFormation.splice(i+1 , 1);
            }

            localStorage.setItem('nameFormation', JSON.stringify(this.nameFormation));
          }
         
          

        
        
      }

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      //Edit
      this.title = "Edit";


      // this.users = JSON.parse(localStorage.getItem('Academie') || '[]');
      // for (let i = 0; i < this.users.length; i++) {
      //   if (this.users[i].id == this.id) {
      //     this.user = this.users[i];
      //   }

      // }
      console.log('my object is ', this.user);
    } else {

      //Add
      this.title = "Add";
    }
    if (this.id) {
      this.formeeService.getFormeeById(this.id).subscribe(
        (data) => {
          console.log('mon objet ', data.finded);
          this.user = data.finded;
           console.log('my data is  : ', this.user)

        }

      );
    }

  }

  addFormeeFn(a: any) {
    // if (this.id) {
    //   //edit
    //   for (let i = 0; i < this.users.length; i++) {
    //     if (this.users[i].id == this.id) {
    //       this.users[i].firstName = a.firstName;
    //       this.users[i].lastName = a.lastName;
    //       this.users[i].age = a.age;
    //       this.users[i].phone = a.phone;
    //       this.users[i].password = a.password;
    //       this.users[i].confirmPwd = a.confirmPwd;
    //       this.users[i].adresse = a.adresse;
    //       this.users[i].level = a.level;
    //       this.users[i].dateDebutFormation = a.dateDebutFormation;
    //       this.users[i].dateFinFormation = a.dateFinFormation;
    //       this.users[i].price = a.price;
    //       this.users[i].modePayment = a.modePayment;
    //       this.users[i].Formation = a.Formation;

    //     }

    //   }
    //   localStorage.setItem('Academie', JSON.stringify(this.users));
    //   alert('edition avec succées ')
    // } 
    // else {
    //   let Academie = JSON.parse(localStorage.getItem('Academie') || '[]');
     
    //   let id = JSON.parse(localStorage.getItem('idAcademie') || '1');
    //   a.id = id;
    //   a.role = "formée";

    //   Academie.push(a);
    //   localStorage.setItem('idAcademie', id + 1);
    //   localStorage.setItem('Academie', JSON.stringify(Academie));
    //   alert('Formée Saved at Formée tab');
    //   console.log('Details Formee is : ', this.addFormeeForm.value)

    // }

    if(this.id){
      console.log(this.id)
      //edit
      this.formeeService.editFormee(this.user).subscribe(
        (data)=>{
          console.log(data.message)
          alert('edit formee  avec success') ;       

         

        });
      
      }else{
        //add

        a.role="formee"

        console.log(a)
        this.formeeService.addFormee(a).subscribe(
          (data)=>{
            console.log(data.message);
            alert('add formee avec success');

          })

        
      
      }



  }

}
