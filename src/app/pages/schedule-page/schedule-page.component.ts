import { Component } from '@angular/core';
import { Doctor } from 'src/app/shared/models/doctor';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss']
})
export class SchedulePageComponent {
  doctor = new Doctor();

  appCards= [
    {
    class:"app-card card--next-available-spot",
    cardPictureSrc:"assets/image 9.svg",
    name : 'Dr. Joseph Brostito',
    speciality : 'Dental Specialist',
    upRightCardIcon:"map-pin",
    upRightCardLabel:"1.2 KM",
    leftCardIconName:"star",
    leftCardIconLabel:"4,8 (120 Reviews)",
    rightCardIconName:"clock-4",
    rightCardIconLabel:"Open at 17.00",
    buttonLabel: "Detail"
    },
    {
    class:"app-card card--next-available-spot",
    cardPictureSrc:"assets/image 10.svg",
    name : 'Dr. Bessie Coleman',
    speciality : 'Dental Specialist',
    upRightCardIcon:"map-pin",
    upRightCardLabel:"1.2 KM",
    leftCardIconName:"star",
    leftCardIconLabel:"4,8 (120 Reviews)",
    rightCardIconName:"clock-4",
    rightCardIconLabel:"Open at 17.00",
    buttonLabel: "Detail"
    },
    {
    class:"app-card card--next-available-spot",
    cardPictureSrc:"assets/image 11.svg",
    name : 'Dr. Babe Didrikson',
    speciality : 'Dental Specialist',
    upRightCardIcon:"map-pin",
    upRightCardLabel:"1.2 KM",
    leftCardIconName:"star",
    leftCardIconLabel:"4,8 (120 Reviews)",
    rightCardIconName:"clock-4",
    rightCardIconLabel:"Open at 17.00",
    buttonLabel: "Detail"
    },
    {
      class:"app-card card--next-available-spot",
      cardPictureSrc:"assets/image 10.svg",
      name : 'Dr. Bessie Coleman',
      speciality : 'Dental Specialist',
      upRightCardIcon:"map-pin",
      upRightCardLabel:"1.2 KM",
      leftCardIconName:"star",
      leftCardIconLabel:"4,8 (120 Reviews)",
      rightCardIconName:"clock-4",
      rightCardIconLabel:"Open at 17.00",
      buttonLabel: "Detail"
      },
  ];

  constructor() {
    this.doctor.setName('Dr. Joseph Brostito');
    this.doctor.setSpeciality('Dental Specialist');
  }
}
