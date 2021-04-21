import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAccountInfoPage } from './view-account-info.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAccountInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAccountInfoPageRoutingModule {}
