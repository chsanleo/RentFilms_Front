import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Order } from '../models/iorder.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:3000/order';

  constructor(private httpClient: HttpClient) { }

  addOrder(order: Order): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/', order);
    //router.post('/', OrderController.addOrder);
  }

  getOrder(id: number): Observable<Order> {
    return this.httpClient.get<Order>(this.apiUrl + '/' + id);
    //router.get('/:id', OrderController.getOrder);
    
  }
  getOrdersByUser(userId:number) : Observable<Order> {
    return this.httpClient.get<Order>(this.apiUrl+'/user/'+userId);
  }

  getAllOrder(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.apiUrl + '/');
    //router.get('/', OrderController.getAllOrder);
  }
}