import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable,map } from 'rxjs';
import { ProductClass } from '../models/product-class';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


 private getProductUrl: string="http://localhost:8090/api/products";


  constructor(private _httpClient:HttpClient) { }

  getProduct(): Observable<ProductClass[]>{
    return this._httpClient.get<ProductClass[]>(this.getProductUrl).pipe(
      map(response=>response)
    )
  }
}
