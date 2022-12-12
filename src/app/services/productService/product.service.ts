import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/productClass/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
 private baseUrl: string= "http://localhost:8090/api/products"

  constructor(private _httpClient:HttpClient) { }

  getProduct():Observable<Product[]> {
    return this._httpClient.get<Product[]>(this.baseUrl).pipe(
      map(response=>response)
    )
  }
}
