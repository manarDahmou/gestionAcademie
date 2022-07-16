import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  salleUrl:string='http://localhost:3000';
  //salleUrl:string='http://localhost:8080/api';


  constructor(private httpClient:HttpClient) { }


  getAllSalle(){
    return this.httpClient.get<{salles:any}>(this.salleUrl+'/salles');

  }
  getSalleById(id:any){
    return this.httpClient.get<{finded:any}>(`${this.salleUrl+'/salles'}/${id}`);
  }
  addSalle(saalle:any){
    return this.httpClient.post<{message:string}>(this.salleUrl+'/salles',saalle);
  }
  editSalle(saalle:any){
    return this.httpClient.put<{message:string}>(`${this.salleUrl+'/salles'}/${saalle._id}`,saalle)
  }
  deleteSalle(id:any){
    return this.httpClient.delete<{message:string}>(`${this.salleUrl+'/salles'}/${id}`)
  }
}
