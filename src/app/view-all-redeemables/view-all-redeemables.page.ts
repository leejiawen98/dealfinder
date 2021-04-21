import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { RedemptionService } from '../services/redemption.service';
import { Redemption } from '../models/redemption';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-redeemables',
  templateUrl: './view-all-redeemables.page.html',
  styleUrls: ['./view-all-redeemables.page.scss'],
})
export class ViewAllRedeemablesPage implements OnInit {

  redemptions: Redemption[];
  activeRedemptions: Redemption[] = [];
  redeemed: Redemption[] = [];

  constructor(private sessionService: SessionService,
              private redemptionService: RedemptionService,
              public router: Router) 
              {}

  ngOnInit() {
  }

  goScan()
  {
    this.router.navigate(["/tabs/tab2"]);
  }

  ionViewWillEnter()
  {
    let custId = this.sessionService.getCurrentCustomer().id;
    this.redemptionService.retrieveRedemptionByCustomerId(custId).subscribe ( response => {
      this.redemptions = response;
      console.log(this.redemptions);
      for (let r of this.redemptions)
      {
        console.log(r);
        if (r.redeemed)
        {
          this.redeemed.push(r);
        }
        else
        {
          this.activeRedemptions.push(r)
        }
      }
    })
  }

}
