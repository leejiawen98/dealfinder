import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelect, ModalController } from '@ionic/angular';
import { Deal } from '../models/deal';
import { Tag } from '../models/tag';
import { NotLoginComponent } from '../not-login/not-login.component';
import { DealService } from '../services/deal.service';
import { SessionService } from '../services/session.service';
import { TagService } from '../services/tag.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [DatePipe]
})
export class Tab1Page {

  @ViewChild('mySelect') selectRef: IonSelect;

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
  buffer: boolean;
  allTags: Tag[];
  selectedTagNames: string[];
  selectedTags: number[];
  selectedTagsDeals: Deal[] = new Array();

  constructor(private router: Router, private dealService: DealService, public sessionService: SessionService, 
    private modalController: ModalController, public datePipe: DatePipe, public tagService: TagService) {
    this.allDeals = new Array();
    this.searchedDeals = new Array();

    this.dealService.getAllDeals().subscribe(
      response => {
        this.allDeals = response.filter(item => new Date(item.startDateTime.toString().substr(0,10)) <= new Date() && new Date(item.endDateTime.toString().substr(0,10)) >= new Date() && item.enabled == true);
        this.selectedTagsDeals = this.allDeals;
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
    this.selectedTagNames = new Array();
    this.selectedTags = new Array();
    this.allTags = new Array();
    
    this.getTags();
    console.log(this.sessionService.getIsLogin());
    if(this.sessionService.getIsLogin()) {
      console.log(this.sessionService.getCurrentCustomer());
    }
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

  getTags() {
    this.tagService.retrieveAllTags().subscribe( 
      response => {
        this.allTags = response;
      }
    )
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

  filterDeals(event) {
     console.log(this.selectedTags);

     if(this.selectedTags.length != 0) {
       this.dealService.filterDealByTagId(this.selectedTags).subscribe(
         response => {
           this.selectedTagsDeals = response;
           console.log(this.selectedTagsDeals);
         }
       )
      } else {
        this.selectedTagsDeals = this.allDeals;
      }

  }

  goToDeal(index) {
    this.router.navigate(['/viewDeal' , {deal: JSON.stringify(this.searchedDeals[index])}]);
  }

  goToDealMain(index) {
    this.router.navigate(['/viewDeal' , {deal: JSON.stringify(this.allDeals[index]), categoryName: this.allDeals[index].category.parentCategory.name}]);
  }
  async clickFavourites() {
    if(this.sessionService.getIsLogin() == false) {
      const modal = await this.modalController.create({
        component: NotLoginComponent,
        cssClass: 'my-custom-modal-class',
        backdropDismiss:false
      });
      return await modal.present();
    } else {
      this.goToFavourite();
    }
  }

  goToFavourite() {
    this.router.navigate(['/viewAllFavourites']);
  }

  async clickFilter() {
    this.selectRef.open();
  }
}
