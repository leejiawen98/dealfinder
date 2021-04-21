import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEwalletAmountPage } from './add-ewallet-amount.page';

const routes: Routes = [
  {
    path: '',
    component: AddEwalletAmountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEwalletAmountPageRoutingModule {}
