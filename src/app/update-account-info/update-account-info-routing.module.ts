import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAccountInfoPage } from './update-account-info.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAccountInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAccountInfoPageRoutingModule {}
