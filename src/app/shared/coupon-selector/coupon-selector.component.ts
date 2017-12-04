import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'dmc-coupon-selector',
  templateUrl: './coupon-selector.component.html',
  styleUrls: ['./coupon-selector.component.scss']
})
export class CouponSelectorComponent {
  @Input() coupons: [number];
  @Input() formGroup: FormGroup;
  @Output() onSelectCoupon = new EventEmitter<number>();

  get invalid() {
    return (
      this.formGroup.get('coupon').hasError('required') && this.formGroup.get('coupon').touched
    );
  }

  select(coupon) {
    this.onSelectCoupon.emit(coupon);
  }

}
