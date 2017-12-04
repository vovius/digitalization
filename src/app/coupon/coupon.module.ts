import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';

import { CouponRoutingModule, routableComponents } from './coupon-routing.module';

import { SummaryComponent } from './summary/summary.component';
import { CouponTemplateSelectorComponent } from './coupon-template-selector/coupon-template-selector.component';

@NgModule({
  imports: [
    CommonModule,
    CouponRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    routableComponents,
    SummaryComponent,
    CouponTemplateSelectorComponent
  ]
})
export class CouponModule {
}
