import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  getTrendingMovies():Observable<any>{
    return this.httpClient.get(this.apiUrl + 'main/trending')
  }

}
