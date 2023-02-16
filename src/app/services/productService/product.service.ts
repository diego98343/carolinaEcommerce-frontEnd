import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/productClass/product';
import { map } from 'rxjs';
import { ProductCategory } from 'src/app/models/productCategoryClass/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
 private baseUrl: string= "http://localhost:8090/api/products";

 private baseUrl2: string= "http://localhost:8090/api/addNewProduct";

 private categoryBaseUrl: string= "http://localhost:8090/api/productCategories";

  constructor(private _httpClient:HttpClient) { }



  getProduct():Observable<Product[]> {
    return this._httpClient.get<Product[]>(this.baseUrl).pipe(
      map(response=>response)
    )
  }



  searchProductByName(productName:String):Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${this.baseUrl}/searchByName/${productName}`)
  }

  sortProductByCategory(productCategory:number):Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${this.baseUrl}/searchByCategory/${productCategory}`)
  }

  
  getProductPagination( thePageSize: number,
                        theTotalPages:number,
                        theCategoryId:number):Observable<getResponseProducts> {

    const paginationUrl = "http://localhost:8090/api/products/pagination/1/3"

   return this._httpClient.get<getResponseProducts>(`${this.baseUrl}/pagination/${thePageSize}/${theTotalPages}`);
  }

  getProductWithPage():Observable<Product[]> {
    return this._httpClient.get<Product[]>(this.baseUrl).pipe(
      map(response=>response)
    )
  }


  addProduct(product:Product){
     return this._httpClient.post<Product>(this.baseUrl,product)
  }


  editProduct(id:number,product:Product){
    
    return this._httpClient.put(`${this.baseUrl}/${id}`,product);
      
   }


  deleteExpense(id:number|undefined){
    return this._httpClient.delete(`${this.baseUrl}/${id}`,{responseType: 'text'})
  }


  getProductById(id:number):Observable<Product>{

    const productUrl=`${this.baseUrl}/${id}`

    return this._httpClient.get<Product>(productUrl);
    
  }

  getProductCategoryById(theCategoryId:Number):Observable<ProductCategory>{

    const productCategoryUrl=`${this.categoryBaseUrl}/${theCategoryId}`;

    return this._httpClient.get<ProductCategory>(productCategoryUrl);
  }





}

interface getResponseProducts{
  content:Product[];
  totalPages: number,
  totalElements: number,
  size: number,
}
