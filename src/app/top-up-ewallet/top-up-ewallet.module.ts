import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopUpEwalletPageRoutingModule } from './top-up-ewallet-routing.module';

import { TopUpEwalletPage } from './top-up-ewallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopUpEwalletPageRoutingModule
  ],
  declarations: [TopUpEwalletPage]
})
export class TopUpEwalletPageModule {}
