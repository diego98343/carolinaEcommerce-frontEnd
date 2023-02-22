import { Component, OnInit } from '@angular/core';
import { OrderItems } from 'src/app/common/order-items';
import { CustomerClass } from 'src/app/models/customerClass/customer-class';
import { OrderClass } from 'src/app/models/orderClass/order-class';
import { OrderService } from 'src/app/services/orderService/order.service';

@Component({
  selector: 'app-list-of-orders',
  templateUrl: './list-of-orders.component.html',
  styleUrls: ['./list-of-orders.component.css']
})
export class ListOfOrdersComponent implements OnInit {

  orders: OrderClass[]=[];

  ordersFromCustomers;

  customers: CustomerClass[];

  

  constructor( private _orderService:OrderService) { }

  ngOnInit(): void {
    // this.displayOrders();
    this.displayCustomer();
    this.displayOrders();
  }

  displayOrders() {
    this._orderService.getOrder().subscribe(
      data=>{
        this.orders=data;
        console.log(this.orders)
      }
    )
  }

  displayCustomer(){
    this._orderService.getAllCustomer().subscribe(
      data=>{
       
         this.customers =data;
        
         

         //retrieve list of orders and then create another page with router id to retrieve the order items for each order

        //  let orders: OrderClass[]=[];

        //  for(let i =0; this.customers.length; i++){
        //    this.customers[i].orders =orders;
        //  }

        //  let orderitems: OrderItems[]=[];

        //  for(let i =0; orders.length; i++){
        //   this.orders[i].orderitems = orderitems;
        //  }

        //  console.log(orderitems);
      }
    )
  }

}
