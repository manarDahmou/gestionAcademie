import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

   formationUrl:string='http://localhost:3000';
  //formationUrl:string='http://localhost:8080/api'

  constructor(private httpClient:HttpClient) { }

  getAllFormation(){
    return this.httpClient.get<{formations:any}>(this.formationUrl+'/formation');

  }
  getFormationById(id:any){
    return this.httpClient.get<{finded:any}>(`${this.formationUrl+'/formation'}/${id}`);
  }
  addFormation(formation:any){
    return this.httpClient.post<{message:string}>(this.formationUrl+'/formation',formation);
  }
  editFormation(formation:any){
    return this.httpClient.put<{message:string}>(`${this.formationUrl+'/formation'}/${formation._id}`,formation)
  }
  deleteFormation(id:any){
    return this.httpClient.delete<{message:string}>(`${this.formationUrl+'/formation'}/${id}`)
  }
}
