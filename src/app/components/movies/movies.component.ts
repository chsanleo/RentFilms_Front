import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IMovie } from 'src/app/models/imovie.model';
import { IMovieExt } from 'src/app/models/imovieEXT.model';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  listOfMovies: IMovieExt[];

  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
    this.MovieService.getTrendingMovies()
      .subscribe(
        res => this.listOfMovies = res['results'],
        error => console.error(error),
        () => console.log(this.listOfMovies)
      )
  }

}
