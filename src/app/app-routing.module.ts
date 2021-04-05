import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { NotLoginComponent } from './not-login/not-login.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RegisterPage } from './register/register.page';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewDealComponent } from './view-deal/view-deal.component';

const routes: Routes = [
  {path: '',
   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
},
  {path:'viewCategory', component: ViewCategoryComponent},
  {path:'viewDeal', component: ViewDealComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'notLogin', component: NotLoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterPage},
  {path: 'myAccount', component: MyAccountComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
