import { Product } from "./product.model";

export class Coupon extends Product {
  personalMessage: string;
  template: string;

  constructor(price: number, personalMessage: string) {
    super('coupon_' + price, 'coupon_'+price, price);
    this.personalMessage = personalMessage;
  }
}
