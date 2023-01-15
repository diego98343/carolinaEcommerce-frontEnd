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
  totalPriceWithTaxes: number=0;

  constructor(private cartService: CartServiceService,
              private formBuilder: FormBuilder,
     ) { }

  ngOnInit(): void {

    this.updateTotalWithTaxes();

    this.checkOutFormGroup= this.formBuilder.group({
      custumer: this.formBuilder.group({
        name:[''],
        email:[''],
   
      }),
      receiptAddress:this.formBuilder.group({
        address:[''],
        city:[''],
        country:[''],
        zipCode:[''],
      }),
      shippingInfo: this.formBuilder.group({
        address:[''],
        city:[''],
        country:[''],
        zipCode:[''],
        
      }),
      creditCardInfo: this.formBuilder.group({
        creditCardNumber:[''],
        expirationMonth:[''],
        expirationYear:[''],
        securityCode:['']
      })
    }) 
  }


  updateTotalWithTaxes(){
    this.cartService.totalQuantityVWithTaxes.subscribe( data=>{
      this.totalPriceWithTaxes=data;
     })

     this.cartService.computeCartTotals()
  }

  copyShippingAddressToBuildingAddress(event:any) {
     if(event.target?.checked){
      this.checkOutFormGroup.controls['custumer'].setValue(this.checkOutFormGroup.controls['shippingInfo'].value)
     }
    }



  onSubmit(){
    console.log(this.checkOutFormGroup.get('custumer')?.value)
    console.log(this.checkOutFormGroup.get('shippingInfo')?.value)
    console.log(this.checkOutFormGroup.get('creditCardInfo')?.value)
    }


}
