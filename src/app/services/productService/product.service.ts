import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  
  


 private baseUrl: string= "http://localhost:8090/api/products"
  constructor() { }

  getProduct() {
    throw new Error('Method not implemented.');
  }
}
