import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewDealPage } from './review-deal.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewDealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewDealPageRoutingModule {}
