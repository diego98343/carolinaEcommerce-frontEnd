import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

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
              private sanitizer:DomSanitizer,
              private _routerActive:ActivatedRoute,
              private _router:Router
    ) { }

  ngOnInit(): void {
   this.displayProductCategories();
   this.editProduct();
  }


  editProduct(){

    const isIdPresent= this._routerActive.snapshot.paramMap.has("id");

    if(isIdPresent){
 
      const id =+ this._routerActive.snapshot.paramMap.get("id")!
 
      this._productService.editProductById(id).subscribe(
        data=> this.product = data

      )
    }


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
         this._router.navigateByUrl("/productList")
         
      },
      (error:HttpErrorResponse)=>{
        console.log(error)
      }
     );
    }

    deleteProduct(id: number|undefined) {
      this._productService.deleteExpense(id).subscribe(
        data=>{
          console.log('deleted object',data)
          this._router.navigateByUrl("/productList")
        }
      )
      }



    // onFileSelected($event:any) {

    //  if($event.target.files){

    //   const file =$event.target.files[0];

    //   const fileHandle: FileHandle={
    //     file: file,
    //     url: this.sanitizer.bypassSecurityTrustUrl(
    //       window.URL.createObjectURL(file)
    //     )
    //   }
    //   console.log(fileHandle)
    //   this.product.productImage?.push(fileHandle);
    //  }
    //   }


    //FORM DATA FUCTIONS------------------------------




// prepareFormData(product:Product):FormData{

// const formData = new FormData();

// formData.append(
//   'product',
//   new Blob([JSON.stringify(product)],{type:'application/json'})
// );

//   for(let i=0 ; product.productImage?.length; i++){

//    formData.append(
//     'imageFile',
//     product.productImage[i].file,
//     product.productImage[i].file.name,
//    );
   
//   }

//   console.log(formData);
//   return formData;
// }

//---------------------------------------------------------






}
