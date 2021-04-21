import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Business } from '../models/business';
import { Deal } from '../models/deal';
import { DealService } from '../services/deal.service';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { ReviewService } from '../services/review.service';
import { Review } from '../models/review';
import { ConfirmPurchaseDetailsComponent } from '../confirm-purchase-details/confirm-purchase-details.component';
import { SessionService } from '../services/session.service';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { AddFavDealsReq } from '../models/add-fav-deals-req';
import { FavouriteService } from '../services/favourite.service';
import { Favourite } from '../models/favourite';
@Component({
  selector: 'app-view-deal',
  templateUrl: './view-deal.component.html',
  styleUrls: ['./view-deal.component.scss'],
  providers: [DatePipe]
})
export class ViewDealComponent implements OnInit {

  deal: Deal;
  dealBusiness: Business;
  showMore: boolean;
  endDate: string;
  date: string ;
  numOfBusinessDeal: number;
  allDeal: Deal[];
  dealReviews: Review[];
  reviewExist: boolean;
  businessReview: number;
  parentCatName: string;
  favouriteExist: boolean;
  currentLoginCustomer: Customer;
  checkCustomer: Favourite[]; 
  totalRating: number = 0;
  
  findFavourite: Favourite[];

  constructor(private route: ActivatedRoute, private router: Router, public datepipe: DatePipe, 
    private dealService: DealService, public loadingController: LoadingController, 
    private reviewService: ReviewService, private modalController: ModalController, 
    private sessionService: SessionService,public alertController: AlertController,
    private customerService: CustomerService, private favouriteService: FavouriteService) { 

    this.deal = JSON.parse(this.route.snapshot.paramMap.get("deal"));
    this.parentCatName = this.route.snapshot.paramMap.get("categoryName");
    console.log(this.parentCatName)
    this.dealBusiness = this.deal.business;
    this.showMore = false;
    this.date = this.deal.endDateTime.toString().substring(0,10);
    this.allDeal = new Array();
    this.numOfBusinessDeal = 0;
    this.dealReviews = new Array();
    this.reviewExist = false;
    this.checkCustomer = new Array();
    
    if(this.sessionService.getIsLogin() == true) {
      this.currentLoginCustomer = this.sessionService.getCurrentCustomer();
    }
  }

  ngOnInit() {
    this.dealService.getAllDeals().subscribe(
      response => {
        this.allDeal = response;
        this.getLength();
    }),
    error => {
      console.log('********** ViewDeal.ts: ' + error);
    };

    this.reviewService.getAllReviews().subscribe(
      response => {
        this.dealReviews = response.filter(item => item.deal.dealId == this.deal.dealId);
        this.checkReviewExist(this.dealReviews);
        console.log(this.dealReviews);

        if(this.dealReviews.length == 0 ) {
          this.totalRating = 0;
        } else {
          for(var x = 0; x < this.dealReviews.length; x++) {
            this.totalRating += this.dealReviews[x].dealRating;
          }
          this.totalRating = this.totalRating / this.dealReviews.length;
        }
    })
  this.checkFavourite();
  }

  checkReviewExist(rArr: Review[]) {
    if(rArr.length != 0) {
      this.reviewExist = true;
    } else {
      this.reviewExist = false;
    }
  }

  getLength() {
    for (var x = 0; x < this.allDeal.length; x++) {
      if(this.allDeal[x].business.id == this.dealBusiness.id) {
        this.numOfBusinessDeal = this.numOfBusinessDeal + 1;
      }
    }
  }
  IonViewWillEnter() {

    this.getNumberOfBusinessDeal();
    this.checkFavourite();

  }

  checkFavourite() {
    if(this.sessionService.getIsLogin()) {

      this.favouriteService.retrieveFavouriteByCustomerId(this.currentLoginCustomer.id).subscribe(
        response => {
          console.log(response);
          this.checkCustomer = response.filter(item => item.deal.dealId == this.deal.dealId && item.customer.id == this.currentLoginCustomer.id);
          if(this.checkCustomer.length > 0) {
            this.favouriteExist = true;
          } else {
            this.favouriteExist = false;
          }
        }
      )

    } else {
      this.favouriteExist = false;
    }
    console.log(this.favouriteExist);
  }

  async favouriteDeals() {
    console.log(this.sessionService.getIsLogin());
    if(this.sessionService.getIsLogin() == true) {
      console.log(this.favouriteExist);
      if(this.favouriteExist == false) {

        this.favouriteService.getAllFavourites().subscribe(
          response => {
            let count = response.length;
            let favourite: Favourite = new Favourite(count, new Date());

            this.favouriteService.createNewFavourite(this.currentLoginCustomer.id, favourite, this.deal.dealId).subscribe(
              response => {
                console.log(response);
                this.sessionService.getCurrentCustomer().favourites.push();
              }
            )

          }
        )

        this.favouriteExist = true;

      } else {

        this.favouriteService.retrieveFavouriteByCustomerId(this.currentLoginCustomer.id).subscribe(
          response => {
            this.findFavourite = response.filter(item => item.customer.id == this.currentLoginCustomer.id && item.deal.dealId == this.deal.dealId);

            if(this.findFavourite.length > 0) {
              this.favouriteService.deleteFavourite(this.findFavourite[0].favouriteId).subscribe(
                response => {
                  this.favouriteExist = false;
                  console.log(response);
              })
            }
        });
      }
    } else {
        const alert = await this.alertController.create({
          header: 'Unable to favourite.',
          message: 'Please login or register to favourite a deal.',
          buttons: ['OK']
        });
    
        await alert.present();
    }

      
  }

  removeArray(arr: Deal[]) {

    for( var i = 0; i < arr.length; i++){                                
      if ( arr[i].dealId === this.deal.dealId) { 
          arr.splice(i, 1); 
          i--; 
      }
    }
    return arr;
  }

  getNumberOfBusinessDeal(){
    this.dealService.getAllDeals().subscribe(
      response => {
        this.allDeal = response;
    }),
    error => {
      console.log('********** ViewDeal.ts: ' + error);
    },
    () => {
      for (var x = 0; x < this.allDeal.length; x++) {
        console.log("x: " + this.allDeal[x].business.id);
        console.log(this.dealBusiness.id);
        if(this.allDeal[x].business.id == this.dealBusiness.id) {
          this.numOfBusinessDeal = this.numOfBusinessDeal + 1;
        }
      }
    };
  }

  async purchaseDeal() {

    if(this.sessionService.getIsLogin() == false) {

        const alert = await this.alertController.create({
          header: 'Unable to purchase.',
          message: 'Please login or register to purchase a deal.',
          buttons: ['OK']
        });
    
        await alert.present();
    } else {

      const modal = await this.modalController.create({
        component: ConfirmPurchaseDetailsComponent,
        backdropDismiss:false,
        componentProps: { 
          deal: this.deal
        }
      });
      return await modal.present();

     }

  }

}
