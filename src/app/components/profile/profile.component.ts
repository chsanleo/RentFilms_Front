import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { OrderService } from 'src/app/services/order.service';
import { IUser } from 'src/app/models/iuser.model';


import { IOrderShow } from 'src/app/modelsShow/orderShow.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: IUser;
  orders: /*IOrderShow[]*/any;

  constructor(
    private UserService: UserService, 
    private OrderService: OrderService) { }

  ngOnInit(): void {
    this.user = this.UserService.getUserVar();
    this.OrderService.getOrdersByUser(this.user.id)
      .subscribe(
        res => {
          console.log(res),
          this.UpdateHistoryOrder(res)
        },
        error => console.error(error),
      );
  }

  private UpdateHistoryOrder(orderDB: any) {
    this.orders = [];

    if(!orderDB){return;}

    this.orders.concat(orderDB);
  }
}
