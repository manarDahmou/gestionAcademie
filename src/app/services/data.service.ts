import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }

  createDb(){

    // let  formateur =  [
    //  {  id:  1,  firstName:  'manar', lastName: 'dahmou', age: 21, email: 'manardahmou@gmail.com', password: '123456789',confirmPwd:'123456789',phone:'21547896',adresse:'tunis',CIN:'11222333',Experience:'2',speciality:'front end' },
    //  {  id:  2,  firstName:  'malek', lastName: 'malek', age: 21, email: 'malek@gmail.com', password: '123456789',confirmPwd:'123456789',phone:'21547896',adresse:'tunis',CIN:'11222333',Experience:'2',speciality:'front end' },
    //  {  id:  3,  firstName:  'manel', lastName: 'manel', age: 21, email: 'manel@gmail.com', password: '123456789',confirmPwd:'123456789',phone:'21547896',adresse:'tunis',CIN:'11222333',Experience:'2',speciality:'front end' },
    
    // ];
    // let  formation =  [
    //   {  id:  1,  nameFormation:  'springboot', nameFormateur: 'aaida', dateDebutFormation:' 21/01/2020', dateEndFormation: '21/02/2020', programme: '',nbHeur:'45',price:'25',nbFormee:'15' },
    //   {  id:  2,  nameFormation:  'angular', nameFormateur: 'aaida', dateDebutFormation:' 21/01/2020', dateEndFormation: '21/02/2020', programme: '',nbHeur:'45',price:'25',nbFormee:'15' },
    //   {  id:  3,  nameFormation:  'javascript', nameFormateur: 'aaida', dateDebutFormation:' 21/01/2020', dateEndFormation: '21/02/2020', programme: '',nbHeur:'45',price:'25',nbFormee:'15' },
     
    //  ];

    // let  formeee =  [
    //   {  id:  1,  firstName:  'manel', lastName: 'manel', age: 21, email: 'manel@gmail.com', password: '123456789',confirmPwd:'123456789',phone:'21547896',adresse:'tunis',CIN:'11222333',level:'facultée',dateDebutFormation:'21/02/2021',dateFinFormation:'21/02/2021',price:550,modePayment:'cash',Formation:'javascript' },
     
    //  ];
    //  let  saalle =  [
    //   {  id:  1,  name:  'aaida', nbchaisse: 25 },
    //   {  id:  2,  name:  'abderahmen', nbchaisse: 12 }
     
    //  ];
    let  stagiere =  [ {  id:  1,  firstName:  'manel', lastName: 'manel', age: 21, email: 'manel@gmail.com', password: '123456789',confirmPwd:'123456789',phone:'21547896',adresse:'tunis',CIN:'11222333',stage:'perfectionnement',cv:'',image:''}
  ];
    //return {formateur};
   // return{formation}
   // return{formeee}
   // return{saalle}
    return{stagiere}

  }
}
