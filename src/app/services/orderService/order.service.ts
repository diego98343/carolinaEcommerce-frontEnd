import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, Observable } from 'rxjs';
import { Order } from 'src/app/common/order';
import { CustomerClass } from 'src/app/models/customerClass/customer-class';
import { OrderClass } from 'src/app/models/orderClass/order-class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private OrderUrl: string="http://localhost:8090/api/orders"

  private customerUrl: string="http://localhost:8090/api/costomers"

  constructor(private _httpClient:HttpClient) { }


  getOrder():Observable<OrderClass[]>{

  return this._httpClient.get<OrderClass[]>(this.OrderUrl).pipe(response=>response);

  }

  getCustomer():Observable<CustomerClass[]>{
    return this._httpClient.get<CustomerClass[]>(this.customerUrl).pipe(response=>response);
  }

  

}
