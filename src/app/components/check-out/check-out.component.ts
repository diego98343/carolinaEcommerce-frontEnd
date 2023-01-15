import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartServiceService } from 'src/app/services/cartService/cart-service.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {



  checkOutFormGroup!: FormGroup;

  constructor(private cartService: CartServiceService,
    private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.checkOutFormGroup= this.formBuilder.group({
      custumer: this.formBuilder.group({
        name:[''],
        email:['']
      }),
      shippingInfo: this.formBuilder.group({
        address:[''],
        city:[''],
        country:[''],
        zipCode:[''],
        
      })
    })
  }


  onSubmit(){
    console.log(this.checkOutFormGroup.get('custumer')?.value)
    console.log(this.checkOutFormGroup.get('shippingInfo')?.value)
    }



}
