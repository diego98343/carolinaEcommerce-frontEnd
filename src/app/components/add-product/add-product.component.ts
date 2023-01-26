import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


import { Product } from 'src/app/models/productClass/product';
import { ProductService } from 'src/app/services/productService/product.service';
import { EcommerceValidator } from 'src/app/validator/ecommerce-validator';
import { ProductCategory } from '../../models/productCategoryClass/product-category';
import { ProductCategoryService } from '../../services/productCategoryService/product-category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  allProducts: FormGroup;
  
  productCategories?: ProductCategory[]=[];

  products?: Product[]=[];

  product: Product = new Product();


  constructor(private _productCategoryService: ProductCategoryService,
              private _productService:ProductService,
              private sanitizer:DomSanitizer,
              private _routerActive:ActivatedRoute,
              private _router:Router,
              private _formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {


   this.displayProductCategories();
   this.editProduct();

   this.allProducts= this._formBuilder.group({

    productInputs: this._formBuilder.group({ 
      
    product: new FormControl('',[Validators.required,
                                 Validators.minLength(5),
                                 EcommerceValidator.noOnlyWhiteSpace]),

    reference: new FormControl('',[Validators.required,
                                   Validators.minLength(3),
                                   EcommerceValidator.noOnlyWhiteSpace]),

    quantity: new FormControl('',[Validators.required,
                                  Validators.minLength(1),
                                  EcommerceValidator.noOnlyWhiteSpace]),
      
    price: new FormControl('',[Validators.required,
                               Validators.minLength(2),
                               EcommerceValidator.noOnlyWhiteSpace]),
      
    imageUrl: new FormControl('',[Validators.required,
                                  Validators.minLength(5),
                                  EcommerceValidator.noOnlyWhiteSpace]),     
      
    category: new FormControl('',[Validators.required]),


    decription: new FormControl('',[Validators.required,
                                    Validators.minLength(10),
                                    EcommerceValidator.noOnlyWhiteSpace])
      
      }),
   


// file: this._formBuilder.group({

//  imageFile: new FormControl('',[Validators.required])

//   })   

})
}


//get form group validators

get productName(){
  return this.allProducts.get('productInputs.product');
}

get productReference(){
  return this.allProducts.get('productInputs.reference');
}

get productQuantity(){
  return this.allProducts.get('productInputs.quantity');
}

get productPrice(){
  return this.allProducts.get('productInputs.price');
}

get productImageUrl(){
  return this.allProducts.get('productInputs.imageUrl');
}

get productDescription(){
  return this.allProducts.get('productInputs.decription');
}

get productCategory(){
  return this.allProducts.get('productInputs.category');
}




// send data to the data base

  onSubmit() {

    if(this.allProducts.invalid){
      this.allProducts.markAllAsTouched();
      return;
    }

    let productTry = new Product();
    
    let allProducts = this.allProducts.controls['productInputs'].value

    productTry.productName = allProducts.product
    productTry.productReference = allProducts.reference
    productTry.unitsInStock = allProducts.quantity;
    productTry.productPrice = allProducts.price;
    productTry.imageURl = allProducts.imageUrl;
    productTry.productCategory = allProducts.category;
    productTry.description = allProducts.decription;

     console.log(productTry);

    this._productService.addProduct(productTry).subscribe(
      (response:Product)=>{
         this._router.navigateByUrl("/productList") 
      },
      (error:HttpErrorResponse)=>{
        console.log(error)
      }
    );
  }

  


  editProduct(){

    const isIdPresent= this._routerActive.snapshot.paramMap.has("id");

    console.log(isIdPresent);

    if(isIdPresent){
      
      const id =+ this._routerActive.snapshot.paramMap.get("id")!

      console.log(id);

      this._productService.editProductById(id).subscribe(
        data=>{

          this.product = data;
          console.log(this.product);
          // let allProducts = this.allProducts.controls['productInputs'].value
      
          
          // this.product.productName = allProducts.product
          // this.product.productReference = allProducts.reference
          // this.product.unitsInStock = allProducts.quantity;
          // this.product.productPrice = allProducts.price;
          // this.product.imageURl = allProducts.imageUrl;
          // this.product.productCategory = allProducts.category;
          // this.product.description = allProducts.decription;

          this.allProducts.patchValue({

            productInputs:{

              product:this.product.productName,

              reference:this.product.productReference,

              quantity:this.product.unitsInStock.toString(),

              price: this.product.productPrice .toString(),

              imageUrl:this.product.imageURl, 

              category:this.product.productCategory,    

              decription: this.product.description 

            }
          })
        } 
      )
    }
  }

  displayProductCategories(){

    this._productCategoryService.getCategories().subscribe(
      data=>{
        this.productCategories=data
        
      } 
    )
  }

  displayProducts(){
    this._productService.getProduct().subscribe(data=>{   
     this.products=data
    })
  }

  // addProduct(productForm:NgForm) {

  // //  const productFormData =this.prepareFormData(this.product)


  //   this._productService.addProduct(this.product).subscribe(
  //     (response:Product)=>{
  //        this._router.navigateByUrl("/productList")  
  //     },
  //     (error:HttpErrorResponse)=>{
  //       console.log(error)
  //     }
  //    );
  //   }

    deleteProduct(id: number|undefined) {
      if(confirm("Seguro quieres eliminar el producto?"))
      this._productService.deleteExpense(id).subscribe(
        data=>{
          this._router.navigateByUrl("/productList")
        }
      )
   }









}
