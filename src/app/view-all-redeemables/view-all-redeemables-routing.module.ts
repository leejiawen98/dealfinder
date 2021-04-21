import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllRedeemablesPage } from './view-all-redeemables.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllRedeemablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllRedeemablesPageRoutingModule {}
