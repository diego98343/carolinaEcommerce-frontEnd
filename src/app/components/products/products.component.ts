import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/models/productCategoryClass/product-category';
import { Product } from 'src/app/models/productClass/product';
import { ProductCategoryService } from 'src/app/services/productCategoryService/product-category.service';
import { ProductService } from 'src/app/services/productService/product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



 products: Product[]=[];
 productCategories: ProductCategory[]=[];

 filters= {
  keyword:''
 }


  constructor( private _productService:ProductService,
               private _productCategoryService: ProductCategoryService) { }

  ngOnInit(): void {
    this.displayProducts();
    this.productCategory();
  }


  productCategory(){
    this._productCategoryService.getCategories().subscribe(
      data=>{
        // console.log(data)
        this.productCategories=data
      }
    )
  }

  displayProducts(){

    this._productService.getProduct().subscribe(data=>{
      // console.log(data)
      this.products= this.filderProduct(data)

      console.log(this.products)
    })
  }

  filderProduct(products:Product[]) {


    

    //everytime the a product enters its gonne be filter and compare with the array of products 
    return products.filter((p)=>{
      return p.productName?.toLocaleLowerCase().includes(this.filters.keyword.toLowerCase())
     })


    }
    






  }
 
  





