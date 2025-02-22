import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.scss']
})
export class CustomersFormComponent {
  customerForm: FormGroup;

  constructor (private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      nome: ['',[Validators.required, Validators.minLength(3)]],
      cpf: ['',[Validators.required, Validators.pattern(/^\d{11}$/)]],
      dataNascimento: ['', Validators.required],
      sexo: ['', Validators.required]
    })
  }

  onSubmit () {}
}
