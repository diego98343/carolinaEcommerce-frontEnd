import { Component, OnInit } from '@angular/core';
import { ProductClass } from '../models/product-class';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


 products: ProductClass[]=[];


  constructor( private _productService:ProductServiceService) { }

  ngOnInit(): void {
    this.listProducts
  }

  listProducts(){
    this._productService.getProduct().subscribe(
      data=>{
        this.products=data;
      }
    )
  }


}
