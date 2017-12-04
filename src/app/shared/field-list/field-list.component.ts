import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dmc-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {
  @Input() fields: object[];
  fieldKeys: string[];

  constructor() {
  }

  ngOnInit() {
    this.fieldKeys = Object.keys(this.fields);
  }

}
