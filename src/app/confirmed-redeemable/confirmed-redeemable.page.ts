import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Business } from '../models/business';
import { Redemption } from '../models/redemption';

@Component({
  selector: 'app-confirmed-redeemable',
  templateUrl: './confirmed-redeemable.page.html',
  styleUrls: ['./confirmed-redeemable.page.scss'],
})
export class ConfirmedRedeemablePage implements OnInit {

  businessName: String;
  redemption: Redemption;
  today = Date.now();

  constructor(private route: ActivatedRoute,
              private router: Router
    ) { 
    this.route.params.subscribe(params => {
      this.redemption = JSON.parse(params['redemption']);
      this.businessName = JSON.parse(params['businessName']);
      console.log(this.redemption);
   })
  }

  ngOnInit() {
  }

  goHome()
  {
    this.router.navigate(["/tabs/tab1"]);
  }

  reviewDeal() {

    this.router.navigate(['/review-deal' , {deal: JSON.stringify(this.redemption.deal)}]);

  }

}
