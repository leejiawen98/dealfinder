import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { CustomerService } from '../services/customer.service';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-update-account-info',
  templateUrl: './update-account-info.page.html',
  styleUrls: ['./update-account-info.page.scss'],
})
export class UpdateAccountInfoPage implements OnInit {

  newCustomer: Customer;

  errorMessage: string;

  constructor(private router: Router,
    private toastController: ToastController,
    private customerService: CustomerService,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.newCustomer = this.sessionService.getCurrentCustomer();
    this.newCustomer.password = this.sessionService.getPassword();
  }

  goBack() {
    this.router.navigateByUrl('/view-account-info');
  }

  clear() {
    this.newCustomer = new Customer();
    this.errorMessage = null;
  }

  updateAccountInfo(updateAccountInfoForm: NgForm) {
    if (updateAccountInfoForm.valid) {
      this.customerService.updateCustomer(this.newCustomer).subscribe(
        response => {
          this.successToast();
          this.goBack();
        }, error => {
          this.errorMessage = "Updating Account Info Failed!";
          console.log(error);
          this.errorToast();
        }
      )
    } else {
      this.errorMessage = "Update Account Form Inputs are not Valid!";
      this.errorToast();
    }
  }

  async successToast() {
    const toast = await this.toastController.create({
      message: "Successfully updated account details!",
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
