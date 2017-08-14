import { Component } from '@angular/core';
import {UserService} from '../../../app/services'; //import {UserService} from '../adminShared/user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 })
 
export class LoginComponent { 
  email: string;
  password1: string;
  
  constructor(private userService: UserService, private router: Router){}

  login(){
    this.userService.login(this.email, this.password1)
      .then((user) => {
        this.userService.verifyUser(user);
      })
      .catch((error) => {
        alert("Unable to login. Please try again.");
      });
  }

  signup(){
    this.router.navigate(['/admin/signup']);
  }

  cancel(){
    this.router.navigate(['']);
  }



}