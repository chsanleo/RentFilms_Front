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
  getUser() : IUser{
    let lsUser = localStorage.getItem('user')
    
    if(lsUser){return JSON.parse(lsUser);}//
    return this.user;
  }
  getToken() {
    let lsToken = localStorage.getItem('token');

    if (lsToken) { return lsToken; }
    return this.token;
  }

  //SETTERS
  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', this.token);
  }

  setUser(user:IUser){
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

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

  logIn(email: string, pwd: string): Observable<IUserLogin> {
    //recoger el token //REVISAR
    let body = {
      email: email,
      password: pwd
    };

    return this.httpClient.post<IUserLogin>(this.apiUrl + 'main/login', body);
  }

  logOut(): Observable<any> {
    let headers = new HttpHeaders().set('authorization', this.getToken());
    this.setToken('');
    localStorage.clear();
    return this.httpClient.get(this.apiUrl + 'main/logout', { headers });

  }

  getUserById(idUser: number): Observable<IUser> {
    //let headers = new HttpHeaders().set('authorization', localStorage.getItem('token'));
    return this.httpClient.get<IUser>(this.apiUrl + 'users/user/' + idUser/*, { headers }*/);
  }

  deleteUser(): Observable<any> {
    return;
  }

}
