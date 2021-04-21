import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { CreateRedemptionReq } from '../models/create-redemption-req';
import { Customer } from '../models/customer';
import { Deal } from '../models/deal';
import { Redemption } from '../models/redemption';
import { SaleTransaction } from '../models/sale-transaction';
import { CustomerService } from '../services/customer.service';
import { RedemptionService } from '../services/redemption.service';
import { SaleTransactionService } from '../services/sale-transaction.service';
import { SessionService } from '../services/session.service';
import Big from 'big.js';
import { DealService } from '../services/deal.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [DatePipe]
})
export class PaymentComponent implements OnInit {
  
  currentCustomer: Customer;
  deal: Deal;
  totalQuantity: number;
  totalPrice: number;
  createRedemption: CreateRedemptionReq;

  constructor(private sessionService: SessionService, private navParams: NavParams,
    public alertController: AlertController, private modalController: ModalController,
    private redemptionService: RedemptionService, private customerService: CustomerService,
    private saleTransactionService: SaleTransactionService, private router: Router,
    public datePipe: DatePipe, private dealService: DealService) { 
      this.deal = this.navParams.get('deal');
      this.totalPrice = this.navParams.get('totalPrice');
      this.totalQuantity = this.navParams.get('productQuantity');
      this.currentCustomer = this.sessionService.getCurrentCustomer();
      
  }

  ngOnInit() {

  }

  async selectedEWallet() {
    if(this.currentCustomer.eWalletAmount < this.totalPrice) {
          const alert = await this.alertController.create({
          header: 'Unable to purchase.',
          message: 'You do not have sufficient amount in your e-wallet.',
          buttons: ['OK']
        });
    
        await alert.present();
    } else {

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Purchase',
        message: 'Are you sure you want to purchase '+ this.totalQuantity + "x " + this.deal.dealName + " at $" + this.totalPrice + '?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Yes',
            handler: () => {
              
              this.redemptionService.retrieveAllRedemptions().subscribe(
                async response => {
                  let newRedemption: Redemption = new Redemption(response.length + 1, false);
                  console.log(JSON.stringify(newRedemption));
                  let c: Customer = this.currentCustomer;

                  c.eWalletAmount -= this.totalPrice;
                  this.sessionService.setCurrentCustomer(c);
                  console.log("Customer information:" + JSON.stringify(this.currentCustomer));
                  this.currentCustomer.password = this.sessionService.getPassword();
                   this.customerService.updateCustomer(this.currentCustomer).subscribe(
                     response => {
                       console.log(response);
                     }
                   )
                   for(var x = 0; x < this.totalQuantity; x++) {
                     this.redemptionService.createNewRedemption(this.currentCustomer.id, newRedemption, this.deal.dealId).subscribe(
                       response => {
                         console.log(response);
                       });
                   }

                  
      
                   const alertPurchaseConfirmed = await this.alertController.create({
                    header: 'Payment Succeed',
                    message: 'You have successfully purchase the deals.',
                    buttons: [
                      {
                        text: 'OK',
                        role: 'ok',
                        handler: () => {
                          this.modalController.dismiss({
                            'dismissed': true
                          });
                          
                        }
                      }
                    ]
                  });
      
                  await alertPurchaseConfirmed.present();
      
                   this.saleTransactionService.retrieveAllSaleTransactions().subscribe(
                     response => {
                       let count = response.length;
                       let date: Date = new Date();
                       let currentDate: string;
                       currentDate = this.datePipe.transform(date, 'dd/MM/yyyy');
                       console.log(currentDate);
                        let saleTransaction: SaleTransaction = new SaleTransaction(count + 1, this.deal.unitPrice , this.totalPrice, new Date() , this.totalQuantity);
                        console.log(saleTransaction);
                       this.saleTransactionService.createNewSaleTransaction(saleTransaction, this.currentCustomer.id, this.deal.dealId).subscribe(
                         response => {
                           console.log(response);
                         }
                       )

                       this.currentCustomer.eWalletAmount += this.totalPrice * 0.002;
                       this.customerService.updateCustomer(this.currentCustomer).subscribe(
                         response => {
                           console.log(response);
                         }
                       )
      
                     }
                   )
                  //  this.dealService.updateDealQuantity(this.deal.dealId, this.totalQuantity).subscribe(
                  //    response =>{
                  //      console.log(response);
                  //    }
                  //  )
      
                }
               )

              
            }
          }
        ]
      });
  
      await alert.present();

  
    }
  }

  async selectedCreditCard() {
    if(this.currentCustomer.creditCard == null) {
          const alert = await this.alertController.create({
          header: 'Unable to purchase.',
          message: 'You have not input your credit card details.',
          buttons: ['OK']
        });
    
        await alert.present();
    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Purchase',
        message: 'Are you sure you want to purchase '+ this.totalQuantity + "x " + this.deal.dealName + " at $" + this.totalPrice + '?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Yes',
            handler: () => {
              
              this.redemptionService.retrieveAllRedemptions().subscribe(
                async response => {
                  let newRedemption: Redemption = new Redemption(response.length + 1, false);
                  console.log(JSON.stringify(newRedemption));
                  let c: Customer = this.currentCustomer;

                  c.eWalletAmount -= this.totalPrice;
                  this.sessionService.setCurrentCustomer(c);
                  console.log("Customer information:" + JSON.stringify(this.currentCustomer));
                  this.currentCustomer.password = this.sessionService.getPassword();
                   this.customerService.updateCustomer(this.currentCustomer).subscribe(
                     response => {
                       console.log(response);
                     }
                   )
                   for(var x = 0; x < this.totalQuantity; x++) {
                     this.redemptionService.createNewRedemption(this.currentCustomer.id, newRedemption, this.deal.dealId).subscribe(
                       response => {
                         console.log(response);
                       });
                   }
      
                   const alertPurchaseConfirmed = await this.alertController.create({
                    header: 'Payment Succeed',
                    message: 'You have successfully purchase the deals.',
                    buttons: [
                      {
                        text: 'OK',
                        role: 'ok',
                        handler: () => {
                          this.modalController.dismiss({
                            'dismissed': true
                          });
                          
                        }
                      }
                    ]
                  });
      
                  await alertPurchaseConfirmed.present();
      
                   this.saleTransactionService.retrieveAllSaleTransactions().subscribe(
                     response => {
                       let count = response.length;
                       let date: Date = new Date();
                       let currentDate: string;
                       currentDate = this.datePipe.transform(date, 'dd/MM/yyyy');
                       console.log(currentDate);
                        let saleTransaction: SaleTransaction = new SaleTransaction(count + 1, this.deal.unitPrice , this.totalPrice, new Date() , this.totalQuantity);
                        console.log(saleTransaction);
                       this.saleTransactionService.createNewSaleTransaction(saleTransaction, this.currentCustomer.id, this.deal.dealId).subscribe(
                         response => {
                           console.log(response);
                         }
                       )

                       this.currentCustomer.eWalletAmount += this.totalPrice * 0.002;
                       this.customerService.updateCustomer(this.currentCustomer).subscribe(
                         response => {
                           console.log(response);
                         }
                       )
      
                     }
                   )

                }
               )

              
            }
          }
        ]
      });
  
      await alert.present();
    }
  }

  close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
