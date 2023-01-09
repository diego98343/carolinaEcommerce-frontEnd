import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cartService/cart-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


   totalQuantity: number =0;


  constructor(private _cartService:CartServiceService) { }

  ngOnInit(): void {

    this.updataCartComponent();
  }


updataCartComponent(){
  this._cartService.totalQuantity.subscribe(data=>{
    this.totalQuantity=data;
  })
}
  

}
