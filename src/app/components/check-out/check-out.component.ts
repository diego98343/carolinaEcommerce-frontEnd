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
                                     Validators.minLength(5)]
                                        ),
        city: new FormControl('',[Validators.required,
                                  Validators.minLength(2)]),

        country: new FormControl('',[Validators.required,
                                     Validators.minLength(2)]),

        zipCode: new FormControl('',[Validators.required,
                                     Validators.minLength(4)]),
      }),
      shippingInfo: this.formBuilder.group({
        address: new FormControl('',[Validators.required,
                                     Validators.minLength(6)]),

        city: new FormControl('',[Validators.required,
                                  Validators.minLength(2)]),

        country: new FormControl('',[Validators.required,
                                     Validators.minLength(2)]),

        zipCode: new FormControl('',[Validators.required,
                                     Validators.minLength(4)]),
      }),
      creditCardInfo: this.formBuilder.group({
        creditCardNumber: new FormControl('',[Validators.required,
                                              Validators.minLength(16)]),

        expirationMonth: new FormControl('',[Validators.required]),

        expirationYear: new FormControl('',[Validators.required]),

        securityCode: new FormControl('',[Validators.required,
                                          Validators.minLength(3)])
      })
    })
  }

  
  get name(){
    return this.checkOutFormGroup.get('custumer.name');
  }
  get email(){
    return this.checkOutFormGroup.get('custumer.email');
  }



  updateTotalWithTaxes() {
    this.cartService.totalQuantityVWithTaxes.subscribe(data => {
      this.totalPriceWithTaxes = data;
    })

    this.cartService.computeCartTotals()
  }
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
