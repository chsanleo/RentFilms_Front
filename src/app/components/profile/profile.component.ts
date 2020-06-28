import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { IUser } from 'src/app/models/iuser.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: IUser;

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    //this.UserService.getCurrentUser();
    this.UserService.getUserById(2)
      .subscribe(
        res => this.updateUserInfo(res),
        error => console.log(error)
      );
  }

  updateUserInfo(data: IUser) {
    this.user = data;
  }
}
