import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CustomerClass } from 'src/app/models/customerClass/customer-class';
import { OrderService } from 'src/app/services/orderService/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  profileJson: string=null;

  customerEmail: string="soniavera38@hotmail.com";

  customer:CustomerClass[]=[];


  constructor(public auth: AuthService,
              public orderService: OrderService) { }

  ngOnInit(): void {

    this.auth.user$.subscribe(
      data=>{
      this.profileJson = JSON.stringify(data,null,2)
      console.log(this.profileJson)
    })

    this.getCustomerByEmail();

  }


  getCustomerByEmail(){

    this.orderService.getCustomerByEmail(this.customerEmail).subscribe(
      data=>{
         this.customer =data;
         console.log(this.customerEmail)
         console.log(this.customer)
    })
  }

  


}
