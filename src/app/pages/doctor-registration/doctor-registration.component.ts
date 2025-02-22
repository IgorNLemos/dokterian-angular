import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.scss']
})
export class DoctorRegistrationComponent {
  doctorRegistrationForm: FormGroup;

  constructor(private fb:FormBuilder){

    this.doctorRegistrationForm = this.fb.group({
      firstName: ['',[Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required, Validators.minLength(2)]],
      birthdate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)9\d{8}$/)]],
      speciality: ['', [Validators.required]],
      crm: ['', [Validators.required, Validators.pattern(/^(CRM-\w{2} )?\d{4,6}(-\d)?(\/\w{2})?$/)]],
      cpf: ['',[Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      address: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    // Capitalize first letter on value change for firstName and lastName
    this.autoCapitalize('firstName');
    this.autoCapitalize('lastName');
  }

  autoCapitalize(field: string) {
    this.doctorRegistrationForm.get(field)?.valueChanges.subscribe(value => {
      if (value) {
        const formattedValue = this.capitalizeFirstLetter(value);
        if (formattedValue !== value) {
          this.doctorRegistrationForm.get(field)?.setValue(formattedValue, { emitEvent: false });
        }
      }
    });
  }

  capitalizeFirstLetter(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  register() {
    console.log(this.doctorRegistrationForm.value);
  }
}

