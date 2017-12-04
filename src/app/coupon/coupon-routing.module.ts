import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CouponComponent } from './coupon.component';
import { CartComponent } from './cart/cart.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SummaryComponent } from "./summary/summary.component";
import { ThankYouComponent } from "../shared/thank-you/thank-you.component";

const routes: Routes = [
  {
    path: '',
    component: CouponComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cart'
      },
      {
        path: 'cart',
        component: CartComponent,
        data: {
          'title': 'Übersicht',
          'page': 'cart'
        }
      },
      {
        path: 'personal-info',
        component: PersonalInfoComponent,
        data: {
          'title': 'Persöliche Angaben',
          'page': 'personalInfo'
        }
      },
      {
        path: 'summary',
        component: SummaryComponent,
        data: {
          'title': 'Vorschau',
          'page': 'summary'
        }
      },
      {
        path: 'success',
        component: ThankYouComponent,
        data: { 'title': 'Coupon has been ordered' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponRoutingModule {
}

export const routableComponents = [
  CouponComponent,
  CartComponent,
  PersonalInfoComponent,
  SummaryComponent
];
