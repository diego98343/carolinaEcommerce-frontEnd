import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderItems } from 'src/app/models/orderitems/order-items';
import { OrderService } from 'src/app/services/orderService/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {


  orderItems:OrderItems[]=[];


  constructor( public orderItemsService:OrderService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOrderItemsByOrderId()
  }


  
   getOrderItemsByOrderId(){


    const orderId = +this.route.snapshot.paramMap.get('id');

   this.orderItemsService.getAllOrderItemsByOrderId(orderId).subscribe(
    data=>{

      this.orderItems=data;
      console.log(this.orderItems);
   })
  
  }





}
