import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() menuItems: { name: string; icon: string; label: string; routerLink: string; }[] = [];
  @Input() activeItem: string;

  setActive(item: string) {
    this.activeItem = item;
  }
}

