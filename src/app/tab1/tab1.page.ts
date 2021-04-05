import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Deal } from '../models/deal';
import { NotLoginComponent } from '../not-login/not-login.component';
import { DealService } from '../services/deal.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  allDeals: Deal[];
  searchedDeals: Deal[];
  existSearch: Boolean;
  searchVal: string;

  constructor(private router: Router, private dealService: DealService, public sessionService: SessionService, private modalController: ModalController) {
    this.allDeals = new Array();
    this.searchedDeals = new Array();

    this.dealService.getAllDeals().subscribe(
      response => {
        this.allDeals = response;
      },
      error => {
        console.log('********** ViewCategory.ts: ' + error);
      },
      () => {
        console.log(this.allDeals);
      }
    );
    this.searchVal = '';
    this.existSearch = false;
  }

  ngOnInIt() {

    this.dealService.getAllDeals().subscribe(
      response => {
        this.allDeals = response;
      },
      error => {
        console.log('********** ViewCategory.ts: ' + error);
      },
      () => {
        console.log(this.allDeals);
      }
    );
  }

  moveToViewCategory(id) {
    this.router.navigate(['/viewCategory' , {categoryId: id}]);
  }

  _ionChange(event) {
    console.log(event.detail.value);
    this.searchVal = event.detail.value;
    this.searchedDeals = this.allDeals;
  
    if(this.searchVal && this.searchVal.trim() != '') {
      this.searchedDeals = this.searchedDeals.filter((item: any) => {
        return (item.dealName.toLowerCase().indexOf(this.searchVal.toLowerCase()) > -1);
      })
      console.log(this.searchedDeals);
    }
  }
  goToDeal(index) {
    this.router.navigate(['/viewDeal' , {deal: JSON.stringify(this.searchedDeals[index])}]);
  }
  async clickFavourites() {
    if(this.sessionService.getIsLogin() == false) {
      const modal = await this.modalController.create({
        component: NotLoginComponent,
        cssClass: 'my-custom-modal-class'
      });
      return await modal.present();
    }
  }

}
