import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from 'src/app/models/file-handle.models';
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


  product: Product = new Product();


  constructor(private _productCategoryService: ProductCategoryService,
              private _productService:ProductService,
              private sanitizer:DomSanitizer
    ) { }

  ngOnInit(): void {
    this.displayProductCategories();
    this.displayProducts();
  }


  displayProductCategories(){

    this._productCategoryService.getCategories().subscribe(
      data=>{
        console.log(data)
        this.productCategories=data
      } 
    )
  }


  displayProducts(){
    this._productService.getProduct().subscribe(data=>{
      console.log(data);
      this.products=data
    })
  }



  addProduct(productForm:NgForm) {

  //  const productFormData =this.prepareFormData(this.product)

    this._productService.addProduct(this.product).subscribe(
      (response:Product)=>{
         console.log(response);
      },
      (error:HttpErrorResponse)=>{
        console.log(error)
      }
     );
    }



    //FORM DATA FUCTIONS------------------------------

// prepareFormData(product:Product):FormData{

// const formData = new FormData();

// formData.append(
//   'product',
//   new Blob([JSON.stringify(product)],{type:'application/json'})
// );

//   for(var i=0 ; product.productImage?.length; i++){
//    formData.append(
//     'imageFile',
//     product.productImage[i].file
//    );
//   }
//   return formData;
// }

//---------------------------------------------------------



  // onFileSelected(event:any){
  //   if(event.target.files){

  //     const file= event.target.files[0];

  //     const fileHandle:FileHandle={
  //       file:file,
  //       url: this.sanitizer.bypassSecurityTrustUrl(
  //         window.URL.createObjectURL(file)
  //       )
  //     }

  //     this.product.productImage?.push(file)
  //   }
  // }


}
