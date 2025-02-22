import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fab-card',
  templateUrl: './fab-card.component.html',
  styleUrls: ['./fab-card.component.scss']
})
export class FabCardComponent {
  @Input() fabCardItems: { name: string; label: string; }[] = [];
  @Input() size: string;
}
