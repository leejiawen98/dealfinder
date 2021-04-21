import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewRedeemablePageRoutingModule } from './view-redeemable-routing.module';

import { ViewRedeemablePage } from './view-redeemable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRedeemablePageRoutingModule
  ],
  declarations: [ViewRedeemablePage]
})
export class ViewRedeemablePageModule {}
