import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { Customer } from '../models/customer';
import { SessionService } from '../services/session.service';
import { AddEwalletAmountPage } from '../add-ewallet-amount/add-ewallet-amount.page';
import { AddCreditCardPage } from '../add-credit-card/add-credit-card.page';
import { CustomerService } from '../services/customer.service';
import { CreditCardService } from '../services/credit-card.service';
import { CreditCard } from '../models/credit-card';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-top-up-ewallet',
  templateUrl: './top-up-ewallet.page.html',
  styleUrls: ['./top-up-ewallet.page.scss'],
  providers: [DatePipe]

})
export class TopUpEwalletPage implements OnInit {

  customer: Customer;
  customerId: number;
  creditCard: CreditCard;
  selectedSegment: String;

  expiryDate : string;

  constructor(private router: Router,
    public datepipe: DatePipe,
    public customerService: CustomerService,
    public sessionService: SessionService,
    public creditCardService: CreditCardService,
    private modalController: ModalController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.customer = this.sessionService.getCurrentCustomer();
    this.selectedSegment = "ewallet";
    this.creditCardService.retrieveCreditCardByCustomerId(this.customer.id).subscribe(
      response => {
        this.creditCard = response;
        this.expiryDate = this.creditCard.expDate.toString().substr(0,7);
      }
    )
  }

  ionViewWillEnter() {
    console.log("original" + this.creditCard.expDate);

    this.creditCardService.retrieveCreditCardByCustomerId(this.customer.id).subscribe(
      response => {
        this.creditCard = response;
        this.expiryDate = this.creditCard.expDate.toString().substr(0,7);
        console.log("transform " + this.expiryDate);        
      }
    )
  }

  refresh(event) {
    this.customerId = this.sessionService.getCurrentCustomer().id;
    this.customerService.retrieveCustomerByCustomerId(this.customerId).subscribe(
      response => {
        this.customer = response;
        this.sessionService.setCurrentCustomer(this.customer);
      }
    )
    this.creditCardService.retrieveCreditCardByCustomerId(this.customer.id).subscribe(
      response => {
        this.creditCard = response;
        this.expiryDate = this.creditCard.expDate.toString().substr(0,7);
      }
    )
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  goBack() {
    this.router.navigateByUrl('tabs/tab3');
  }

  goToAddCreditCard() {
    this.router.navigateByUrl('/add-credit-card');
  }

  async updateCreditCard() {
    if (this.sessionService.getIsLogin() == true) {
      const modal = await this.modalController.create({
        component: AddCreditCardPage,
        /* cssClass: 'my-custom-modal-class',*/
        backdropDismiss: false
      });
      modal.onDidDismiss().then((data) => {
        this.refresh(event);
      });
      return await modal.present();
    } else {
      console.log("update credit card error");
    }
  }

  async clickTopUp() {
    if (this.sessionService.getIsLogin() == true) {
      const modal = await this.modalController.create({
        component: AddEwalletAmountPage,
        /* cssClass: 'my-custom-modal-class',*/
        backdropDismiss: false
      });
      modal.onDidDismiss().then((data) => {
        this.refresh(event);
      });
      return await modal.present();
    } else {
      console.log("something");
    }
  }

  async refreshToast() {
    const toast = await this.toastController.create({
      message: "Page Refreshed",
      duration: 1000
    });
    toast.present();
  }
}
