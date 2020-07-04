import { Component, OnInit, NgModule } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/iuser.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMsg: string;

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {


    const user: IUser = loginForm.value;
    let errorValidate = this.validate(user);

    if (errorValidate) {
      this.errorMsg = errorValidate;
      setTimeout(() => this.errorMsg = '', 5000);
      return;
    }

    this.UserService.logIn(user)
      .subscribe(
        res => {
            this.updateToken(res.token),
            this.updateUser(res.user)
        },
        error => console.log(error)
      );
  }

  updateToken(res: string) {
    this.UserService.setToken(res);
    console.log(res);
  }

  updateUser(user: IUser) {
    this.UserService.setUser(user);

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);
  }

  private validate(user: IUser) {

    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (!user.email.match(regexp)) {
      return " The email have a incorrect format. ";
    }

    return "";

  }
}
