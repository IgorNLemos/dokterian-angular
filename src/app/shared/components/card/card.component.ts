import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() class: string;
  @Input() cardPictureSrc: string = 'assets/Frame.svg';
  @Input() name: string = '';
  @Input() speciality: string = '';
  @Input() upRightCardIcon: string;
  @Input() upRightCardLabel: string | null;
  @Input() leftCardIconName: string;
  @Input() rightCardIconName: string;
  @Input() leftCardIconLabel: string;
  @Input() rightCardIconLabel: string;
  @Input() showButton: boolean;
  @Input() buttonLabel: string;

  @Input() appCardItems: {
    class: string;
    cardPictureSrc: string;
    name: string;
    speciality: string;
    upRightCardIcon: string;
    upRightCardLabel: string | null;
    leftCardIconName: string;
    rightCardIconName: string;
    leftCardIconLabel: string;
    rightCardIconLabel: string;
    buttonLabel: string;
  }[] = [];

}
