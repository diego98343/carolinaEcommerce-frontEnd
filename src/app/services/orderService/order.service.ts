import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, Observable } from 'rxjs';
import { Order } from 'src/app/common/order';
import { CustomerClass } from 'src/app/models/customerClass/customer-class';
import { OrderClass } from 'src/app/models/orderClass/order-class';
import { OrderItems } from 'src/app/models/orderitems/order-items';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private OrderUrl: string="http://localhost:8090/api/orders"

  private customerUrl: string="http://localhost:8090/api/customers"

  private orderItemsUrl: string="http://localhost:8090/api/orderItemsByProductId"

  private customerByEmailUrl: string="http://localhost:8090/api/customerByEmail"

  constructor(private _httpClient:HttpClient) { }


  getOrder():Observable<OrderClass[]>{

  return this._httpClient.get<OrderClass[]>(this.OrderUrl).pipe(response=>response);

  }


  getCustomerByEmail(email:string):Observable<CustomerClass[]>{
    return this._httpClient.get<CustomerClass[]>(`${this.customerByEmailUrl}/${email}`)
  }

  
  
  getAllCustomer():Observable<CustomerClass[]>{
    return this._httpClient.get<CustomerClass[]>(this.customerUrl).pipe(response=>response);
  }

  
  getAllOrderItemsByOrderId(orderId:number):Observable<OrderItems[]>{
    return this._httpClient.get<OrderItems[]>(`${this.orderItemsUrl}/${orderId}`)
  }
  
  
}
