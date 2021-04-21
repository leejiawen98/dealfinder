import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewDealPageRoutingModule } from './review-deal-routing.module';

import { ReviewDealPage } from './review-deal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewDealPageRoutingModule
  ],
  declarations: [ReviewDealPage]
})
export class ReviewDealPageModule {}
