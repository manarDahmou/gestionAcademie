import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
   formateurUrl:string='http://localhost:3000';
  // formateurUrl:string='http://localhost:8080/api';

  constructor(private httpClient:HttpClient) { }

  getAllFormateur(){
    return this.httpClient.get<{formateurs:any}>(this.formateurUrl+'/formateur');
    // ou => return this.httpClient.get(this.formateurUrl+'admins');

  }
  getFormateurById(id:any){
    return this.httpClient.get<{finded:any}>(`${this.formateurUrl+'/formateur'}/${id}`);
  }
  //<{message:string}> retour du back End
  addFormateur(formateur:any , img:File){
    let formData = new FormData();
    formData.append('img',img);
    formData.append('firstName',formateur.firstName);
    formData.append('lastName',formateur.lastName);
    formData.append('age',formateur.age);
    formData.append('email',formateur.email);
    formData.append('password',formateur.password);
    formData.append('confirmPwd',formateur.confirmPwd);
    formData.append('phone',formateur.phone);
    formData.append('adresse',formateur.adresse);
    formData.append('CIN',formateur.CIN);
    formData.append('Experience',formateur.Experience);
    formData.append('speciality',formateur.speciality);
    formData.append('cv',formateur.cv);
    formData.append('role',formateur.role);

    return this.httpClient.post<{message:string }>(this.formateurUrl+'/formateur',formData);
  }
 
  editFormateur(formateur:any){
    return this.httpClient.put<{message:string}>(`${this.formateurUrl+'/formateur'}/${formateur._id}`,formateur)
  }
  deleteFormateur(id:any){
    return this.httpClient.delete<{message:string}>(`${this.formateurUrl+'/formateur'}/${id}`)
  }
  getPdf(){
    return this.httpClient.get<{ message: string}>(`${this.formateurUrl}/formateur/generateFile/pdf`);
    }
    
}
