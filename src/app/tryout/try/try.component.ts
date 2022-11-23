import { Component, OnInit } from '@angular/core';
import { ProductClass } from 'src/app/models/product-class';
import { ProductCategory } from 'src/app/models/productCategoryModel/product-category';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ProductCategoryService } from 'src/app/services/productCategoryService/product-category.service';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  productCategories: ProductCategory[]=[];

  products: ProductClass[]=[];

  

  constructor( private _productCategoryService: ProductCategoryService,
               private _productService: ProductServiceService
               ) { }

  ngOnInit(): void {
    this._productCategoryService.getCategories().subscribe(
      data=>this.productCategories=data
    )

    this._productService.getProduct().subscribe(
      data=> this.products=data
    )
  }


}
