import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCrmMask]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CrmMaskDirective,
      multi: true
    }
  ]
})
export class CrmMaskDirective implements Validator {

  private regex: RegExp = /^(CRM-\w{2} )?\d{4,6}(-\d)?(\/\w{2})?$/;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input= event.target as HTMLInputElement
    const value= input.value.toUpperCase()
    this.el.nativeElement.value=this.applyMask(value)
  }

  @HostListener('focus', ['$event'])
  onFocus(event: Event){
    const input= event.target as HTMLInputElement
    const value= input.value
    if (!value.length){
      let inputValue = this.startingMask()
      this.el.nativeElement.value=inputValue
    }
  }

  applyMask(value: string): string{
    let formattedValue:string = '';
    const mask = ['C', 'R', 'M', '-', '/', '/','@', '_', '_', '_', '_', '_', '_'];


    for (let i = 0; i < value.length && i < mask.length; i++){
      const char = value[i];
      const isLetter = /^[a-zA-Z]$/.test(char);
      const isNumber = /^[0-9]$/.test(char);

      if (i <= 3) {
        formattedValue += mask[i]; // Add mask symbols as-is
      } else if ((i > 3 && i <= 5 && isLetter) || (mask[i] === '_' && isNumber)) {
        formattedValue += char; // Add valid characters
      } else if( i === 6) {
        formattedValue += " ";
      }
    }

    return formattedValue;
  }

  startingMask():string {
   return "CRM-";
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.regex.test(control.value) ? null : { invalidCrm: true };
  }
}
