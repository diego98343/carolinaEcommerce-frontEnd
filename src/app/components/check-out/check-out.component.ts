import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartServiceService } from 'src/app/services/cartService/cart-service.service';
import { EcommerceValidator } from 'src/app/validator/ecommerce-validator';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {




  checkOutFormGroup!: FormGroup;
  totalPriceWithTaxes: number = 0;
  checkBox: boolean = false;

  constructor(private cartService: CartServiceService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.updateTotalWithTaxes();

    this.checkOutFormGroup = this.formBuilder.group({
      custumer: this.formBuilder.group({
        name: new FormControl('',[ Validators.required,
                                   Validators.minLength(2),
                                   EcommerceValidator.noOnlyWhiteSpace]),
        email: new FormControl('',
                              [ Validators.required,
                                Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
        ),
      }),
      receiptAddress: this.formBuilder.group({
        address: new FormControl('',[Validators.required,
                                     Validators.minLength(5),
                                     EcommerceValidator.noOnlyWhiteSpace]
                                        ),
        city: new FormControl('',[Validators.required,
                                  Validators.minLength(2),
                                  EcommerceValidator.noOnlyWhiteSpace],),

        country: new FormControl('',[Validators.required,
                                     Validators.minLength(2),
                                     EcommerceValidator.noOnlyWhiteSpace]),

        zipCode: new FormControl('',[Validators.required,
                                     Validators.minLength(4),
                                     EcommerceValidator.noOnlyWhiteSpace]),
      }),
      shippingInfo: this.formBuilder.group({
        address: new FormControl('',[Validators.required,
                                     Validators.minLength(6),
                                     EcommerceValidator.noOnlyWhiteSpace]),

        city: new FormControl('',[Validators.required,
                                  Validators.minLength(2),
                                  EcommerceValidator.noOnlyWhiteSpace]),

        country: new FormControl('',[Validators.required,
                                     Validators.minLength(2),
                                     EcommerceValidator.noOnlyWhiteSpace]),

        zipCode: new FormControl('',[Validators.required,
                                     Validators.minLength(4),
                                     EcommerceValidator.noOnlyWhiteSpace]),
      }),
      creditCardInfo: this.formBuilder.group({
        creditCardNumber: new FormControl('',[Validators.required,
                                              Validators.minLength(16),
                                              EcommerceValidator.noOnlyWhiteSpace]),

        expirationMonth: new FormControl('',[Validators.required,
          EcommerceValidator.noOnlyWhiteSpace],),

        expirationYear: new FormControl('',[Validators.required,
                                            EcommerceValidator.noOnlyWhiteSpace]),

        securityCode: new FormControl('',[Validators.required,
                                          Validators.minLength(3),
                                          EcommerceValidator.noOnlyWhiteSpace])
      })
    })
  }

  // custumer get methods  validation 

  get name(){
    return this.checkOutFormGroup.get('custumer.name');
  }
  get email(){
    return this.checkOutFormGroup.get('custumer.email');
  }

//billing address get methods validation 

  get address(){
    return this.checkOutFormGroup.get('receiptAddress.address');
  }
  get city(){
    return this.checkOutFormGroup.get('receiptAddress.city');
  }
  get country(){
    return this.checkOutFormGroup.get('receiptAddress.country');
  }
  get zipCode(){
    return this.checkOutFormGroup.get('receiptAddress.zipCode');  
  }

  //shippping address get mothods validation 
  
  get shippingAddress(){
    return this.checkOutFormGroup.get('shippingInfo.address');
  }
  get shippingCity(){
    return this.checkOutFormGroup.get('shippingInfo.city');
  }
  get shippingCountry(){
    return this.checkOutFormGroup.get('shippingInfo.country');
  }
  get shippingZipCode(){
    return this.checkOutFormGroup.get('shippingInfo.zipCode');
  }

  //credit Cart get method validation 

  get creditCartNumber(){
    return this.checkOutFormGroup.get('creditCardInfo.creditCardNumber');
  }

  get creditCartMonth(){
    return this.checkOutFormGroup.get('creditCardInfo.expirationMonth');
  }

  get creditCartDay(){
    return this.checkOutFormGroup.get('creditCardInfo.expirationYear');
  }

  get creditSecurityCode(){
    return this.checkOutFormGroup.get('creditCardInfo.securityCode');
  }



  //display the total with taxes on the checkout form 
  updateTotalWithTaxes() {
    this.cartService.totalQuantityVWithTaxes.subscribe(data => {
      this.totalPriceWithTaxes = data;
    })

    this.cartService.computeCartTotals()
  }


  //copy billing address info feature
  copyShippingAddressToBillingAddress(event: any) {
    console.log(event.target.checked)


    if (event.target.checked) {
      console.log(this.checkOutFormGroup.controls['receiptAddress'].value)
      this.checkOutFormGroup.controls['receiptAddress'].setValue(this.checkOutFormGroup.controls['shippingInfo'].value);
      console.log(this.checkOutFormGroup.controls['shippingInfo'].value);
    }
    else {
      this.checkOutFormGroup.controls['receiptAddress'].reset();
    }
  }

  //function that runs when checkout form botton is clicked 
  onSubmit() {

    if(this.checkOutFormGroup.invalid){
      this.checkOutFormGroup.markAllAsTouched();
    }
    console.log(this.checkOutFormGroup.get('custumer')?.value)
    console.log(this.checkOutFormGroup.get('receiptAddress')?.value)
    console.log(this.checkOutFormGroup.get('shippingInfo')?.value)
    console.log(this.checkOutFormGroup.get('creditCardInfo')?.value)
    console.log(this.checkBox);
  }


}
