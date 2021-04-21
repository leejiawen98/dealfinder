import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSaleTransactionPageRoutingModule } from './view-sale-transaction-routing.module';

import { ViewSaleTransactionPage } from './view-sale-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSaleTransactionPageRoutingModule
  ],
  declarations: [ViewSaleTransactionPage]
})
export class ViewSaleTransactionPageModule {}
