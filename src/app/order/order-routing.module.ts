import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from "./order.component";
import { CartComponent } from "./cart/cart.component";
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { SummaryComponent } from "./summary/summary.component";
import { MediumTypeComponent } from "./medium-type/medium-type.component";
import { MediumTypesComponent } from "./medium-types/medium-types.component";

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cart'
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'personal-info',
        component: PersonalInfoComponent
      },
      {
        path: 'types',
        component: MediumTypesComponent
      },
      {
        path: 'types/:id',
        component: MediumTypeComponent
      },
      {
        path: 'summary',
        component: SummaryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}

export const routableComponents = [
  CartComponent,
  SummaryComponent,
  PersonalInfoComponent,
  MediumTypesComponent,
  MediumTypeComponent,
  OrderComponent
];
