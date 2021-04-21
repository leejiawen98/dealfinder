import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deal } from '../models/deal';
import { SaleTransaction } from '../models/sale-transaction';
@Component({
  selector: 'app-view-sale-transaction',
  templateUrl: './view-sale-transaction.page.html',
  styleUrls: ['./view-sale-transaction.page.scss'],
})
export class ViewSaleTransactionPage implements OnInit {

  saleTransaction: SaleTransaction;
  deal: Deal;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.saleTransaction = JSON.parse(this.route.snapshot.paramMap.get("saleTransaction"));
    this.deal = this.saleTransaction.deal;
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/view-purchase-history');
  }

  redeemDeal() {

    this.router.navigate(['/redeem-deal' , {deal: JSON.stringify(this.deal)}]);

  }
  reviewDeal() {

    this.router.navigate(['/review-deal' , {deal: JSON.stringify(this.deal)}]);

  }


}
