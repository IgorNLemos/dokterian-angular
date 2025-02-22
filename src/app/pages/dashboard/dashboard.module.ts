import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FabCardModule } from 'src/app/shared/components/fab-card/fab-card.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    CardModule,
    MatInputModule,
    MatIconModule,
    FabCardModule,
    FooterModule
  ]
})
export class DashboardModule { }
