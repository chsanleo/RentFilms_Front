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

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.UserService.getToken();
    
    if (token === undefined) { return next.handle(request); }

    const cRequest = request.clone({
      setHeaders: {
        authorization: token
      }
    });

    return next.handle(cRequest);
  }
}
