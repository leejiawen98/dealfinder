import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAccountInfoPageRoutingModule } from './update-account-info-routing.module';

import { UpdateAccountInfoPage } from './update-account-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAccountInfoPageRoutingModule
  ],
  declarations: [UpdateAccountInfoPage]
})
export class UpdateAccountInfoPageModule {}
