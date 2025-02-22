import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { IconModule } from '../icon/icon.module';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    RouterModule,
    LucideAngularModule
  ],
  exports: [
    FooterComponent,
    LucideAngularModule,
    IconModule
  ]
})
export class FooterModule { }
