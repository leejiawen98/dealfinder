import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NumericValueAccessor, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { SessionService } from '../services/session.service';
import { Customer } from '../models/customer';


@Component({
  selector: 'app-add-ewallet-amount',
  templateUrl: './add-ewallet-amount.page.html',
  styleUrls: ['./add-ewallet-amount.page.scss'],
})
export class AddEwalletAmountPage implements OnInit {

  amount: number;
  errorMessage : string;

  customerId : number;
  customer: Customer;

  constructor(private router: Router, 
              public modalController: ModalController,
              private toastController: ToastController,
              private customerService: CustomerService,
              public sessionService: SessionService) 
  { 

  }

  ngOnInit() {
    this.customerId = this.sessionService.getCurrentCustomer().id;
    this.customerService.retrieveCustomerByCustomerId(this.customerId).subscribe(
      response => {
        this.customer = response;
      }
    )  
  }

  topUpEwallet(topUpForm: NgForm) {
    if (topUpForm.valid) {
      console.log(this.customer.eWalletAmount);

      this.customer.password = this.sessionService.getPassword();
      this.customer.eWalletAmount = (this.customer.eWalletAmount * 1) + (this.amount * 1);     
      this.customerService.updateCustomer(this.customer).subscribe(
        response => {			
          console.log(this.customer.eWalletAmount);

          this.successToast();
          this.closeMenu();
        }, error => {
          this.errorMessage = error;
          this.errorToast();
        }
      )
      this.modalController.dismiss({
        'dismissed': true
      }); 
    } else {
      console.log("Error topping up wallet");
      
      this.errorMessage = "Error topping up wallet";
      this.errorToast();
    }
     
  }

  closeMenu() {
    this.modalController.dismiss({
      'dismissed': true
    });
    this.router.navigate(['/top-up-ewallet']);
  }

  async successToast() {
    const toast = await this.toastController.create({
      message: "Top Up Successful!",
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
