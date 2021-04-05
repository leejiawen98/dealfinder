import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Customer } from '../models/customer';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  customer: Customer;

  constructor(private router: Router, public sessionService: SessionService, private alertCtrl: AlertController) {

    if (this.sessionService.getIsLogin) {
      this.customer = this.sessionService.getCurrentCustomer();
    }
  }

  viewAccountInfo() {
    console.log("Navigate to View Account Info Page");
    this.router.navigate(["/view-account-info"]);
  }

  viewPurchaseHistory() {
    console.log("Navigate to View Purchase History Page");
    this.router.navigate(["/view-purchase-history"]);
  }

  async customerLogout() {
    const alert = await this.alertCtrl.create({
      header: 'Logout',
      message: 'Do you wish to logout?',
      buttons: [
        {
          text: 'Agree',
          role: 'agree',
          handler: () => {
            this.sessionService.setIsLogin(false);
            this.sessionService.setCurrentCustomer(null);
            this.router.navigateByUrl('tabs/tab1');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await alert.present();
  }
}
