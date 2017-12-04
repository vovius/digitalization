import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CONFIG } from './config';

import { Product } from "./models/product.model";
import { PersonalInfo } from "./models/personal-info.model";
import { Order } from "./models/order.model";

const productUrl = CONFIG.baseUrls.products;
const orderUrl = CONFIG.baseUrls.orders;
const couponUrl = CONFIG.baseUrls.coupon;

@Injectable()
export class OrderService {

  order: Order;

  constructor(private http: Http,
              // private exceptionService: ExceptionService)
  ) {
    this.order = new Order();
  }

  addProduct(product: Product) {
    // Todo: check if product exists, than add amount of the product in order
    this.order.products.push(product);
    console.log('added product to order:', this.order.products);
  }

  updatePersonalInfo(personalInfo: PersonalInfo) {
    console.log('updating personal info:', personalInfo);
    this.order.personalInfo = personalInfo;
  }

  getOrder() {
    return this.order;
  }

  getProducts() {
    return <Observable<Product[]>>this.http
      .get(productUrl)
      .map(res => this.extractData<Product[]>(res));
  }

  placeOrder() {
    console.log('Placing this order:', this.order);
    return <Observable<Product>>this.http
      .post(orderUrl, this.order)
      .map(res => res.json().data)
  }

  private

  extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  }

}
