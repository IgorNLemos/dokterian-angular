import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { CustomersFormComponent } from './customers-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CpfMaskDirective } from 'src/app/shared/directives/cpf-mask.directive';



@NgModule({
  declarations: [
      CustomersFormComponent,
      CpfMaskDirective,
    ],
    imports: [
      CommonModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCardModule,
      MatFormFieldModule,
      ReactiveFormsModule
    ],
    exports: [
      CustomersFormComponent
    ]
})
export class CustomersFormModule { }
