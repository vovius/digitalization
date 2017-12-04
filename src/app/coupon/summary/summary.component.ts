import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../order.service";
import { Order } from "../../models/order.model";
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'dmc-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  page: string = 'summary';
  order: Order;
  totalPrice: number;
  personalInfoKeys: string[];
  formFields: object;
  summaryForm = this.fb.group({
    couponTemplate: ['', Validators.required]
  });

  constructor(private orderService: OrderService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.order = this.orderService.getOrder();
    this.totalPrice = this.order.orderTotal | 0;
    this.formFields = this.createFields();
  }

  createFields() {
    return {
      ...this.order.personalInfo,
      totalPrice: this.totalPrice
    };
  }

  submitForm() {
    this.orderService.placeOrder();
    // Start payment
  }
}
