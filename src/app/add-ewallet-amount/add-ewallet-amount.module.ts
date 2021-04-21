import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEwalletAmountPageRoutingModule } from './add-ewallet-amount-routing.module';

import { AddEwalletAmountPage } from './add-ewallet-amount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEwalletAmountPageRoutingModule
  ],
  declarations: [AddEwalletAmountPage]
})
export class AddEwalletAmountPageModule {}
