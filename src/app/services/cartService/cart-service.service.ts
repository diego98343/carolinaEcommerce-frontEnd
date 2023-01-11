import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from 'src/app/common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cartItems: CartItem[] =[];

  totalPrice: Subject<number> =new Subject<number>();
  totalQuantity:Subject<number>= new Subject<number>();
  totalQuantityVWithTaxes:Subject<number>= new Subject<number>();

  constructor() { }



  addToCard(cartItem:CartItem){

    console.log(this.totalPrice);

    //chenck if we have the item in the cart

    let alreadyExistInCart:boolean=false;
    let existingCartItem: CartItem= undefined!;

    if(this.cartItems.length>0){
      
      // we are looping thr all the items in the cartItems Array 
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id ===cartItem.id)!
      //check if we found the product 
      alreadyExistInCart = (existingCartItem != undefined);
    }
    
    if(alreadyExistInCart){
      // increment the quantity
      existingCartItem.quantity++;

    }else {

      this.cartItems.push(cartItem);
      
    }

   //compute cart totral price and total quantity
    this.computeCartTotals();
    
  }

  computeCartTotals() {
   
   let totalPriceValue: number = 0;
   let totalQuantityValue: number =0;
   let totalValueWithTax: number =0;

   for(let currentCartItem of this.cartItems){
    

    console.log('content of the cart')

    totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice!;
    totalQuantityValue += currentCartItem.quantity;

    let totalTax = (totalPriceValue/100)*18

    totalValueWithTax = totalPriceValue + totalTax;

    console.log('total price'+ totalPriceValue);
    console.log('total quantity'+ totalQuantityValue);
    console.log('total items'+ this.cartItems);
   }

   this.totalQuantityVWithTaxes.next(totalValueWithTax);
   this.totalPrice.next(totalPriceValue);
   this.totalQuantity.next(totalQuantityValue);


   
     //publish the new values .... all subscribers will receive the new data 

     





     

  }


}
