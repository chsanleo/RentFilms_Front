import { Component, OnInit, NgModule } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/iuser.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.UserService.logIn(this.email,this.password);
  }
}
