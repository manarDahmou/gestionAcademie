import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MustMatch } from '../confirm';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;

  constructor(private fb:FormBuilder,private userService:UserServiceService, private router:Router) { }

  ngOnInit() {
    this.signupForm=this.fb.group({
      fname:['',[Validators.minLength(3),Validators.required]],
      email:['',[Validators.required,Validators.email]],
      pwd:[''],
      cpwd:[''],
    },
    {
      validator: MustMatch('pwd', 'cpwd')
    }
    )
  }
  signup(){
    alert('ajout')
    console.log(this.signupForm.value)
    this.userService.signup(this.signupForm.value ).subscribe(
      (data)=>{
        console.log('added with success',data.message);
        this.router.navigate(['']);
      }
    );
  }

}
