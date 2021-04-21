import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPurchaseHistoryPageRoutingModule } from './view-purchase-history-routing.module';

import { ViewPurchaseHistoryPage } from './view-purchase-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPurchaseHistoryPageRoutingModule
  ],
  declarations: [ViewPurchaseHistoryPage]
})
export class ViewPurchaseHistoryPageModule {}
