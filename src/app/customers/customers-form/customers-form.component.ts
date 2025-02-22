import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface loginFormInterface {
  nome: string;
  senha: string;
  dataNascimento: any | null;
}

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.scss']
})
export class CustomersFormComponent {

  customerForm: FormGroup;

  customerLogin: loginFormInterface

  constructor (private fb: FormBuilder) {

    this.customerForm = this.fb.group({
      nome: ['',[Validators.required, Validators.minLength(3)]],
      cpf: ['',[Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      dataNascimento: ['', Validators.required],
      sexo: ['', Validators.required]
    })

    this.customerLogin = {
      nome:'',
      senha:'',
      dataNascimento: null,
    }
  }

  onSubmit () {}
}
