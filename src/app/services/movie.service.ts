import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  getTrendingMovies(): Observable<any> {
    return this.httpClient.get(this.apiUrl + 'main/trending');
    //añadir comportamiento para 
    //router.get('/trending/:id', MovieController.getTredingMovies); (pages)

  }

  getAllGendersMovies(): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/genders');
  }

  getMovieById():Observable<any>{
    //router.get('/:id', MovieController.getMovie);
    return;
  }
  
  searchMovieByTitle():Observable<any>{
    //router.post('title', 
    return;
  }
  
//router.get('/genders/:id', MovieController.getGenders);
}
