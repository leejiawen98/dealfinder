import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';

import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { SessionService } from '../services/session.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  customer : Customer;
  username : string;
  password : string;

  errorMessage : string;

  constructor(private router: Router,
              public sessionService: SessionService,
              private customerService: CustomerService,
              private toastController: ToastController)
  {

  }

  ngOnInit() {
  }

  clear() {
    this.username = "";
    this.password = "";
    this.errorMessage = null;
  }

  customerLogin(customerLoginForm: NgForm) {
    if (customerLoginForm.valid) {
      this.sessionService.setUsername(this.username);
      this.sessionService.setPassword(this.password);      
      this.customerService.customerLogin(this.username, this.password).subscribe(
        response => {										
          let customer: Customer = response;          
          if(customer != null)
          {            
            this.sessionService.setIsLogin(true);
            this.sessionService.setCurrentCustomer(customer);	

            console.log("Username: " + this.sessionService.getUsername());
            console.log("Password: " + this.sessionService.getPassword());
            console.log(this.sessionService.getCurrentCustomer());

            this.successToast();
            this.goBack();
            
          }
          else
          {
            this.errorMessage = "Customer does not exist!";
            this.errorToast();
          }
        },
        error => {
          this.errorMessage = "Customer Login Failed";
          console.log(error);
          this.errorToast();
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


  async successToast() {
    const toast = await this.toastController.create({
      message: "Successfully logged in!",
      duration: 2000
    });

    toast.present();

  }
  async errorToast() {
    const toast = await this.toastController.create({
      message: this.errorMessage,
      duration: 3000
    });

    toast.present();

  }
}
