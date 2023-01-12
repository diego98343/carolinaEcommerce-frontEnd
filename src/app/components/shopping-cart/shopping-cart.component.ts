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
  totalTaxes:number=0;
  productQuantityTextInput:number=0;



  discountPercentage: number=0;
  discountCode: string="";
  discountValidation: string="";
  discounts={
    code1:"carolina30",
    code2:"carolina20"
  }
  

 

  constructor( private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.updateCartStatus();
    
  }

  applyDiscount(){


    // for(let i=0; this.discounts; i++){
    //   this.discounts.[i]
    // }

    if(this.discountCode === this.discounts.code1){
        this.discountPercentage = 30;
        console.log('you have a '+"% " + this.discountPercentage )  
        
    }else{

     this.discountValidation ="no code found"

     }

     
    if (this.discountPercentage > 0){

      this.totalPriceWithTaxes = this.totalPriceWithTaxes - (this.totalPriceWithTaxes* this.discountPercentage)/100;
      
     }
  }
  


  updateCartStatus(){

   this.cartItems = this.cartService.cartItems;


    this.cartService.totalPrice.subscribe(
      data=>{
        this.totalPrice= data
      } 
     )


     console.log("sadasdas" + this.totalPrice)
   

  

   this.cartService.totalQuantity.subscribe(
    data=> this.totalQuantity= data
   )


   this.cartService.totalTax.subscribe(
    data=>{
      this.totalTaxes=data;
    }
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
  

  discountCodeInput(){
    console.log(this.discountCode)

    console.log('total discount: '+ this.discountPercentage)

    console.log(this.discounts.code1)
  }



}
