import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPhoneMask]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneMaskDirective,
      multi: true
    }
  ]
})
export class PhoneMaskDirective implements Validator {

  private regex: RegExp = /^\(\d{2}\)9\d{8}$/;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    let input = this.el.nativeElement.value.replace(/\D/g, ''); // Remove non-numeric chars

    if (input.length > 11) {
      input = input.substring(0, 11); // Limit to 11 digits
    }

    if (input.length >= 2) {
      input = `(${input.substring(0, 2)})${input.substring(2)}`;
    }
    if (input.length >= 9) {
      input = input.substring(0, 9) + '-' + input.substring(9);
    }

    this.el.nativeElement.value = input; // Update input field
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.regex.test(control.value) ? null : { invalidPhone: true };
  }
}
