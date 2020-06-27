import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  password2: string;
  address: string;

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
  }

  signIn() {
    let error = this.validate();
    if (error) {
      alert(error);
      return;
    }
    this.UserService.signIn(this.name, this.email, this.password, this.address);
  }

  validate(): string {
    let error = "";
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


    if (this.password == this.password2) {
      if (this.password.length < 8) {
        error += " The password must be longer than 8 characters. ";
      }
      //password contains symbol
      //password contains mayus and minus

    } else {
      error += " The passwords doesn't mach. ";
    }

    if (!this.email.match(regexp)) {
      error += " The email have a incorrect format. ";
    }

    return error;
  }
}
