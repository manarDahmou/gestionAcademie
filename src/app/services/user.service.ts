import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  superAdminUrl:string='http://localhost:3000';
  // stagiereUrl:string='http://localhost:8080/api';
 
   constructor(private httpClient:HttpClient) { }

 
   addSuperAdmin(user:any){
     return this.httpClient.post<{message:string}>(this.superAdminUrl+'/superAdmin',user);
   }
   getSuperAdmin(){
    return this.httpClient.get<{ message:string}>(this.superAdminUrl+'/superAdmin');
  }
  login(user:any) {
    return this.httpClient.post<{user:any, message:string}>(`${this.superAdminUrl}/login`, user);
  }
}
