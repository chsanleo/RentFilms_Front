import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../models/imovie.model';
import { IOrderShow } from '../modelsShow/orderShow.model';
import { IMovieExt } from '../models/imovieEXT.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://localhost:3000/';
  private page = 0;
  private movieDetail: IMovie;
  private moviesByTitle: IMovie[];

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

  getMovieDetail(id: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(this.apiUrl + '/movies/' + id);
  }

  getSomeMovies(movies: number[]) {
    return this.httpClient.post<IOrderShow>(this.apiUrl + '/movies/movies', movies);
  }

  getGender(id: number) {
    //router.get('/genders/:id', MovieController.getGenders);
  }

  getMovieByTitle(title: string): Observable<any> {
    let body = { title: title };

    //recoger varios en lista

    return this.httpClient.post<any>(this.apiUrl + 'movies/title', body);
    /*.subscribe({
      next: data => console.log("todoOK"),
      error: error => console.log(error)
    });*/
  }

  getMovieById(id: string) {
    return this.httpClient.get<IMovie>(this.apiUrl + '/movie/' + id);
  }
}
