import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() class: string;
  @Input() label: string;
  @Input() type: string;
  @Input() disabled: boolean;

  constructor () {}
}

