import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserLogin } from '../models/userLogin.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/';
  private user: User;
  private token: string;

  constructor(private httpClient: HttpClient) { }

  //GETTERS
  getUser(){
    return this.user;
  }
  getToken(){
    return this.token;
  }

  //SETTERS


  //METHODS
  signIn(userSignIn: User): Observable<any> {
    return this.httpClient.post(this.apiUrl + 'main/signin', userSignIn);
  }

  logIn(userforLogin: User) {
    //recoger el token //REVISAR
    let data = this.httpClient.post<UserLogin>(this.apiUrl + 'main/login', userforLogin)
      .pipe(map(res => <UserLogin>res));

    localStorage.setItem('token', data['token']);

    this.token = data['token'];
    this.user = data['user'];
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

  getUserById(idUser: number): Observable<User> {
    //let headers = new HttpHeaders().set('authorization', localStorage.getItem('token'));
    return this.httpClient.get<User>(this.apiUrl + 'users/user/' + idUser/*, { headers }*/);
  }

  updateUserInfo(): Observable<any> {
    return;
  }

  deleteUser(): Observable<any> {
    return;
  }

}
