import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController, NavController } from '@ionic/angular';
import { Redemption } from '../models/redemption';
import { RedemptionService } from '../services/redemption.service';
import { SessionService } from '../services/session.service';
import { Business } from '../models/business';

@Component({
  selector: 'app-view-redeemable',
  templateUrl: './view-redeemable.page.html',
  styleUrls: ['./view-redeemable.page.scss'],
})
export class ViewRedeemablePage implements OnInit {

  business: Business;
  redemptions: Redemption[];

  constructor(private route: ActivatedRoute,
              public navCtrl: NavController,
              public location: Location,
              public router: Router,
              public alertController: AlertController,
              private redemptionService: RedemptionService,
              public sessionService: SessionService,) { 

    this.route.params.subscribe(params => {
      this.redemptions = JSON.parse(params['redemptions']);
      this.business = JSON.parse(params['business']);
      console.log(this.business);
   })
  } 

  ngOnInit() {
  }

  ionViewCanEnter()
  {
  }

  goBack()
  {
    this.router.navigateByUrl('tabs/tab1');
  }

  async redeem(r: Redemption) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm redemption?',
      subHeader: '',
      message: 'Are you sure you want to redeem?',
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
          handler: async () => {
            this.confirmRedeem(r);
            //await this.retrieveRedemptions();
            this.router.navigate(["/confirmed-redeemable", {redemption: JSON.stringify(r), businessName: this.business.name}]);
          }
        }
      ]
    });

    await alert.present();
  }

  async confirmRedeem(r: Redemption)
  {
    r.redeemed = true;
    return new Promise((resolve, reject) => {
        this.redemptionService.updateRedemption(r).subscribe (
        response => {
          resolve(response);
          console.log("update done");
        });
    });
  }

  async retrieveRedemptions()
  {
    let custId = this.sessionService.getCurrentCustomer().id;

    return new Promise((resolve,reject) => { 
      this.redemptionService.retrieveRedemptionsByCustIdandBizId(custId, this.business.id).subscribe(
        response => {
          this.redemptions = response;
          resolve(this.redemptions);
        },
        error => {
          console.log("error");
        }
      );
    });
  }
}
