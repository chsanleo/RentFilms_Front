import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { IUser } from 'src/app/models/iuser.model';
import { IOrder } from 'src/app/models/iorder.model';

import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: IUser;
  order: IOrder;

  constructor(private UserService: UserService, private OrderService: OrderService) { }

  ngOnInit(): void {
    this.user = this.UserService.getUser();
    this.order = this.OrderService.getOrdersByUser(this.user.id);
  }

}
