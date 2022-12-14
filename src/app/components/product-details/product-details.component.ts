import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/models/productClass/product';
import { CartServiceService } from 'src/app/services/cartService/cart-service.service';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


 product!:Product;



  constructor(private productService: ProductService,
              private route:ActivatedRoute,
              private cartService:CartServiceService,
              private _router:Router) { }

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
        // console.log(this.product)
      }
    )
  }


  addProductToCart(product:Product) {


  
    const cartItem = new CartItem(product);

    if(confirm("quieres añardir este producto al carrito?"))

    this.cartService.addToCard(cartItem);
    this._router.navigateByUrl("/products")



    }

    



}
