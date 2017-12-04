import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { OrderService } from "../../order.service";
import { Order } from "../../models/order.model";

@Component({
  selector: 'dmc-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  page: string = 'personalInfo';
  order: Order;
  orderDigitalProducts: boolean = false;
  totalPrice: number;
  personalInfoForm: FormGroup;

  constructor(private orderService: OrderService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.order = this.orderService.getOrder();
    this.totalPrice = this.order.orderTotal | 0;
    this.orderDigitalProducts = this.cartContainsDigitalProduct(this.order);
    let formGroup = {
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', Validators.email]
    };

    if (this.orderDigitalProducts) {
      formGroup = {
        ...formGroup,
        street: ['', Validators.required],
        zipcode: ['', Validators.required],
        city: ['', Validators.required]
      };
    };

    this.personalInfoForm = this.fb.group(formGroup);
  }

  private cartContainsDigitalProduct(order: Order) {
    return order.products.some(product => product.id.startsWith('DIG_'));
  }

  submitForm() {
    this.orderService.updatePersonalInfo(this.personalInfoForm.value);
    this.router
      .navigate(['../summary'], { relativeTo: this.route });
  }
}
