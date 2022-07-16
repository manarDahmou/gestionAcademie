import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  signupForm:FormGroup;
  // user:any={};
  constructor(private fb:FormBuilder) { 
    this.signupForm=this.fb.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      password:[''],
      phone:[''],
      roleAdmin:[''],
    })
  }

  ngOnInit() {
  }
  signup(a : any){
    let users = JSON.parse(localStorage.getItem('users') ||'[]');
    let id = JSON.parse(localStorage.getItem('id') || '1') ; 
 
    users.push(a);
    localStorage.setItem('id',id+1);
    localStorage.setItem('users',JSON.stringify(users));
    alert('btn clicked');

  }

}
