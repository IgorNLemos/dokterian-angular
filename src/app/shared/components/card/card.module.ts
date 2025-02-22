import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { LucideAngularModule, icons  } from 'lucide-angular';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from "../icon/icon.module";
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick(icons),
    MatInputModule,
    MatIconModule,
    IconModule,
    ButtonModule
],
  exports: [
    CardComponent
  ]
})
export class CardModule {}
