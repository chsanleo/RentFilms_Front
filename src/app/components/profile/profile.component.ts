import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { OrderService } from 'src/app/services/order.service';
import { MovieService } from 'src/app/services/movie.service';
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
    private OrderService: OrderService, 
    private MovieService: MovieService) { }

  ngOnInit(): void {
    this.user = this.UserService.getUser();
    this.OrderService.getOrdersByUser()
      .subscribe(
        res => this.UpdateHistoryOrder(res),
        error => console.error(error),
      );
  }

  private UpdateHistoryOrder(orderDB: IOrderShow[]) {
    this.orders.concat(orderDB);
    //this.MovieService.getMovieById(orderDB._id)
  }
}
