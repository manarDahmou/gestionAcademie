import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginn: any = {};
  users: any;
  id: any;
  error: any;
  msgError: any;


  profile: any = {};

  constructor(private formBuilder: FormBuilder,private userService:UserServiceService, private router: Router) { }

  ngOnInit() {


    this.loginForm = this.formBuilder.group({
      email: [''],
      pwd: ['']
    });

    // this.userService.getSuperAdmin().subscribe(
    //   (data)=>{
    //     console.log('here ', data.message);
    //   }
    // )
    // this.users = JSON.parse(localStorage.getItem('admin') || '[]');

    // this.id = JSON.parse(localStorage.getItem('id') || '1');
    // if (this.id == '1') {
    //   this.superadmin = {
    //     id: this.id,
    //     email: 'supperAdmin@gmail.com',
    //     password: '123456789',
    //     role: 'supperAdmin',
    //     FirstName: 'Abderahmen',
    //     LastName: 'Massmoudi',
    //     Job: 'engineer Developpement web',
    //   }
    //   this.users.push(this.superadmin);

    //   localStorage.setItem('id', this.id + 1);
    //   localStorage.setItem('admin', JSON.stringify(this.users));
    //   console.log(this.users)
    // }

    
  }

  login() {
  //   for (let i = 0; i < this.users.length; i++) {
  //     if ((this.users[0].email == this.loginn.email) && (this.users[0].password == this.loginn.password)) {
  //       this.router.navigate([`acceuil`]);
  
  //     } else {
  //       this.router.navigate([``])
  //     }
    
  
  // } 
  this.userService.login(this.loginn).subscribe(
    (data) => {
      if (data.message != '2') {
        this.msgError = 'Please Check email & Password';
        console.log(data.message)

      } else {
         this.profile= data.userToSend ;
        this.id=this.profile.id
      // console.log(this.id);
      
              this.router.navigate([`acceuil/${data.userToSend.id}`]);

       // this.router.navigate([`acceuil`]);
      }

    }
  );
  console.log('my object is', this.loginn);
    // this.userService.addSuperAdmin(this.loginn).subscribe(
    //   (data)=>{
    //     console.log('data', data.message);
        
    //     // if(data.message == '2'){
    //     //   this.router.navigate([''])
    //     // }else{
    //     //   this.error='invalid password or email'
    //     // }
    //   });
      // this.userService.login(this.loginn).subscribe(
      //   (data)=>{
      //     console.log(data)
      //   }
      // )
     

  

  }


}
