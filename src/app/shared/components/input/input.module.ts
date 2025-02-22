import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CpfMaskDirective } from 'src/app/shared/directives/cpf-mask.directive';
import { PhoneMaskDirective } from 'src/app/shared/directives/phone-mask.directive';
import { CrmMaskDirective } from 'src/app/shared/directives/crm-mask.directive';
import { BirthdateMaskDirective } from '../../directives/birthdate-mask.directive';



@NgModule({
  declarations: [
    InputComponent,
    CpfMaskDirective,
    PhoneMaskDirective,
    CrmMaskDirective,
    BirthdateMaskDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,

  ],
  exports: [
    InputComponent,
  ]
})
export class InputModule { }
