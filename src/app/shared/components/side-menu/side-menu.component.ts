import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

interface menuItemInterface {
  label: string;
  routerLink: string;
  routerLinkActive: string,
  ariaCurrentWhenActive: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  @Input() menuItems: menuItemInterface[] = []

  constructor() {}
}
