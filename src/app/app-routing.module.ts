import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddCreditCardPage } from './add-credit-card/add-credit-card.page';
import { ConfirmPurchaseDetailsComponent } from './confirm-purchase-details/confirm-purchase-details.component';

import {LoginComponent} from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { NotLoginComponent } from './not-login/not-login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterPage } from './register/register.page';
import { ReviewDealPage } from './review-deal/review-deal.page';
import { TopUpEwalletPage } from './top-up-ewallet/top-up-ewallet.page';
import { UpdateAccountInfoPage } from './update-account-info/update-account-info.page';
import { ViewAccountInfoPage } from './view-account-info/view-account-info.page';
import { ViewAllFavouritesComponent } from './view-all-favourites/view-all-favourites.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewDealComponent } from './view-deal/view-deal.component';
import { ViewPurchaseHistoryPage } from './view-purchase-history/view-purchase-history.page';
import { ViewSaleTransactionPage } from './view-sale-transaction/view-sale-transaction.page';

const routes: Routes = [
  {path: '',
   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
},
  {path:'viewCategory', component: ViewCategoryComponent},
  {path:'viewDeal', component: ViewDealComponent},
  {path: 'notLogin', component: NotLoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterPage},
  {path: 'myAccount', component: MyAccountComponent},
  {path: 'view-account-info', component:ViewAccountInfoPage},
  {path: 'update-account-info', component:UpdateAccountInfoPage},
  {path: 'view-purchase-history', component:ViewPurchaseHistoryPage},
  {path: 'top-up-ewallet', component:TopUpEwalletPage},
  {path: 'confirmPurchaseDetails', component: ConfirmPurchaseDetailsComponent},
  {path: 'payment', component:PaymentComponent},
  {path: 'viewAllFavourites', component: ViewAllFavouritesComponent},
  
  {path: 'add-credit-card', component:AddCreditCardPage},
  // {path: 'addEwalletAmount', component: AddEwalletAmountPage},
   {path: 'review-deal', component: ReviewDealPage},
  {path: 'view-sale-transaction', component: ViewSaleTransactionPage},
  // {path: 'chooseTag', component: ChooseTagComponent}

  {
    path: 'view-redeemable',
    loadChildren: () => import('./view-redeemable/view-redeemable.module').then( m => m.ViewRedeemablePageModule)
  },
  {
    path: 'confirmed-redeemable',
    loadChildren: () => import('./confirmed-redeemable/confirmed-redeemable.module').then( m => m.ConfirmedRedeemablePageModule)
  },
  {
    path: 'view-all-redeemables',
    loadChildren: () => import('./view-all-redeemables/view-all-redeemables.module').then( m => m.ViewAllRedeemablesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
