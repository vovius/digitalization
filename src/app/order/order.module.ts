import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { OrderRoutingModule, routableComponents } from './order-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule
  ],
  declarations: [
    routableComponents
  ]
})
export class OrderModule { }
