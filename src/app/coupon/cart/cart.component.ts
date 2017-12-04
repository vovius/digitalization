import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from "../../order.service";
import { Coupon } from "../../models/coupon.model";
import { FormBuilder, Validators } from '@angular/forms';
import { Order } from "../../models/order.model";

@Component({
  selector: 'dmc-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  page: string = 'cart';
  personalMessageMaxLength: number = 300;
  coupons: [number] = [80, 100, 150, 200];
  order: Order;
  totalPrice: number = 0;
  selectedCoupon: number;
  personalMessage: string;

  cartForm = this.fb.group({
    coupon: ['', Validators.required],
    personalMessage: ['', Validators.required]
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private orderService: OrderService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.order = this.orderService.getOrder();
  }

  onSelectCoupon(coupon: number) {
    this.selectedCoupon = coupon;
    this.totalPrice = coupon;
  }

  submitForm() {
    const coupon = new Coupon(this.cartForm.value.coupon, this.cartForm.value.personalMessage);
    this.orderService.addProduct(coupon);
    this.router.navigate(['../personal-info'], { relativeTo: this.route });
  }
}
