import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/productCategoryClass/product-category';
import { Product } from 'src/app/models/productClass/product';
import { ProductCategoryService } from 'src/app/services/productCategoryService/product-category.service';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent implements OnInit {

  products: Product[]=[];
  productCategories: ProductCategory[]=[];


  constructor(private _productService:ProductService,
    private _productCategoryService: ProductCategoryService) { }

  ngOnInit(): void {
    this.displayProducts();
  }


  displayProducts(){
    this._productService.getProduct().subscribe(data=>{
      console.log(data);
      this.products=data
    })
  }

  displayProductCategories(){

    this._productCategoryService.getCategories().subscribe(
      data=>{
        console.log(data)
        this.productCategories=data
      } 
    )
  }

  editProduct(productId: number|undefined) {
    console.log(productId)
    }
    
  

}
