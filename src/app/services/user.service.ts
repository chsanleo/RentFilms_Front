import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../models/iuser.model';
import { IUserLogin } from '../models/iuserLogin.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/';
  private user: IUser;
  private token: string;

  constructor(private httpClient: HttpClient) { }

  //GETTERS
  getUser() {
    return this.user;
  }
  getToken() {
    return this.token;
  }

  //SETTERS


  //METHODS
  signIn(name: string, email: string, password: string, address: string) {

    let body = {
      name: name,
      email: email,
      password: password,
      address: address
    };

    return this.httpClient.post(this.apiUrl + 'main/signin', body)
      .subscribe({
        next: data => console.log("todo OK"),
        error: error => console.log(error)
      });
  }

  logIn(email: string, pwd: string) {
    //recoger el token //REVISAR
    let body = {
      email: email,
      password: pwd
    };

    this.httpClient.post<IUserLogin>(this.apiUrl + 'main/login', body)
      .subscribe({
        next: data => {
          this.token = data.token,//NO HACE INSERT en token
            this.user = data.user
        },
        error: error => console.log(error)
      });

    console.log(this.getToken());//undefined
    localStorage.setItem('token', this.getToken());
  }

  logOut(): Observable<any> {
    let headers = new HttpHeaders().set('authorization', localStorage.getItem('token'));
    return this.httpClient.get(this.apiUrl + 'main/logout', { headers });
  }
  /*
    getCurrentUser(): Observable<User> {
      let headers = new HttpHeaders().set('authorization', localStorage.getItem('token'));
      return this.httpClient.get(this.apiUrl + 'users/user', { headers }).pipe(map(res=><User>res));
    }*/

  getUserById(idUser: number): Observable<IUser> {
    //let headers = new HttpHeaders().set('authorization', localStorage.getItem('token'));
    return this.httpClient.get<IUser>(this.apiUrl + 'users/user/' + idUser/*, { headers }*/);
  }

  updateUserInfo(): Observable<any> {
    return;
  }

  deleteUser(): Observable<any> {
    return;
  }

}
