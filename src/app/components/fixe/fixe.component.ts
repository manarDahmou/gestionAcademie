import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-fixe',
  templateUrl: './fixe.component.html',
  styleUrls: ['./fixe.component.css']
})
export class FixeComponent implements OnInit {

  admin:any;
 // afficher:any=false;
  id:any;
  afficher:any;
  user:any;
  constructor(private router : Router,private userService: UserServiceService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.userService.getUserById(this.id).subscribe(
    //   (data) => {
    //     console.log('data',data.finded);

    //   }
    // )
    if (this.id) {
      // this.afficher = true 
      
    }
   // this.admin = JSON.parse(localStorage.getItem('admin') );
    
  
  }
  isHomeRoute() {
    return this.router.url != '/login' && this.router.url != '/signup';
  } 

  logout(){
    
    // localStorage.removeItem('admin');
    // localStorage.removeItem('id');
    this.router.navigate(['login'])

  }

}
