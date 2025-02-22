import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  fabCardItems = [
    { name: 'biohazard', label: 'Covid 19' },
    { name: 'briefcase-medical', label: 'Doctor' },
    { name: 'pill', label: 'Medicine' },
    { name: 'hospital', label: 'Hospital' },
  ];

  activeItem: string = 'home';

  footerMenuItems = [
    { name: 'home', icon: 'house', label: 'Home', routerLink: '/dashboard' },
    { name: 'schedule', icon: 'calendar-search', label: 'Schedule', routerLink: '' },
    { name: 'messages', icon: 'message-square-text', label: 'Messages', routerLink: '/messages' },
    { name: 'profile', icon: 'circle-user-round', label: 'Profile', routerLink: '/user-profile' },
  ];
}
