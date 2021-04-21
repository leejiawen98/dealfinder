import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllRedeemablesPageRoutingModule } from './view-all-redeemables-routing.module';

import { ViewAllRedeemablesPage } from './view-all-redeemables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllRedeemablesPageRoutingModule
  ],
  declarations: [ViewAllRedeemablesPage]
})
export class ViewAllRedeemablesPageModule {}
