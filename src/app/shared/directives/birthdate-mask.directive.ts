import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appBirthdateMask]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: BirthdateMaskDirective,
      multi: true
    }
  ]
})
export class BirthdateMaskDirective implements Validator {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    let input = this.el.nativeElement.value.replace(/\D/g, ''); // Remove non-numeric chars

    if (input.length > 8) {
      input = input.substring(0, 8); // Limit to 8 digits
    }

    if (input.length >= 2) {
      input = `${input.substring(0, 2)}/${input.substring(2)}`;
    }
    if (input.length >= 5) {
      input = `${input.substring(0, 5)}/${input.substring(5)}`;
    }

    this.el.nativeElement.value = input; // Update formatted input
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const regex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(control.value) ? null : { invalidDate: true };
  }
}
