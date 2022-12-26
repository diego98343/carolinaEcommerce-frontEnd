import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { User } from 'src/app/models/userClass/user';
import { UserRegistration } from 'src/app/models/userRegistrationClass/user-registration';
import { UserRegisService } from 'src/app/services/userRegistrationService/user-regis.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {



  registerForm!: FormGroup;


//  user: UserRegistration = new FormControl();




  constructor(  private formBuilder: FormBuilder,
                private userService: UserRegisService) { }

  ngOnInit(): void {

   this.userForm();

  }


  userForm(){
    this.registerForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      address:['',Validators.required],
      phoneNumber:['',Validators.required],
      passWord:['',Validators.required]
     });
    
  }



  addUser() {
    
    if(confirm("Has sido registrado"))
    this.userService.addUser(this.registerForm.value).subscribe(
    (data: User)=>{
      console.log(data)
    }
    )

    }

}
