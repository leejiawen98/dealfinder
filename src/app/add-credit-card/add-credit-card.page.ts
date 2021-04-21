import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { CreditCardService } from '../services/credit-card.service';
import { CreditCard } from '../models/credit-card';
import { DatePipe } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.page.html',
  styleUrls: ['./add-credit-card.page.scss'],
  providers: [DatePipe]
})
export class AddCreditCardPage implements OnInit {

  customer: Customer;

  errorMessage: string;

  creditCard: CreditCard;
  ccNum: string;
  cvv: string;
  ccName: string;
  expiryDate: Date;

  constructor(private router: Router,
    private toastController: ToastController,
    private creditCardService: CreditCardService,
    private sessionService: SessionService) {
    this.creditCard = new CreditCard();
  }

  ngOnInit() {
    this.customer = this.sessionService.getCurrentCustomer();
  }

  goBack() {
    this.router.navigate(['/top-up-ewallet']);
  }

  addCreditCard(addCreditCardForm: NgForm) {
    console.log(this.expiryDate);
    this.creditCard.ccNum = this.ccNum;
    this.creditCard.cvv = this.cvv;
    this.creditCard.ccName = this.ccName;
    this.creditCard.expDate = this.expiryDate;
    
    this.customer.password = this.sessionService.getPassword();
    this.creditCardService.createNewCreditCardEntityForCustomer(this.creditCard, this.customer.id).subscribe(
      response => {
        this.successToast();
        this.goBack();
      }, error => {
        this.errorMessage = error;
        this.errorToast();
      }
    )
  }
  
  async successToast() {
    const toast = await this.toastController.create({
      message: "Successfully added new Credit Card!",
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
