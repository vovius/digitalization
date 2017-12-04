import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms'

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CouponSelectorComponent } from './coupon-selector/coupon-selector.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { InputComponent } from './form/input/input.component';
import { CartProgressComponent } from './cart-progress/cart-progress.component';
import { ThankYouComponent } from "./thank-you/thank-you.component";
import { FieldListComponent } from './field-list/field-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    BreadcrumbComponent,
    CartProgressComponent,
    CouponSelectorComponent,
    FieldListComponent,
    ProgressBarComponent,
    InputComponent,
    ThankYouComponent
  ],
  declarations: [
    BreadcrumbComponent,
    CartProgressComponent,
    CouponSelectorComponent,
    FieldListComponent,
    InputComponent,
    ProgressBarComponent,
    ThankYouComponent
  ]
})
export class SharedModule {
}
