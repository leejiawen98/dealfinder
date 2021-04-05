import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotLoginComponent } from '../not-login/not-login.component';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public sessionService: SessionService, public modalController: ModalController) {

  }

  async clickTab3() {
    if(this.sessionService.getIsLogin() == false || this.sessionService.getIsLogin() == undefined) {
      const modal = await this.modalController.create({
        component: NotLoginComponent,
        cssClass: 'my-custom-modal-class'
      });
      return await modal.present();
    }
  }
}
