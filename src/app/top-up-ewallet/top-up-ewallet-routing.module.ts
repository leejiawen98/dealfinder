import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopUpEwalletPage } from './top-up-ewallet.page';

const routes: Routes = [
  {
    path: '',
    component: TopUpEwalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopUpEwalletPageRoutingModule {}
