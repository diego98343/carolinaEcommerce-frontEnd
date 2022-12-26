import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/productCategoryClass/product-category';
import { Product } from 'src/app/models/productClass/product';
import { ProductCategoryService } from 'src/app/services/productCategoryService/product-category.service';
import { ProductService } from 'src/app/services/productService/product.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent implements OnInit {


  products: Product[]=[];
  productCategories: ProductCategory[]=[];


  constructor(private _productService:ProductService,
              private _productCategoryService: ProductCategoryService,
              private _dialogRef: MatDialog
             ) { }

  ngOnInit(): void {
    this.displayProducts();
    this.loadListProducts()
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

    
    
    deleteProduct(productId: number|undefined) {
      if(confirm("Seguro quieres eliminar el productos?"))
      this._productService.deleteExpense(productId).subscribe(
        data=>{
          console.log('deleted object',data)
          this.loadListProducts()
        }
      )
      }


      loadListProducts(){
        this._productService.getProduct().subscribe(
          data=> this.products= data
        )
      }

}
