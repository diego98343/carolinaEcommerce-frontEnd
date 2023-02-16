import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ProductCategory } from 'src/app/models/productCategoryClass/product-category';
import { Product } from 'src/app/models/productClass/product';
import { ProductCategoryService } from 'src/app/services/productCategoryService/product-category.service';
import { ProductService } from 'src/app/services/productService/product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  
})
export class ProductsComponent implements OnInit {



  products: Product[] = [];
  productCategories: ProductCategory[] = [];
  searchMode:boolean=false;
  currentProductCategoryId:number=0;
  previousCategoryId: number;


  productsWithPag:Product[]=[];

  //pagination properties
  thePageNumber: number =1;
  thePageSize: number= 8;
  theTotalElements: number =0;

  filters = {
    keyword: ''
  }
  


  constructor(private _productService: ProductService,
    private _productCategoryService: ProductCategoryService,
    private route: ActivatedRoute,
    private productPagination: ProductService
  ) { }

  ngOnInit(): void {

 
    this.displayProducts();
    this.productCategory();
    this.displayProductByCategory();
    // this.displayProductWithPagination();
     
  }


  // displayProductWithPagination() {
  //   this._productService.getProductPagination(0,2,this.currentProductCategoryId).subscribe(
  //     data => {
  //       this.productsWithPag= data.content;
        
  //     }
  //   )
  // }

  listProducts() {
     
    }

  productCategory() {
    this._productCategoryService.getCategories().subscribe(
      data => {
        this.productCategories = data
      }
    )
  }

  displayProductByCategory(){

    //get the id from the router link
    const theProductCategoryId: number = +this.route.snapshot.paramMap.get('id')!
    //return true if the id is present 
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId===true){
      this._productService.sortProductByCategory(theProductCategoryId).subscribe(
        data=>{
          this.products= data;  
      })
  
    }else{
      this.displayProducts();
    }
  }

  displayProducts() {

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId === false) {
      this._productService.getProduct().subscribe(
        data => {
          this.products = data;
        }
      )
  }

  // filderProduct(products: Product[]) {

  //   //everytime the a product enters its gonne be filter and compare with the array of products 
  //   return products.filter((p) => {
  //     return p.productName?.toLocaleLowerCase().includes(this.filters.keyword.toLowerCase())
  //   })


  // }







}



}



