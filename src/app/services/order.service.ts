import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = 'http://localhost:3000/order';

  constructor(private httpClient: HttpClient) { }

  addOrder(): Observable<any> {
    //router.post('/', OrderController.addOrder);
    return;
  }

  getOrder(): Observable<any> {
    //router.get('/:id', OrderController.getOrder);
    return;
  }

  getAllOrder(): Observable<any> {
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
