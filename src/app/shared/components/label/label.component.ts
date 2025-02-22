import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})

export class LabelComponent {
  @Input() text:string;
  @Input() name:string;
  @Input() type:'normal' | 'header' = 'normal';
  constructor() {}
}
