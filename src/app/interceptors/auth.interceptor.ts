import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private UserService: UserService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /*
    const token = this.UserService.getTokenVar();
    console.log(token);
    
    if (token === undefined) { return next.handle(request); }

    request = request.clone({
      setHeaders: {
        authorization: token
      }
    });

    console.log(request);
    return next.handle(request);*/

    const token = this.UserService.getTokenVar();
      let newHeaders = request.headers;
      if (token) {
        newHeaders = newHeaders.append('authorization', token);
      }
      console.log(newHeaders);
      const authReq = request.clone({headers: newHeaders});
      return next.handle(authReq);
  }
}
