import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { Tab1Page } from './tab1/tab1.page';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewDealComponent } from './view-deal/view-deal.component';

import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { NotLoginComponent } from './not-login/not-login.component';
import { FormsModule } from '@angular/forms';
import { RegisterPage } from './register/register.page';
import { MyAccountComponent } from './my-account/my-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewCategoryComponent,
    ViewDealComponent,
    PurchaseComponent,
    NotLoginComponent,
    LoginComponent,
    RegisterPage,
    MyAccountComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, QRScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}
