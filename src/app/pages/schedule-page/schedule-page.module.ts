import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulePageRoutingModule } from './schedule-page-routing.module';
import { SchedulePageComponent } from './schedule-page.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';


@NgModule({
  declarations: [
    SchedulePageComponent,
  ],
  imports: [
    CommonModule,
    SchedulePageRoutingModule,
    ButtonModule,
    CardModule,
    FooterModule
  ],
  exports: [
    SchedulePageComponent
  ]
})
export class SchedulePageModule { }
