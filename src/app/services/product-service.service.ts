import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable,map } from 'rxjs';
import { Product } from '../models/productClass/product';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


 private getProductUrl: string="http://localhost:8090/api/products";


  constructor(private _httpClient:HttpClient) { }

  getProduct(): Observable<Product[]>{
    return this._httpClient.get<Product[]>(this.getProductUrl).pipe(
      map(response=>response)
    )
  }
}
