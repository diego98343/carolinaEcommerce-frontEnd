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
  thePageSize: number= 6;
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

  displayProducts() {

    const theProductCategoryId: number = +this.route.snapshot.paramMap.get('id')!

    // if(this.previousCategoryId != this.currentProductCategoryId){
    //   this.thePageNumber=1;
    // }

    // this.previousCategoryId =this.currentProductCategoryId;

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId === false) {

      this._productService.getProductPagination(this.thePageNumber -1,
                                                this.thePageSize,
                                                 this.currentProductCategoryId).subscribe(
        data => {
          this.products = this.filderProduct(data.content);
          this.thePageNumber= data.totalPages ;
          this.thePageSize=data.size;
          this.theTotalElements=data.totalElements;
          console.log(data);
        }
      )

  
    } else {

      this._productService.getProductCategoryById(theProductCategoryId).subscribe(
        data => {
          //get product from product category and then push it into getProductsByCategory 
          let getProductsByCategory: Product[] = [];
          getProductsByCategory.push(data.product);

          let products;

          for (let i = 0; i < getProductsByCategory.length; i++) {
            products = getProductsByCategory[i];
          }
          this.products = products;
        }
      )
    }

    // this._productService.getProduct().subscribe(
      
    //   data=>{
    //   this.products =data;
    //  })

  }

  filderProduct(products: Product[]) {

    //everytime the a product enters its gonne be filter and compare with the array of products 
    return products.filter((p) => {
      return p.productName?.toLocaleLowerCase().includes(this.filters.keyword.toLowerCase())
    })


  }







}







