import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IOrder } from '../models/iorder.model';
import { Injectable } from '@angular/core';
import { IOrderShow } from '../modelsShow/orderShow.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:3000/orders';

  constructor(private httpClient: HttpClient) { }

  addOrder(order: IOrder): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/', order);
    //router.post('/', OrderController.addOrder);
  }

  getOrder(id: number): Observable<IOrder> {
    return this.httpClient.get<IOrder>(this.apiUrl + '/' + id);
    //router.get('/:id', OrderController.getOrder);

  }
  getOrdersByUser(): Observable<IOrderShow[]> {
    return this.httpClient.get<IOrderShow[]>(this.apiUrl + '/user');
  }///

  getAllOrder(): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>(this.apiUrl + '/');
    //router.get('/', OrderController.getAllOrder);
  }
}