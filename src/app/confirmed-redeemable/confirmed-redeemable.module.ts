import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmedRedeemablePageRoutingModule } from './confirmed-redeemable-routing.module';

import { ConfirmedRedeemablePage } from './confirmed-redeemable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmedRedeemablePageRoutingModule
  ],
  declarations: [ConfirmedRedeemablePage]
})
export class ConfirmedRedeemablePageModule {}
