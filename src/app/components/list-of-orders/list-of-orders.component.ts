import { Component, OnInit } from '@angular/core';
import { OrderClass } from 'src/app/models/orderClass/order-class';
import { OrderService } from 'src/app/services/orderService/order.service';

@Component({
  selector: 'app-list-of-orders',
  templateUrl: './list-of-orders.component.html',
  styleUrls: ['./list-of-orders.component.css']
})
export class ListOfOrdersComponent implements OnInit {

  orders: OrderClass[]=[];

  constructor( private _orderService:OrderService) { }

  ngOnInit(): void {
    this.displayOrders();
  }

  displayOrders() {
    this._orderService.getOrder().subscribe(
      data=>{
        this.orders=data;
        console.log(this.orders);
      }
    )
  }

}
