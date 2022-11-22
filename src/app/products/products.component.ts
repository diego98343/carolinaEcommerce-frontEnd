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


  constructor( private _expenseService:ProductServiceService) { }

  ngOnInit(): void {
  }


  listProducts(){
    this._expenseService.getProduct().subscribe(
      data=>this.products
    )
  }


}
