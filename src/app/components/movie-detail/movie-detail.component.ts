import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IMovie } from '../../models/imovie.model';
import { IOrder } from '../../models/iorder.model';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieDetail: IMovie;
  message:string;
  private More: boolean;

  constructor(private MovieService: MovieService,
    private UserService: UserService,
    private OrderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    this.movieDetail = this.MovieService.getMovieDetailVar();
  }

  changeMore() { this.More = !this.More; }
  getMore() { return this.More; }

  orderRentFilm() {
    let order: IOrder = {
      movieId: this.movieDetail._id,
      userId: this.UserService.getUserVar().id,
      returnDate: null
    }
    this.OrderService.addOrder(order)
    .subscribe(
      res=> {
        this.message ="Pelicula alquilada!",
        setTimeout(() => {
          this.message = "";
          this.router.navigate(['/'])
        }, 5000);
    },
      error=> {
        this.message = "Devuelva la pelicula antes"
        setTimeout(() => {
          this.router.navigate(['/profile'])
        }, 5000);
    }
    
    );
  }
}
