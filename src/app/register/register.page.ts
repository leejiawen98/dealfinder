import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  newCustomer : Customer;
  customer: Customer;

  errorMessage: string;

  constructor(private router: Router,
              private customerService: CustomerService,
              private toastController: ToastController) 
  { 
    this.newCustomer = new Customer();
  }

  ngOnInit() {
  }

  registerNewCustomer(createCustomerForm: NgForm) {
    this.newCustomer.eWalletAmount = 0;
    if (createCustomerForm.valid) {
      this.customerService.createNewCustomer(this.newCustomer).subscribe(
        response => {
          this.successToast();
          this.router.navigate(["/login"]); 
        },
        error => {
          this.errorMessage = "Register New Customer Failed!";
          console.log(error);
          this.errorToast();
        }

      ); 
    } else {
      this.errorMessage = "Create Customer Form Inputs are not valid!";
      this.errorToast();
    }
  } 

  clear() {
    this.newCustomer = new Customer();
  }
  
  goBack() {
    this.router.navigateByUrl('tabs/tab1');
  }

  async successToast() {
    const toast = await this.toastController.create({
      message: "Registered Successfully!",
      duration: 2000
    });

    toast.present();

  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: this.errorMessage,
      duration: 2000
    });

    toast.present();

  }
}
