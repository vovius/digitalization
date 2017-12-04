import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Breadcrumb } from '../../models';

@Component({
  selector: 'dmc-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnChanges {
  @Input() currentUrl: string;
  @Input() breadcrumbs: Array<Breadcrumb>;
  currentBreadcrumbs: Array<Breadcrumb>;

  constructor() {
  }

  ngOnInit() {
    this.setBreadcrumb();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setBreadcrumb();
  }

  private setBreadcrumb() {
    if (this.currentUrl) {
      const index = this.findBreadcrumb(this.currentUrl) + 1;
      this.currentBreadcrumbs = this.breadcrumbs.slice(0, index);
    }
  }

  private findBreadcrumb(breadcrumb: string) {
    return this.breadcrumbs.findIndex(crumb => crumb.link === breadcrumb);
  }

}
