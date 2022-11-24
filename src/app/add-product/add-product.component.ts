import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../models/productCategoryModel/product-category';
import { ProductCategoryService } from '../services/productCategoryService/product-category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productCategories: ProductCategory[]=[];

  constructor(private _productCategoryService: ProductCategoryService,
    ) { }

  ngOnInit(): void {
    this._productCategoryService.getCategories().subscribe(
      data=>this.productCategories=data
      
    )
  }

}
