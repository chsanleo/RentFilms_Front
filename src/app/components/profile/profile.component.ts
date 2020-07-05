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
  orders: IOrderShow[];

  constructor(
    private UserService: UserService, 
    private OrderService: OrderService) { }

  ngOnInit(): void {
    this.user = this.UserService.getUserVar();
    this.OrderService.getOrdersByUser()
      .subscribe(
        res => {
          console.log(res),
          this.UpdateHistoryOrder(res)
        },
        error => console.error(error),
      );
  }

  private UpdateHistoryOrder(orderDB: IOrderShow[]) {
    if(orderDB){return;}
    this.orders.concat(orderDB);
    console.log(orderDB)
    //this.MovieService.getMovieById(orderDB._id)
  }
}
