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
  getPageVar() { return this.page; }
  getMovieVar() { return this.movieDetail; }
  getMoviesByTitleVar() { return this.moviesByTitle; }

  //SETTERS
  setPageVar(page: number) {
    this.page = page;
  }
  setMovieDetailVar(movieDetail:IMovie){this.movieDetail = movieDetail;}

  //METHODS
  getTrendingMovies(): Observable<IMovieExt[]> {

    return this.httpClient.get<IMovieExt[]>(this.apiUrl + 'main/trending');
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
