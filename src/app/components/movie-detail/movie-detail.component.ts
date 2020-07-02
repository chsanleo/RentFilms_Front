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

  constructor(private MovieService : MovieService) { }

  ngOnInit(): void {
    this.MovieService.getMovieDetail(4562)
    .subscribe(
      res => this.updateDataMovieDetail(res), 
      error => console.log(error)
    );
  }

  private updateDataMovieDetail(movie:IMovie){
    this.movieDetail = movie;
   /* this.movieDetail.poster_path = movie.poster_path,
    this.movieDetail.idIMDB = movie.idIMDB,
    this.movieDetail.original_language = movie.original_language,
    this.movieDetail.original_title = movie.original_title,
    this.movieDetail.genre_id = movie.genre_id,
    this.movieDetail.title = movie.title,
    this.movieDetail.overview = movie.overview,
    this.movieDetail.release_date = movie.release_date*/
  }
}
