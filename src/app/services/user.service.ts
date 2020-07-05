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
  getUserVar() : IUser{
    let lsUser = localStorage.getItem('user')
    
    if(lsUser){return JSON.parse(lsUser);}//
    return this.user;
  }
  getTokenVar() {
    let lsToken = localStorage.getItem('token');

    if (lsToken) { return lsToken; }
    return this.token;
  }

  //SETTERS
  setTokenVar(token: string) {
    this.token = token;
    localStorage.setItem('token', this.token);
  }

  setUserVar(user:IUser){
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  //METHODS
  signIn(user:IUser) {

    return this.httpClient.post(this.apiUrl + 'main/signin', user)
      .subscribe({
        next: data => console.log("todo OK"),
        error: error => console.log(error)
      });
  }

  logIn(user:IUser): Observable<IUserLogin> {

    let body = {
      email: user.email,
      password: user.password
    };
    return this.httpClient.post<IUserLogin>(this.apiUrl + 'main/login', body);
  }

  logOut(): Observable<any> {
    let headers = new HttpHeaders().set('authorization', this.getTokenVar());
    this.setTokenVar('');
    localStorage.clear();
    return this.httpClient.get(this.apiUrl + 'main/logout', { headers });

  }

  getUserById(idUser: number): Observable<IUser> {
    return this.httpClient.get<IUser>(this.apiUrl + 'users/user/' + idUser);
  }

  deleteUser(): Observable<any> {
    return;
  }
}
