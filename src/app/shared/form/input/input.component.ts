import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dmc-input',
  styleUrls: ['./input.component.scss'],
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input() formGroup: FormGroup;
  @Input() name: string;
  @Input() type: string = 'text';

  get invalid() {
    return (
      this.formGroup.get(this.name).invalid && this.formGroup.get(this.name).touched
    );
  }

  get valid() {
    return (
      this.formGroup.get(this.name).valid && this.formGroup.get(this.name).touched
    );
  }

  get hasContent(){
    return this.formGroup.get(this.name).value;
  }

  public identifier = `dmc-input-${identifier++}`;

}

let identifier = 0;
