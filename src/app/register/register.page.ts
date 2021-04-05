import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  newCustomer : Customer;
  customer: Customer;

  submitted : boolean;
  infoMessage : string;
  errorMessage : string;

  constructor(private router: Router,
              private customerService: CustomerService) 
  { 
    this.newCustomer = new Customer();
    this.submitted = false;

  }

  ngOnInit() {
  }

  registerNewCustomer(createCustomerForm: NgForm) {
    this.submitted = true;
    
    console.log(this.newCustomer);
    this.newCustomer.eWalletAmount = 0;
    if (createCustomerForm.valid) {
      this.customerService.createNewCustomer(this.newCustomer).subscribe(
        response => {
          this.infoMessage = "New customer account successfully created with ID: " + response;
          this.router.navigate(["/login"]); 
        },
        error => {
          this.infoMessage = null;
          this.errorMessage = error;
        }

      ); 
    } else {

    }
  } 

  clear() {
    this.newCustomer = new Customer();
    this.submitted = false;
    this.errorMessage = null;
  }
}
