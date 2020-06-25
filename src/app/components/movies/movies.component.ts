import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  listOfMovies: object;

  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
    this.MovieService.getTrendingMovies()
      .subscribe(
        res => this.listOfMovies = res['results'],
        error => console.error(error),
        () => console.log("este es el mítico console log ", this.listOfMovies)
      )
  }

}
