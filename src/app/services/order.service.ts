import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Order } from '../models/iorder.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:3000/order';

  constructor(private httpClient: HttpClient) { }

  addOrder(order: Order): Observable<any> {
    this.httpClient.post(this.apiUrl + '/', order);
    //router.post('/', OrderController.addOrder);
    return;
  }

  getOrder(id: number): Observable<any> {
    this.httpClient.get<Order>(this.apiUrl + '/' + id);
    //router.get('/:id', OrderController.getOrder);
    return;
  }

  getAllOrder(): Observable<any> {
    this.httpClient.get<Order[]>(this.apiUrl + '/');
    //router.get('/', OrderController.getAllOrder);
    return;
  }

  updateOrder(): Observable<any> {
    //router.put('/', OrderController.updateOrder);
    return;
  }

  deleteOrder(): Observable<any> {
    //router.delete('/:id', OrderController.deleteOrder);
    return;
  }

}
