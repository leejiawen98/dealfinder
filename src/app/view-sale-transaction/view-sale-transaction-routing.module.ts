import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSaleTransactionPage } from './view-sale-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSaleTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSaleTransactionPageRoutingModule {}
