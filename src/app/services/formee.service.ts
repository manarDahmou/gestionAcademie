import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormeeService {

  formeeUrl:string='http://localhost:3000';
  //formeeUrl:string='http://localhost:8080/api';

  constructor(private httpClient:HttpClient) { }
//http://localhost:3000/formee
  getAllformee(){
    return this.httpClient.get<{formees:any}>(this.formeeUrl+'/formee');

  }
  getFormeeById(id:any){
    return this.httpClient.get<{finded:any}>(`${this.formeeUrl+'/formee'}/${id}`);
  }
  addFormee(formee:any){
    return this.httpClient.post<{message:string}>(this.formeeUrl+'/formee',formee);
  }
  editFormee(formeee:any){
    return this.httpClient.put<{message:string}>(`${this.formeeUrl+'/formee'}/${formeee._id}`,formeee)
  }
  deleteFormee(id:any){
    return this.httpClient.delete<{message:string}>(`${this.formeeUrl+'/formee'}/${id}`)
  }
}
