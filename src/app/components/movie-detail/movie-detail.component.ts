import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  private movieDetail:Movie;

  constructor(private MovieService : MovieService) { }

  ngOnInit(): void {
    this.MovieService.getMovieDetail(4565)
    .subscribe(
      res => this.updateDataMovieDetail(res), 
      error => console.log(error)
    );
  }

  private updateDataMovieDetail(movie:Movie){
    this.movieDetail.poster_path = movie.poster_path,
    this.movieDetail.idIMDB = movie.idIMDB,
    this.movieDetail.original_language = movie.original_language,
    this.movieDetail.original_title = movie.original_title,
    this.movieDetail.genre_id = movie.genre_id,
    this.movieDetail.title = movie.title,
    this.movieDetail.overview = movie.overview,
    this.movieDetail.release_date = movie.release_date
  }
}
