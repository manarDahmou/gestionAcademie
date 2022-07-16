import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // users: any;
  // academie: any;
  // formee: any=[];
  // salle: any=[];
  // formateur: any=[];
  // superAdmin:any;
  // nbFormee:any;
  // nbSalle:any;
  // nbFormateur:any;
  // myDate:Date;

  id:any;
  user:any={};
    constructor(private userService: UserServiceService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id).subscribe(
      (data) => {
        console.log('data',data.finded);
        
        this.user = data.finded;
      }
    )
   
  }
  //   this.users = JSON.parse(localStorage.getItem('admin') );
  //   this.academie = JSON.parse(localStorage.getItem('Academie') || '[]');
  //   this.salle = JSON.parse(localStorage.getItem('salle') || '[]');
  //   this.formateur = JSON.parse(localStorage.getItem('formateur') || '[]');
  //   console.log(this.users)
  //   for (let i = 0; i < this.users.length; i++) {
  //     if (this.users[i].id == '1') {
  //       this.superAdmin = this.users[i];
  //     }
  //   }
  //   this.nbFormee=0;
  //   this.nbSalle=0;
  //   this.nbFormateur=0;
  //   for (let i = 0; i < this.academie.length; i++) {
  //     if (this.academie[i].role == 'formée') {
  //       this.formee = this.academie[i];
  //       this.nbFormee = this.nbFormee+1;
  //     }
  //   }
  //   for (let i = 0; i < this.formateur.length; i++) {
  //       this.nbFormateur = this.nbFormateur+1;
      
  //   }
  //   for (let i = 0; i < this.salle.length; i++) {
  //       this.nbSalle = this.nbSalle+1;
      
  //   }

  // }
  // reload() {
  //   location.reload();
  // }

}
