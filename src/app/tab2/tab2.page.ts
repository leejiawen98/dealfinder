import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { BusinessService } from '../services/business.service';
import { Business } from '../models/business';
import { Redemption } from '../models/redemption';
import { RedemptionService } from '../services/redemption.service';
import { Customer } from '../models/customer';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  scannedBusinessId: number;
  business: Business;
  customer: Customer;
  redemptions: Redemption[];

  constructor(private qrScanner: QRScanner,
              private businessService: BusinessService,
              private redemptionService: RedemptionService,
              public sessionService: SessionService,
              public alertController: AlertController,
              private router: Router,
              public loadingCtrl: LoadingController) {

    
    this.customer = this.sessionService.getCurrentCustomer();
  }

  ngOnInIt() {
  }

  ionViewDidEnter()
  {
    this.scan();
  }

  scan()
  {
    // Optionally request the permission early
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        console.log("permission granted!");
        // start scanning
        let ionApp = <HTMLElement>document.getElementById('qrScan');
        ionApp.style.display = 'none';
        this.qrScanner.show();
        let scanSub = this.qrScanner.scan().subscribe(async(text: string) => {
          const loading = await this.loadingCtrl.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
          });
          await loading.present();
          this.scannedBusinessId = Number(text);
          await this.retrieveBusiness();
          this.qrScanner.hide(); // hide camera preview
          ionApp.style.display = 'block';

          let ionHeader = <HTMLElement>document.getElementsByTagName('ion-header')[0];
          ionHeader.style.display = 'block';
          scanSub.unsubscribe(); // stop scanning
          
          loading.dismiss();
          if (!this.redemptions || this.redemptions.length == 0)
          {
            this.presentAlert();
          }
          else
          {
            this.router.navigate(["/view-redeemable",{redemptions: JSON.stringify(this.redemptions), business: JSON.stringify(this.business)}]);
          }
        });
      } else if (status.denied) {
        console.log("permission denied");
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
      } else {
        console.log("permission denied");
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    })
    .catch((e: any) => console.log('Error is', e));
  }

  async retrieveBusiness()
  {
    return new Promise((resolve, reject)=> 
    {this.businessService.retrieveBusinessByBusinessId(this.scannedBusinessId).subscribe(
        async response => {
          this.business = response;
          await this.retrieveRedemptions();
          resolve(this.business);
          console.log(this.business);
        },
        error => {
          console.log("Business not found")
        }
      ); 
    });
  }
  
  async retrieveRedemptions()
  {
    return new Promise((resolve,reject) => { 
      this.redemptionService.retrieveRedemptionsByCustIdandBizId(this.customer.id, this.business.id).subscribe(
        response => {
          this.redemptions = response;
          resolve(this.redemptions);
          console.log(this.redemptions);
        },
        error => {
          console.log("error");
        }
      );
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'No reedemables found for ' + this.business.name,
      subHeader: '',
      message: '',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });
    await alert.present();
  }
  

  ionViewDidLeave()
  {
    this.scannedBusinessId = undefined;
    this.business = undefined;
    this.redemptions = undefined;
    console.log("qr scanner exited");
  }

}
