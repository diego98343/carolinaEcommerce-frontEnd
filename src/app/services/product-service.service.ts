import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { ProductClass } from '../models/product-class';
import { ProductCategory } from '../models/productCategoryModel/product-category';
import { ProductFile } from '../models/productFileModel/product-file';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


 private getUrl: string="http://localhost:8090/api/products";


  constructor(private _httpClient:HttpClient) { }

  getProduct(): Observable<ProductClass[]>{
    return this._httpClient.get<ProductClass[]>(this.getUrl).pipe(
      map(response=>response)
    )
  }
}
