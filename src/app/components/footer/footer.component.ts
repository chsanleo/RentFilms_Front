import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {



  constructor(private MovieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  searchMovies(searchValue: string) {
console.log(searchValue)
    this.MovieService.getMovieByTitle(searchValue)
      .subscribe(
        res => this.MovieService.setMovieByTitleVar(res),
        error => console.log(error)
      );
    this.router.navigate(['/']);
  }
}
