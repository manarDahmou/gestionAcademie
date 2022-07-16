import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StagiereService {
  stagiereUrl:string='http://localhost:3000';
 // stagiereUrl:string='http://localhost:8080/api';

  constructor(private httpClient:HttpClient) { }

  getAllStagiere(){
    return this.httpClient.get<{stagieres:any}>(this.stagiereUrl+'/stagiere');
    // ou => return this.httpClient.get(this.stagiereUrl+'admins');

  }
  getStagiereById(id:any){
    return this.httpClient.get<{finded:any}>(`${this.stagiereUrl+'/stagiere'}/${id}`);
  }
  addStagiere(stagiere:any){
    return this.httpClient.post<{message:string}>(this.stagiereUrl+'/stagiere',stagiere);
  }
  editStagiere(stagiere:any){
    return this.httpClient.put<{message:string}>(`${this.stagiereUrl+'/stagiere'}/${stagiere._id}`,stagiere)
  }
  deleteStagiere(id:any){
    return this.httpClient.delete<{message:string}>(`${this.stagiereUrl+'/stagiere'}/${id}`)
  }
}
