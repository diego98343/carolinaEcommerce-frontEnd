import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/productCategoryModel/product-category';
import { ProductCategoryService } from 'src/app/services/productCategoryService/product-category.service';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  productCategories: ProductCategory[]=[];

  

  constructor( private _productCategoryService: ProductCategoryService) { }

  ngOnInit(): void {
    this._productCategoryService.getCategories().subscribe(
      data=>this.productCategories=data
    )
  }


}
