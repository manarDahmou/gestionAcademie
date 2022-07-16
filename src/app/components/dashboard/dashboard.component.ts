import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateurService } from 'src/app/services/formateur.service';
import { FormationService } from 'src/app/services/formation.service';
import { FormeeService } from 'src/app/services/formee.service';
import { SalleService } from 'src/app/services/salle.service';
import { StagiereService } from 'src/app/services/stagiere.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any;
  formations: any;
  salles: any;
  admins: any;
  allUsers: any = [];
  admin: any = [];
  formee: any = [];
  formateur: any = [];
  formation: any = [];
  Stagiere: any = [];
  salle: any = [];
  academie: any;
  formeee: any = [];
  sallee: any = [];
  deleteForme: any = [];
  deleteForma: any = [];
  formaateur: any = [];
  deleteStagere: any = [];
  nbFormee: any;
  nbSalle: any;
  nbFormateur: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private formateurService: FormateurService, private formeeService: FormeeService, private formationService: FormationService, private salleService: SalleService, private stagiereService: StagiereService) { }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('admin') || '[]');
    this.academie = JSON.parse(localStorage.getItem('Academie') || '[]');
    this.sallee = JSON.parse(localStorage.getItem('salle') || '[]');
    this.formaateur = JSON.parse(localStorage.getItem('formateur') || '[]');


    this.nbFormee = 0;
    this.nbSalle = 0;
    this.nbFormateur = 0;
    for (let i = 0; i < this.academie.length; i++) {
      if (this.academie[i].role == 'formée') {
        this.formeee = this.academie[i];
        this.nbFormee = this.nbFormee + 1;
      }
    }
    for (let i = 0; i < this.formaateur.length; i++) {
      this.nbFormateur = this.nbFormateur + 1;

    }
    for (let i = 0; i < this.sallee.length; i++) {
      this.nbSalle = this.nbSalle + 1;

    }


    this.admins = JSON.parse(localStorage.getItem('admin') || '[]');
    for (let i = 0; i < this.admins.length; i++) {

      if (this.admins[i].role == "supperAdmin") {
        this.admin.push(this.admins[i]);
      }
    }
    this.users = JSON.parse(localStorage.getItem('Academie') || '[]');
    this.formations = JSON.parse(localStorage.getItem('formation') || '[]');
    this.salles = JSON.parse(localStorage.getItem('salle') || '[]');
    // for (let i = 0; i < this.formaateur.length; i++) {
    //   this.formateur.push(this.formaateur[i]);

    // }
    // for (let i = 0; i < this.users.length; i++) {

    //   if (this.users[i].role == "formée") {
    //     this.formee.push(this.users[i]);
    //   }
    //   else if (this.users[i].role == "Stagiere") {
    //     this.Stagiere.push(this.users[i]);
    //   }
    //   else if (this.users[i].role == "salle") {
    //     this.salle.push(this.users[i]);
    //   }
    // }
    // for (let i = 0; i < this.formations.length; i++) {
    //   this.formation.push(this.formations[i]);

    // }
    // for (let i = 0; i < this.salles.length; i++) {
    //   this.salle.push(this.salles[i]);

    // }
    ////////////        apelle de All formateur   ///////
    // this.formateurService.getAllFormateur().subscribe(
    //   (data) => {
    //     console.log('formateur added ', data.formateurs);
    //     this.formateur = data.formateurs;

    //   }
    // );
    // this.formeeService.getAllformee().subscribe(
    //   (data) => {
    //     console.log('formee added ', data.formees);
    //     this.formee = data.formees;

    //   }
    // );
    this.formationService.getAllFormation().subscribe(
      (data) => {
        console.log('formation added ', data.formations);
        this.formation = data.formations;

      }
    );
    // this.stagiereService.getAllStagiere().subscribe(
    //   (data) => {
    //     console.log('stagiere added ', data.stagieres);
    //     this.Stagiere = data.stagieres;

    //   }
    // );
    this.salleService.getAllSalle().subscribe(
      (data) => {
        console.log('salle added ', data.salles);

        this.salle = data.salles;

      }
    );
    this.formateurService.getAllFormateur().subscribe(
      (data) => {


        this.allUsers = data.formateurs;
       
        for (let i = 0; i < this.allUsers.length; i++) {
          console.log('hereeee',this.allUsers[i])
          if (this.allUsers[i].role == 'formee') {
            this.formee.push(this.allUsers[i]);
          } else if (this.allUsers[i].role == 'formateur') {
            this.formateur.push(this.allUsers[i]);
            console.log('formateur added ',this.formateur);
          } else if (this.allUsers[i].role == 'stagiere') {
            this.Stagiere.push(this.allUsers[i]);
          }
        }
      }
    );

console.log('image',this.formateur.img)
  }
  displayFormee(id: any) {
    this.router.navigate([`displayFormee/${id}`]);

  }
  displayFormateur(id: any) {
    this.router.navigate([`displayFormateur/${id}`]);

  }
  displayFormation(id: any) {
    this.router.navigate([`displayFormation/${id}`]);

  }
  displayStagiere(id: any) {
    this.router.navigate([`displayStagiere/${id}`]);

  }
  displaySalle(id: any) {
    this.router.navigate([`displaySalle/${id}`]);
  }

  editFormee(id: any) {
    this.router.navigate([`editFormee/${id}`]);

  }
  editFormateur(id: any) {
    this.router.navigate([`editFormateur/${id}`]);

  }
  editFormation(id: any) {
    this.router.navigate([`editFormation/${id}`]);

  }
  editStagiere(id: any) {
    this.router.navigate([`editStagiere/${id}`]);

  }
  editSalle(id: any) {
    this.router.navigate([`editSalle/${id}`]);

  }
  deleteFormateur(id: any) {

    console.log(id)

    this.formateurService.deleteFormateur(id).subscribe(

      (data) => {
        console.log('delete formateur ', data.message);
        this.formeeService.getAllformee().subscribe(
          (data) => {
            console.log('formee added ', data.formees);

            this.allUsers = data.formees;

          });

      }
    )
  }
  deleteFormation(id: any) {

    console.log(id)

    this.formationService.deleteFormation(id).subscribe(

      (data) => {
        console.log('delete formation ', data.message);
        this.formationService.getAllFormation().subscribe(
          (data) => {
            console.log('formation added ', data.formations);
            this.formation = data.formations;

          }
        );

      }
    )
  }
  deleteStagiere(id: any) {

    console.log(id)

    this.formeeService.getAllformee().subscribe(
      (data) => {
        console.log('formee added ', data.formees);

        this.allUsers = data.formees;
        this.stagiereService.deleteStagiere(id).subscribe(

          (data) => {
            console.log('delete stagiere ', data.message);
            this.formeeService.getAllformee().subscribe(
              (data) => {
                console.log('stagiere added ', data.formees);
    
                this.allUsers = data.formees;
                for (let i = 0; i < this.allUsers.length; i++) {
                  if (this.allUsers[i].role == 'stagiere') {
                    this.deleteStagere.push(this.allUsers[i]);
                    this.Stagiere = this.deleteStagere
                  }
                }
              }
            );
    
          }
        )
      }
    );
    
  }
  deleteSalle(id: any) {

    console.log(id)

    this.salleService.deleteSalle(id).subscribe(

      (data) => {
        console.log('delete salle ', data.message);
        this.salleService.getAllSalle().subscribe(
          (data) => {
            console.log('salle added ', data.salles);
            this.salle = data.salles;

          }
        );

      }
    )
  }
  deleteFormee(id: any) {
    // let pos;
    // for (let i = 0; i < this.users.length; i++) {
    //   if(this.users[i].id == id ){
    //       pos = i;
    //   } 
    // }
    // this.users.splice(pos , 1);
    // localStorage.setItem('Academie' ,  JSON.stringify(this.users));


    console.log(id)





    this.formeeService.deleteFormee(id).subscribe(

      (data) => {
        console.log('delete formee ', data.message);
        //actualiser
        this.formeeService.getAllformee().subscribe(
          (data) => {
            console.log('formee added ', data.formees);

            this.allUsers = data.formees;
            for (let i = 0; i < this.allUsers.length; i++) {
              if (this.allUsers[i].role == 'formee') {
                this.deleteForme.push(this.allUsers[i]);
                this.formee = this.deleteForme
              }
            }
          }
        );
      }
    )
  }

}
