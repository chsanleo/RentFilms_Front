import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  signIn():Observable<any>{
    return this.httpClient.get(this.apiUrl + 'main/trending')
  }

  logIn():Observable<any>{
    return ;
  }
  logOut():Observable<any>{
    return;
  }
  getUser():Observable<any>{
    return;
  }
  updateUserInfo():Observable<any>{
    return;
  }
  deleteUser():Observable<any>{
    return;
  }

}
