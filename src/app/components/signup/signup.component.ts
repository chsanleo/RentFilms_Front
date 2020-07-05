import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/models/iuser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  errorMsg: string;

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(signinForm: NgForm) {

    const user: IUser = signinForm.value;

    let error = this.validate(user);

    if (error) {
      this.errorMsg = error;
      setTimeout(() => this.errorMsg = '', 5000);
      return;
    }

    this.UserService.signIn(user)
      .subscribe({
        next: data => this.moveToNext(),
        error: error => console.log(error)
      });
  }

  private moveToNext(){
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);
  }

  private validate(user: IUser): string {
    let error = "";
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


    if (user.password == user.password2) {
      if (user.password.length < 8) {
        error += " The password must be longer than 8 characters. ";
      }
      //password contains symbol
      //password contains mayus and minus

    } else {
      error += " The passwords doesn't mach. ";
    }

    if (!user.email.match(regexp)) {
      error += " The email have a incorrect format. ";
    }

    return error;
  }
}
