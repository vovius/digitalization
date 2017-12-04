import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { Breadcrumb } from '../models';

@Component({
  selector: 'dmc-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {
  currentUrl: string;
  title: string;
  page: string;
  // TODO: move this somewhere else (in routes?)
  breadcrumbs: [Breadcrumb] = [
    { name: 'Übersicht', link: '/coupon/cart' },
    { name: 'Persöliche Angaben', link: '/coupon/personal-info' },
    { name: 'Vorschau', link: '/coupon/summary' }
  ];

  constructor(private location: Location,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.setPageData();
  }

  ngOnInit() {
  }

  private setPageData() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        this.title = event['title'];
        this.page = event['page'];
        this.currentUrl = this.location.path();
      });
  }
}
