import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, Observable } from 'rxjs';
import { Order } from 'src/app/common/order';
import { OrderClass } from 'src/app/models/orderClass/order-class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private OrderUrl: string="http://localhost:8090/api/orders"

  constructor(private _httpClient:HttpClient) { }


  getOrder():Observable<OrderClass[]>{

  return this._httpClient.get<OrderClass[]>(this.OrderUrl).pipe(response=>response);

  }
}
