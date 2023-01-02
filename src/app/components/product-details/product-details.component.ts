import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/productClass/product';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


 product!:Product;


  constructor(private productService: ProductService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.handleProductDetails();
    })
  }
  handleProductDetails() {
    // get the id and convert it to a number 

    const theProductId: number = +this.route.snapshot.paramMap.get('id')!

    this.productService.getProductById(theProductId).subscribe(
      data=>{
        this.product = data
        console.log(this.product)
      }
    )
  }


  addProductToChart(product:Product) {
    console.log(product)
    }



}
