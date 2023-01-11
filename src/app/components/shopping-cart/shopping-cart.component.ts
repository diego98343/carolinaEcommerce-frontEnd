import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartServiceService } from 'src/app/services/cartService/cart-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {



  cartItems: CartItem[]=[];
  totalPrice: number = 0;
  totalQuantity: number= 0;
  totalPriceWithTaxes: number=0;
 

  constructor( private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }


  updateCartStatus(){

   this.cartItems = this.cartService.cartItems;

   console.log("shooing cart items :" +this.cartItems);

   this.cartService.totalPrice.subscribe(
    data=>{
      this.totalPrice= data
    } 
   )

   this.cartService.totalQuantity.subscribe(
    data=>this.totalQuantity= data
   )


   this.cartService.totalQuantityVWithTaxes.subscribe( data=>{
    this.totalPriceWithTaxes=data;
   })

   this.cartService.computeCartTotals();

  }



  incrementQuantity(cartItem: CartItem) {
    this.cartService.addToCard(cartItem)
    }


  decrementQuantity(cartItem: CartItem){
    this.cartService.decrementQuantity(cartItem)
  }
    



    



}
