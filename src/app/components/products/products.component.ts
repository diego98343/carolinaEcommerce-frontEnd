import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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



  products: Product[] = [];
  productCategories: ProductCategory[] = [];

  filters = {
    keyword: ''
  }


  constructor(private _productService: ProductService,
    private _productCategoryService: ProductCategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.displayProducts();
    this.productCategory();
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

    console.log(theProductCategoryId);

    if (theProductCategoryId === 0) {
      this._productService.getProduct().subscribe(
        data => {
          this.products = this.filderProduct(data)
          console.log(this.products);
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


  }

  filderProduct(products: Product[]) {

    //everytime the a product enters its gonne be filter and compare with the array of products 
    return products.filter((p) => {
      return p.productName?.toLocaleLowerCase().includes(this.filters.keyword.toLowerCase())
    })


  }







}







