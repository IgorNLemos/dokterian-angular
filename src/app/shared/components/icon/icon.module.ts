import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { LucideAngularModule } from 'lucide-angular';



@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  exports: [
    IconComponent,
    LucideAngularModule
  ]
})
export class IconModule { }
