import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Customers-Management';

  activeItem: string = 'home';

  footerMenuItems = [
    { name: 'home', icon: 'House', label: 'Home', routerLink: '/dashboard' },
    { name: 'schedule', icon: 'Calendar-search', label: 'Schedule', routerLink: '/schedule-page' },
    { name: 'messages', icon: 'Message-square-text', label: 'Messages', routerLink: '/messages' },
    { name: 'profile', icon: 'Circle-user-round', label: 'Profile', routerLink: '/user-profile' },
  ];
}
