import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRedeemablePage } from './view-redeemable.page';

const routes: Routes = [
  {
    path: '',
    component: ViewRedeemablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRedeemablePageRoutingModule {}
