import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://localhost:3000/';
  private page = 0;
  private movieDetail: Movie;
  private moviesByTitle: Movie[];

  constructor(private httpClient: HttpClient) { }

  //GETTERS
  getPage() { return this.page; }
  getMovie() { return this.movieDetail; }
  getMoviesByTitle() { return this.moviesByTitle; }

  //SETTERS
  setPage(page: number) {
    this.page = page;
  }

  //METHODS
  getTrendingMovies(): Observable<any> {
    
    return this.httpClient.get(this.apiUrl + 'main/trending');
    // router.get('/trending/:id', MovieController.getTredingMovies);

  }

  getMovieDetail(id: number) {
    this.httpClient.get<Movie>(this.apiUrl + '/movies/' + id)
      .subscribe(data => {
        this.movieDetail.poster_path = data.poster_path,
          this.movieDetail.idIMDB = data.idIMDB,
          this.movieDetail.original_language = data.original_language,
          this.movieDetail.original_title = data.original_title,
          this.movieDetail.genre_id = data.genre_id,
          this.movieDetail.title = data.title,
          this.movieDetail.overview = data.overview,
          this.movieDetail.release_date = data.release_date
      });
  }

  getGender(id: number) {
    //router.get('/genders/:id', MovieController.getGenders);

  }

  getMovieByTitle(title: string) : Observable<any> {
    let body = { title: title };

    //recoger varios en lista

    return this.httpClient.post<any>(this.apiUrl + 'movies/title', body);
      /*.subscribe({
        next: data => console.log("todoOK"),
        error: error => console.log(error)
      });*/
  }
}
