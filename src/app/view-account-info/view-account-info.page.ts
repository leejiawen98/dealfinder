import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { SessionService } from '../services/session.service';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-view-account-info',
  templateUrl: './view-account-info.page.html',
  styleUrls: ['./view-account-info.page.scss'],
})
export class ViewAccountInfoPage implements OnInit {

  customer: Customer;
  customerId: number;
  
  infoMessage: String;
  errorMessage: String;

  constructor(private router: Router,
    private toastController: ToastController,
    private sessionService: SessionService,
    private customerService: CustomerService,
    public alertController: AlertController) 
  {
    
  }

  ngOnInit() {
    this.customer = this.sessionService.getCurrentCustomer();
  }
 
  refresh(event) {
    this.customerId = this.sessionService.getCurrentCustomer().id;
    this.customerService.retrieveCustomerByCustomerId(this.customerId).subscribe(
      response => {
        this.customer = response;
        this.sessionService.setCurrentCustomer(this.customer);
        this.refreshToast();
      }
    )
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  updateAccountInfo() {
    this.router.navigateByUrl('/update-account-info');
  }

  goBack() {
    this.router.navigateByUrl('tabs/tab3');
  }

  async refreshToast() {
		const toast = await this.toastController.create({
			message: "Page Refreshed",
			duration: 1000
		});
		toast.present();
  }
}
