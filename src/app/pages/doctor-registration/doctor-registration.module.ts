import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DoctorRegistrationRoutingModule } from './doctor-registration-routing.module';
import { DoctorRegistrationComponent } from './doctor-registration.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { LabelModule } from 'src/app/shared/components/label/label.module';



@NgModule({
  declarations: [
    DoctorRegistrationComponent
  ],
  imports: [
    CommonModule,
    DoctorRegistrationRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
    LabelModule
  ],
  exports: [
    DoctorRegistrationComponent
  ]
})
export class DoctorRegistrationModule { }
