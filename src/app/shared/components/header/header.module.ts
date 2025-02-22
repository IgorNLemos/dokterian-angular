import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LabelModule } from '../label/label.module';




@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LabelModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
