import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductCategory } from 'src/app/models/productCategoryClass/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {


  private getCategoryUrl: string="http://localhost:8090/api/productCategories"


  constructor(private _httpClient:HttpClient) { }


  getCategories(): Observable<ProductCategory[]>{
    return this._httpClient.get<ProductCategory[]>(this.getCategoryUrl).pipe(
      map(response=>response)
    )
  }
}
