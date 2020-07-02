import { Component, OnInit, NgModule } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/iuser.model';
import { IUserLogin } from 'src/app/models/iuserLogin.model';

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
    this.UserService.logIn(this.email, this.password)
      .subscribe(
        res => {
          this.updateToken(res.token),
          this.updateUser(res.user)
        },
        error => console.log(error)
    );
  }

  updateToken(res: string){
    this.UserService.setToken(res);
    console.log(res);
  }

  updateUser(user:IUser){
    this.UserService.setUser(user);
  }
}
