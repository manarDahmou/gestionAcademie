import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userUrl: string = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { }
  login(user: any) {
    return this.httpClient.post<{message:string,userToSend:any}>(`${this.userUrl}/login`, user);
  }
  signup(user: any) {
   
    return this.httpClient.post<{message:any}>(`${this.userUrl}/signup`,user);
  }
  getUserById(id:number){
    return this.httpClient.get<{finded:any}>(`${this.userUrl}/profile/${id}`);
  }
}
