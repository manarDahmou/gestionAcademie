import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StagiereService } from 'src/app/services/stagiere.service';
import { MustMatch } from "../../confirm";


@Component({
  selector: 'app-add-stagiere',
  templateUrl: './add-stagiere.component.html',
  styleUrls: ['./add-stagiere.component.css']
})
export class AddStagiereComponent implements OnInit {
  addStagiereForm:FormGroup;
  id:any;
  title:any;
  users:any;
  user:any=[];
  academie: any;
  formee: any=[];
  salle: any=[];
  formateur: any=[];
  nbFormee:any;
  nbSalle:any;
  nbFormateur:any;
  stagiere:any;
  constructor(private formBuilder:FormBuilder , private activatedRoute : ActivatedRoute , private stagiereService:StagiereService) { }

 

  ngOnInit() {
    this.addStagiereForm=this.formBuilder.group({
      firstName:['',[Validators.minLength(3),Validators.required]],
      lastName:['',[Validators.minLength(3),Validators.required]],
      age:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(4),Validators.required]],
      confirmPwd:['',[Validators.minLength(4),Validators.required]],
      phone:['',[Validators.minLength(7),Validators.required]],
      adresse:['',Validators.required],
      CIN:['',Validators.required],
      stage:['',Validators.required],
      cv:['',Validators.required],
      image:['',Validators.required],
      

    },
    {
      validator : MustMatch('password', 'confirmPwd')
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
        this.formee = this.academie[i];
        this.nbFormee = this.nbFormee+1;
        console.log(this.nbFormee);

      }
    }
    for (let i = 0; i < this.formateur.length; i++) {
        this.nbFormateur = this.nbFormateur+1;
      
    }
    for (let i = 0; i < this.salle.length; i++) {
        this.nbSalle = this.nbSalle+1;
      
    }

  
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      //Edit
      this.title ="Edit";


      // this.users = JSON.parse(localStorage.getItem('Academie') || '[]');
      // for (let i = 0; i < this.users.length; i++) {
      //   if(this.users[i].id == this.id){
      //     this.user = this.users[i];
      //   }
        
      // }

      console.log('my object is ', this.user);
    }else{

      //Add
      this.title ="Add";
    }
    if (this.id) {
      this.stagiereService.getStagiereById(this.id).subscribe(
        (data) => {
          console.log('mon objet ', data.finded);
          this.user = data.finded;
          console.log('my data is  : ', this.user)

        }
      )
    }
  }
  addStagiereFN(a:any){
  //   if(this.id){
  //     //edit
  //     for (let i = 0; i < this.users.length; i++) {
  //       if(this.users[i].id == this.id){
  //         this.users[i].firstName = a.firstName;
  //         this.users[i].lastName = a.lastName;
  //         this.users[i].age = a.age;
  //         this.users[i].phone = a.phone;
  //         this.users[i].password = a.password;
  //         this.users[i].confirmPwd = a.confirmPwd;
  //         this.users[i].adresse = a.adresse;
  //         this.users[i].stage = a.stage;
  //         this.users[i].cv = a.cv;
  //         this.users[i].image = a.image;
        
        
  //      }
        
  //     }
  //     localStorage.setItem('Academie' , JSON.stringify(this.users));
  //     alert('edition avec succées')
  //   }else{
  //   let Academie = JSON.parse(localStorage.getItem('Academie') ||'[]');
  //   let id = JSON.parse(localStorage.getItem('idAcademie') || '1') ; 
  //   a.id=id;
  //   a.role="Stagiere"
    
  //   Academie.push(a);
  //   localStorage.setItem('idAcademie',id+1);
  //   localStorage.setItem('Academie',JSON.stringify(Academie));
  //   alert('Stagiere Saved at stagiere tab');
  //   console.log('Details stagiere is : ' , this.addStagiereForm.value)

  // }

  if(this.id){
    //edit
    this.stagiereService.editStagiere(this.user).subscribe(
      (data)=>{
        console.log(data.message);
        alert('edit stagiere  avec success') ;       

      }
    )
    
    }
    else{
      //add
      a.role="stagiere"

      console.log(a)
      this.stagiereService.addStagiere(a).subscribe(
        (data)=>{
          console.log(data.message);
          alert('add stagiere  avec success') ;       

        }
      )
      
    
    }
}
}
