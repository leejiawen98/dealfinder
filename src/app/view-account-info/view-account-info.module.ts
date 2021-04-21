import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAccountInfoPageRoutingModule } from './view-account-info-routing.module';

import { ViewAccountInfoPage } from './view-account-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAccountInfoPageRoutingModule
  ],
  declarations: [ViewAccountInfoPage]
})
export class ViewAccountInfoPageModule {}
