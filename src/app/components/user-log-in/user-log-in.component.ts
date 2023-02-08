import { Component, Inject, OnInit } from '@angular/core';
import { User } from 'src/app/models/userClass/user';
import { LogINService } from 'src/app/services/logInService/log-in.service';

import myAppConfig from 'src/app/config/my-app-config';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.css']
})
export class UserLogInComponent implements OnInit {



  user:User=new User();

  oktaSignin:any;


  constructor(private userService:LogINService,
              @Inject(OKTA_AUTH)private oktaAuth:OktaAuth) { }

  ngOnInit(): void {
    // this.userLogIn();
  }

  // userLogIn(){
  //   this.userService.logInUser(this.user).subscribe(data=>{
  //     alert("log in successfully")
  //   },error=>alert("sorry enter the right password"));
    
  // }

}
