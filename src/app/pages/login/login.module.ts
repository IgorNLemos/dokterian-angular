import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { LoginRoutingModule } from './login-routing.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
    LoginRoutingModule,
  ],
  exports: [
    LoginComponent,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
