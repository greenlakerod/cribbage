import { Component } from '@angular/core';
import {UserService} from '../../../app/services'; //import {UserService} from '../adminShared/user.service'; 
import { Router } from '@angular/router';


@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  username: string;
  email: string;
  password1: string;
  password2: string;
  passwordDoesNotMatch: boolean = false;
  registrationFailed: boolean = false;
  registrationFailedReason: string;

  constructor(private userService: UserService, private router: Router){}

  signUp(){
    this.registrationFailed = false;
    this.registrationFailedReason = "";
    
    if (this.password1 !== this.password2) {
      this.passwordDoesNotMatch = true;
    } else {
      this.passwordDoesNotMatch = false;
      this.userService.register(this.username, this.email, this.password1)
        .then((user) => {
          this.registrationFailed = false;
          this.registrationFailedReason = "";
          this.userService.verifyUser(user);
        })
        .catch((error) => {
          this.registrationFailed = true;
          this.registrationFailedReason = error.message || error;
        });
    }
  }

  cancel(){
    this.router.navigate(['/admin/login']);
  }
  
 }
