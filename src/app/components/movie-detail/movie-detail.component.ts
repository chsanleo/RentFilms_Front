import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/app/models/imovie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieDetail: IMovie;
  private More:boolean;

  constructor(private MovieService : MovieService) { }

  ngOnInit(): void {
    this.movieDetail = this.MovieService.getMovieDetailVar();
  }

  changeMore(){this.More = !this.More;}
  getMore(){return this.More;}
}
