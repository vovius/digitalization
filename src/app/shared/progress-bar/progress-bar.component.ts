import { Component, Input, OnInit } from '@angular/core';

// import ProgressLight, { init } from 'sdx/js/src/progress/ProgressLight';

@Component({
  selector: 'dmc-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() value: number;
  @Input() total: number;
  progress: number;
  complete: boolean;
  ticks: number[];

  constructor() {
  }

  ngOnInit() {
    this.ticks = Array.from(Array(this.total),(x,i)=>i+1);
    this.progress = 100 / this.total * this.value;
    this.complete = this.value === this.total;
  }

}
