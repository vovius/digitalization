import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { InfoComponent } from "./info/info.component";
import { ErrorComponent } from "./error/error.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landing'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'coupon',
    loadChildren: 'app/coupon/coupon.module#CouponModule',
    data: {
      preload: true
    }
  },
  {
    path: 'order',
    loadChildren: 'app/order/order.module#OrderModule',
    data: {
      preload: true
    }
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routableComponents = [
  LandingComponent,
  InfoComponent,
  ErrorComponent
];
