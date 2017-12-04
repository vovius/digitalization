import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dmc-cart-progress',
  templateUrl: './cart-progress.component.html',
  styleUrls: ['./cart-progress.component.scss']
})
export class CartProgressComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() name: string;
  @Input() totalPrice: number;
  @Input() progressValue: number;
  @Input() progressTotal: number;
  @Output() submit = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  submitForm() {
    this.submit.emit();
  }
}
