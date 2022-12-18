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

 private baseUrl2: string= "http://localhost:8090/api/addNewProduct"

  constructor(private _httpClient:HttpClient) { }

  getProduct():Observable<Product[]> {
    return this._httpClient.get<Product[]>(this.baseUrl).pipe(
      map(response=>response)
    )
  }

  addProduct(product:Product){
     return this._httpClient.post<Product>(this.baseUrl,product)
  }

  editProductById(id:number): Observable<Product>{
    return this._httpClient.get<Product>(`${this.baseUrl}/${id}`).pipe(
      map(response=>response)
    )
   }

  deleteExpense(id:number|undefined){
    return this._httpClient.delete(`${this.baseUrl}/${id}`,{responseType: 'text'})
  }

}
