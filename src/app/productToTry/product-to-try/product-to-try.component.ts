import { Component, OnInit } from '@angular/core';
import { ProductClass } from 'src/app/models/product-class';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-to-try',
  templateUrl: './product-to-try.component.html',
  styleUrls: ['./product-to-try.component.css']
})
export class ProductToTryComponent implements OnInit {

  products: ProductClass[]=[];

  constructor(private _productService:ProductServiceService) { }

  ngOnInit(): void {
    this._productService.getProduct().subscribe(
      data=>{
        this.products= data
      }
    )
  }

}
