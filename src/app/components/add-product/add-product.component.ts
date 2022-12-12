import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { response } from 'express';
import { Product } from 'src/app/models/productClass/product';
import { ProductService } from 'src/app/services/productService/product.service';
import { ProductCategory } from '../../models/productCategoryClass/product-category';
import { ProductCategoryService } from '../../services/productCategoryService/product-category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  
  productCategories: ProductCategory[]=[];
  products: Product[]=[];

  product: Product ={
    productName:"",
    description:"",
    unitsInStock:0,
    dateCreated:new Date(),
    productPrice:0,
    
    
  }


  constructor(private _productCategoryService: ProductCategoryService,
              private _productService:ProductService,
    ) { }

  ngOnInit(): void {
    this._productCategoryService.getCategories().subscribe(
      data=>{
        console.log(data)
        this.productCategories=data
      } 
    )

    this.displayProducts();
  }

  displayProducts(){
    this._productService.getProduct().subscribe(data=>{
      console.log(data);
      this.products=data
    })
  }

  addProduct(productForm:NgForm) {
    this._productService.addProduct(this.product).subscribe(
      (response:Product)=>{
         console.log(response);
      },
      (error:HttpErrorResponse)=>{
        console.log(error)
      }
     );
    }



}
