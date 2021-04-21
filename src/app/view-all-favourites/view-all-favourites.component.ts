import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Customer } from '../models/customer';
import { Favourite } from '../models/favourite';
import { FavouriteService } from '../services/favourite.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-view-all-favourites',
  templateUrl: './view-all-favourites.component.html',
  styleUrls: ['./view-all-favourites.component.scss'],
})
export class ViewAllFavouritesComponent implements OnInit {

  currentCustomer: Customer;
  allFavourites: Favourite[];
  favouritesExist: boolean;
  favourited: boolean;

  findFavourite: Favourite[];
  constructor(private sessionService: SessionService, private favouriteService: FavouriteService,
    private router: Router, public alertController: AlertController) { 
    if(this.sessionService.getIsLogin()){
      this.currentCustomer = this.sessionService.getCurrentCustomer();
    }
    this.allFavourites = new Array();
    this.favourited = true;
  }

  ngOnInit() {

    this.favouriteService.retrieveFavouriteByCustomerId(this.currentCustomer.id).subscribe(
      response => {
        this.allFavourites = response;
        console.log(this.allFavourites);
        if(this.allFavourites.length > 0) {
          this.favouritesExist = true;
        } else {
          this.favouritesExist = false;
        }
      }
    )

  }

  ionViewWillEnter() {

    this.favouriteService.retrieveFavouriteByCustomerId(this.currentCustomer.id).subscribe(
      response => {
        this.allFavourites = response;
        console.log(this.allFavourites);
        if(this.allFavourites.length > 0) {
          this.favouritesExist = true;
        } else {
          this.favouritesExist = false;
        }
      }
    )

  }

  goToDeal(index) {
    this.router.navigate(['/viewDeal' , {deal: JSON.stringify(this.allFavourites[index].deal), categoryName: this.allFavourites[index].deal.category.parentCategory.name}]);    
  }

  async onClickUnfavourite(event, index) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Favourite',
      message: 'Are you sure you want to unfavourite ' + this.allFavourites[index].deal.dealName + '?',
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
          handler: () => {
            console.log(this.allFavourites[index].deal.dealId);
            this.favouriteService.retrieveFavouriteByCustomerId(this.currentCustomer.id).subscribe(
              response => {
                this.findFavourite = response.filter(item => item.customer.id == this.currentCustomer.id && item.deal.dealId == this.allFavourites[index].deal.dealId);
        
                if(this.findFavourite.length > 0) {
                  this.favouriteService.deleteFavourite(this.findFavourite[0].favouriteId).subscribe(
                    response => {
                      console.log(response);
                      this.allFavourites.splice(index, 1);

                      if(this.allFavourites.length == 0) {
                        this.favouritesExist = false;
                      }

                  })
                }
            });
            
          }
        }
      ]
    });

    await alert.present();

  }

}
