import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabCardComponent } from './fab-card.component';
import { IconModule } from "../icon/icon.module";



@NgModule({
  declarations: [
    FabCardComponent
  ],
  imports: [
    CommonModule,
    IconModule
],
  exports: [
    FabCardComponent
  ]
})
export class FabCardModule { }
