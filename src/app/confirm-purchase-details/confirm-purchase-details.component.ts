import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { Business } from '../models/business';
import { Deal } from '../models/deal';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-confirm-purchase-details',
  templateUrl: './confirm-purchase-details.component.html',
  styleUrls: ['./confirm-purchase-details.component.scss'],
  providers: [DatePipe]
})
export class ConfirmPurchaseDetailsComponent implements OnInit {

  @Input() deal: any;

  business: Business;
  startDate: String;
  endDate: String;

  productQuantity: number;
  totalPrice: number;
  actualTotal: number;
  constructor(private route: ActivatedRoute, public datepipe: DatePipe, private navParams: NavParams,
    private modalController: ModalController) {
    this.deal = this.navParams.get('deal');
    console.log(this.deal);
    this.business = this.deal.business;
    this.totalPrice = this.deal.unitPrice;
    this.actualTotal = this.deal.unitPrice;

    this.startDate = this.deal.startDateTime.toString().substring(0,10);
    this.endDate = this.deal.endDateTime.toString().substring(0,10);
    this.productQuantity = 1;

  }

  ngOnInit() {

  }

  decrease() {
    if(this.productQuantity > 1) {
      this.productQuantity --;
      this.totalPrice -= this.actualTotal;
    }
  }

  increase() {
    this.productQuantity ++;
    this.totalPrice += this.actualTotal;

  }

  close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async selectPaymentMethod() {
    const modal = await this.modalController.create({
      component: PaymentComponent,
      cssClass: 'my-custom-modal-class2',
      backdropDismiss:false,
      componentProps: { 
        deal: this.deal,
        totalPrice: this.totalPrice,
        productQuantity: this.productQuantity
      }
    });
    return await modal.present();

  }

}
