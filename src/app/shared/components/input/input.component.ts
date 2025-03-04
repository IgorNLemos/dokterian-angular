import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() form: FormGroup;
  @Input() control: string;
  @Input() textError: string;
  @Input() directive: string;

  constructor() {}
}
