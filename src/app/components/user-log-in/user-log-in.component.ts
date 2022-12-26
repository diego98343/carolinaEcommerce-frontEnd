import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userClass/user';
import { LogINService } from 'src/app/services/logInService/log-in.service';

@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.css']
})
export class UserLogInComponent implements OnInit {

  user:User=new User();

  constructor(private userService:LogINService) { }

  ngOnInit(): void {
    // this.userLogIn();
  }

  // userLogIn(){
  //   this.userService.logInUser(this.user).subscribe(data=>{
  //     alert("log in successfully")
  //   },error=>alert("sorry enter the right password"));
    
  // }

}
