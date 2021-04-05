import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';

import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  submitted : boolean;
  username : string;
  password : string;
  loginError: boolean;
  infoMessage : string;
  errorMessage : string;

  constructor(private router: Router,
              public sessionService: SessionService,
              private customerService: CustomerService)
  {
    this.loginError = false;  
    this.submitted = false;
  }

  ngOnInit() {
  }

  clear() {
    this.username = "";
    this.password = "";
    this.infoMessage = null;
    this.errorMessage = null;
  }

  customerLogin(customerLoginForm: NgForm) {
    this.submitted = true;

    if (customerLoginForm.valid) {
      this.sessionService.setUsername(this.username);
      this.sessionService.setPassword(this.password);
      
      this.customerService.customerLogin(this.username, this.password).subscribe(
        response => {										
          let customer: Customer = response;
          
          if(customer != null)
          {
            console.log(customer);
            this.sessionService.setIsLogin(true);
            this.sessionService.setCurrentCustomer(customer);	
            this.loginError = false;				
            this.infoMessage = "Login Successfully."
            this.router.navigateByUrl('tabs/tab1');
          }
          else
          {
            this.loginError = true;
            this.infoMessage = "Login Failed."
          }
        },
        error => {
          this.loginError = true;
          this.errorMessage = error
        }
      );
    } else {

    }
  }

  register() {
    console.log("Navigate to Register page");
    this.router.navigate(["/register"]);
  }

  goBack() {
    this.router.navigateByUrl('tabs/tab1');
  }

}
