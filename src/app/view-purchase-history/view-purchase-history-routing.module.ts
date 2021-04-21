import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPurchaseHistoryPage } from './view-purchase-history.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPurchaseHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPurchaseHistoryPageRoutingModule {}
