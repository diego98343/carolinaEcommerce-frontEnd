import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/productClass/product';

import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


 products: Product[]=[];


  constructor( private _productService:ProductServiceService) { }

  ngOnInit(): void {
    this._productService.getProduct().subscribe(
      data=>{
        this.products= data
      }
    )
  }

  
 
  


}
