import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/productClass/product';
import { ProductService } from 'src/app/services/productService/product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


 products: Product[]=[];


  constructor( private _productService:ProductService) { }

  ngOnInit(): void {
    this.displayProducts();
  }

  displayProducts(){

  }
  
  }
 
  





