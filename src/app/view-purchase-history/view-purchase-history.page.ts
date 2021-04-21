import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customer';
import { SessionService } from '../services/session.service';
import { SaleTransaction } from '../models/sale-transaction';
import { SaleTransactionService } from '../services/sale-transaction.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-view-purchase-history',
  templateUrl: './view-purchase-history.page.html',
  styleUrls: ['./view-purchase-history.page.scss'],
})
export class ViewPurchaseHistoryPage implements OnInit {

  customer: Customer;
  saleTransactions: SaleTransaction[];

  isEmpty : Boolean;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router,
    private saleTransactionService: SaleTransactionService,
    private sessionService: SessionService,
    private toastController: ToastController) {
      this.customer = this.sessionService.getCurrentCustomer();
      this.isEmpty = true;
    
      this.saleTransactionService.retrieveSaleTransactionDealByCustomerId(this.customer.id).subscribe(
        response => {
          this.saleTransactions = response;
          if (this.saleTransactions.length > 0) {
            this.isEmpty = false;
          } 
                   console.log("Number of Sale Transaction: " + this.saleTransactions.length);
        }, error => {
          this.errorMessage = "Could not retrieve Customer Sale Transactions";
          this.errorToast();
          console.log(error);
          this.goBack();
        }
      )
      console.log(this.customer);
  }

  ngOnInit() {

  }

  goBack() {
    this.router.navigateByUrl('tabs/tab3');
  }

  mainmenu() {
    this.router.navigateByUrl('tabs/tab1');
  }

  viewSaleTransactionDetails(index) {
    this.router.navigate(['view-sale-transaction', { saleTransaction: JSON.stringify(this.saleTransactions[index]) }]);
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: this.errorMessage,
      duration: 3000
    });

    toast.present();

  }
}
