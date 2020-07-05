import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IMovie } from 'src/app/models/imovie.model';
import { IMovieExt } from 'src/app/models/imovieEXT.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  listOfMovies: IMovieExt[];

  constructor(private MovieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.MovieService.getTrendingMovies()
      .subscribe(
        res => this.listOfMovies = res['results'],
        error => console.error(error),
        () => console.log(this.listOfMovies)
      )
  }
  goMovieDetail(movie: IMovieExt) {
    this.MovieService.getMovieDetail(movie.id)
      .subscribe(
        res => {
          this.UpdateMovieDetailVar(res),
            this.moveToDetail()
        },
        error => {
          alert("Please try again in some minuts."),
            console.log(error)
        },
      );
  }

  private UpdateMovieDetailVar(movie: IMovie) {
    this.MovieService.setMovieDetailVar(movie);
  }
  private moveToDetail() {
    setTimeout(() => {
      this.router.navigate(['/movieDetail']);
    }, 1500);
  }
}