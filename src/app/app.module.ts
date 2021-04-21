import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Tab1Page } from './tab1/tab1.page';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewDealComponent } from './view-deal/view-deal.component';

import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { NotLoginComponent } from './not-login/not-login.component';
import { FormsModule } from '@angular/forms';
import { RegisterPage } from './register/register.page';
import { MyAccountComponent } from './my-account/my-account.component';
import { UpdateAccountInfoPage } from './update-account-info/update-account-info.page';
import { ViewAccountInfoPage } from './view-account-info/view-account-info.page';
import { TopUpEwalletPage } from './top-up-ewallet/top-up-ewallet.page';
import { ConfirmPurchaseDetailsComponent } from './confirm-purchase-details/confirm-purchase-details.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewAllFavouritesComponent } from './view-all-favourites/view-all-favourites.component';
import { ViewPurchaseHistoryPage } from './view-purchase-history/view-purchase-history.page';
import { AddCreditCardPage } from './add-credit-card/add-credit-card.page';
import { AddEwalletAmountPage } from './add-ewallet-amount/add-ewallet-amount.page';
import { ReviewDealPage } from './review-deal/review-deal.page';
import { ViewSaleTransactionPage } from './view-sale-transaction/view-sale-transaction.page';
import { StarRatingModule } from 'ionic5-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewCategoryComponent,
    ViewDealComponent,
    NotLoginComponent,
    LoginComponent,
    RegisterPage,
    MyAccountComponent,
    UpdateAccountInfoPage,
    ViewAccountInfoPage,
    TopUpEwalletPage,
    ConfirmPurchaseDetailsComponent,
    PaymentComponent,
    ViewAllFavouritesComponent,
    LoginComponent,
    RegisterPage, 
    ViewAccountInfoPage,
    ViewPurchaseHistoryPage, // Not tested
    AddCreditCardPage,
    AddEwalletAmountPage,
    ReviewDealPage, // Not Tested
    TopUpEwalletPage,
    UpdateAccountInfoPage,
    ViewPurchaseHistoryPage, // Not tested
    ViewSaleTransactionPage // Not tested


  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule, AppRoutingModule, HttpClientModule, StarRatingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, QRScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}
